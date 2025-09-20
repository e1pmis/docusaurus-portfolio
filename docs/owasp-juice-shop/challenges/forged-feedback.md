# Forged Feedback 

| Item              | Detail                                                                 |
|-------------------|------------------------------------------------------------------------|
| **Category**      | Broken Access Control → Horizontal Privilege Escalation                |
| **Difficulty**    | Medium (3‑Star)                                                         |
| **Juice Shop Flag** | 🎯 `score-board#Forged Feedback`                                      |
| **Video Demo**    | [Loom Recording](https://www.loom.com/share/a740a5ef424e4c4985a02cdcbe4761d6?sid=6e2ab31e-a2c2-439f-a5b9-caf40871707b) |
| **Tools Used**    | Burp Suite (Intercept / Repeater)                                      |
| **Date Completed**| 2025‑07    
---

## 1. Vulnerability Overview

The `POST /api/Feedbacks/` endpoint fails to validate the `UserId` field submitted by the client.  
This allows an attacker to **impersonate any user** by modifying the `UserId` in the request payload.  
No session validation or ownership check is enforced—feedback gets recorded under any chosen account.

---

## 2. Risk & Impact

- **Reputation Manipulation:**  
  Attackers can post fake reviews under trusted accounts (e.g., admins or VIPs), either to:
  - Boost the credibility of a product or service.
  - Defame or discredit targeted users.

- **No Accountability:**  
  Logs and UI will falsely attribute malicious or biased feedback to innocent users, undermining trust.

---

## 3. Reproduce Step-by-Step

1. **Setup**
   - Launch Juice Shop locally.
   - Configure your browser to route traffic through **Burp Suite**.
   - Log in as any user and navigate to the feedback form at `/#/feedback`.

2. **Intercept & Modify**
   - Submit a feedback form normally but **intercept** the request in Burp.
   - Modify the JSON payload, replacing the `UserId` with the ID of another user (e.g., `21`):
     ```json
     {
       "UserId": 21,                 // <= forged
       "captchaId": 1,
       "captcha": "23",
       "comment": "I like the shop. (***t@gmx.com)",
       "rating": 5
     }
     ```
   - Forward the modified request.

3. **Result**
   - The server responds with `201 Created`.
   - The comment is now displayed as if it was posted by the forged user ID (e.g., user 1).

---

## 4. Remediation

- **Enforce ownership checks** on the server side:
  - Ensure that the authenticated session’s user matches the `UserId` in the payload.
- **Ignore or override client-supplied `UserId` values** and use the logged-in user’s ID from the token.
- **Log and alert** on suspicious feedback submissions or mismatched identifiers.

---

## 5. Notes

- This is a classic example of **horizontal privilege escalation** via ID tampering.
- No CAPTCHA validation is bypassed in this case—the challenge lies in the broken access control, not anti-bot.
