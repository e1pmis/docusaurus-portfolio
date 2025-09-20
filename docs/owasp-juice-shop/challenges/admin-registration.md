# Admin Registration

| Item              | Detail                                                                 |
|-------------------|------------------------------------------------------------------------|
| **Category**      | Broken Access Control → Privilege Escalation                           |
| **Difficulty**    | Medium (3‑Star)                                                         |
| **Juice Shop Flag** | 🎯 `score-board#Admin Registration`                                  |
| **Video Demo**    | [Loom Recording](https://www.loom.com/share/927a884d9b18462ca6f5155743559850?sid=574d181f-dd2e-4af7-a48b-a1279c48c437) |
| **Tools Used**    | Burp Suite (Intercept / Repeater)                                      |
| **Date Completed**| 2025‑07                                                                 |

---

## 1. Vulnerability Overview

The `POST /api/Users` endpoint blindly accepts all attributes provided in the request body.  
By injecting `"role": "admin"` into the registration payload, an attacker can self-register as an administrator—**without any authorization or validation**.

---

## 2. Risk & Impact

- **Full System Compromise:**  
  Attackers gain unrestricted access to all admin features, including user management, product changes, order data, and application configurations.

- **Real-World Implications:**  
  - Violation of access control best practices  
  - Severe compliance breaches (e.g., GDPR)  
  - Potential for data leakage, tampering, defacement, or ransomware

---

## 3. Reproduce Step-by-Step

1. **Setup**
   - Launch Juice Shop locally.
   - Open Burp Suite and configure the browser to use its proxy.
   - Navigate to the registration page: `/#/register`.

2. **Intercept & Modify Registration Request**
   - Register with a new account, but intercept the request using Burp.
   - Modify the POST payload to include the `role` field:
     ```json
     {
       "email": "test@gmx.com",
       "password": "P@ssw0rd!",
       "passwordRepeat": "P@ssw0rd!",
       "role": "admin"              // <= added
     }
     ```

3. **Submit and Confirm Escalation**
   - Forward the modified request.
   - The server responds with `200 OK`, and the returned user object includes `"role": "admin"`.
   - Log in using the new account.
   - The **Administration** panel will now be visible and accessible.

---

## 4. Remediation

- **Whitelist Fields on Server-Side:**  
  Accept only required fields (e.g., `email`, `password`) during registration. Reject or ignore any extraneous attributes.

- **Enforce Role Assignment Logic:**  
  Set the role server-side (e.g., `role: customer`) regardless of client input.

- **Log Suspicious Input:**  
  Alert and log any attempts to assign roles manually during signup.

---

## 5. Notes

- No login session or admin approval is needed, the role is injected during signup.
- This is a textbook **privilege escalation** due to lack of backend validation.
