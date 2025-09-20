# CAPTCHA Bypass 

| Item                | Detail                                                                 |
|---------------------|------------------------------------------------------------------------|
| **Category**        | Broken Anti-Automation                                                 |
| **Difficulty**      | Medium (3‑Star)                                                         |
| **Juice Shop Flag** | 🎯 `score-board#CAPTCHA Bypass`                                        |
| **Video Demo** | [Loom Recording](https://www.loom.com/share/61e8371a3ed447cc9ed6270ffead11cd?sid=a9cb9be7-d181-4765-9c18-745fcd1b1047) |
| **Tools Used**      | Burp Suite (Intercept / Intruder), Browser                  |
| **Date Completed**  | 2025‑07                                                                 |

---

## 1. Vulnerability Overview

The `POST /api/Feedbacks/` endpoint requires a valid `captchaId` and `captcha` value.  
However, the backend **does not invalidate** CAPTCHA tokens after they’ve been solved.  
This allows an attacker to **reuse** a single valid CAPTCHA answer for unlimited feedback submissions, effectively bypassing anti-automation protections.

---

## 2. Risk & Impact

- **Automation Abuse**  
  An attacker can script high-volume feedback submissions using a single solved CAPTCHA.

- **CAPTCHA Logic Bypass**  
  Even though CAPTCHA is technically validated, its **reusability** renders it useless for bot protection.

- **Data Pollution**  
  The feedback system can be spammed with fake or malicious content, damaging integrity and UX.

- **System Resource Abuse**  
  If the endpoint is not rate-limited, this bypass can lead to a denial of service.

---

## 3. Reproduce Step-by-Step

### A. Manual Replay of Valid CAPTCHA

1. **Setup**
   - Launch OWASP Juice Shop locally.
   - Use Burp Suite to intercept browser traffic.

2. **Solve CAPTCHA Once**
   - Navigate to `/#/feedback`, fill in the form, and solve the CAPTCHA.
   - Intercept the `POST /api/Feedbacks/` request in Burp.
   - Note the `captchaId` and `captcha` values.

3. **Replay the Request**
   - Send the **same request** (with identical `captchaId` and `captcha`) via **Burp Repeater**.
   - Observe: you get a `201 Created` again.
   - Repeat this multiple times—**same CAPTCHA still works**.

---

### B. Automating Spam with Burp Intruder

1. **Send Valid Request to Intruder**
   - Use the previously successful request with valid CAPTCHA fields.

2. **Mark Payload Position**
   - Highlight the `comment` value like so:
     ```json
     {
       "comment": "§SPAM§",
       "rating": 5,
       "captchaId": 0,
       "captcha": "11"
     }
     ```

3. **Load Payloads**
   - Use spam variations:
     ```
     FeedbackBot01
     BuyNowLinks
     HelloFromScript
     FakePraise
     SpamEntry999
     ```

4. **Launch Attack**
   - Start Intruder. All payloads return `201 Created` using **the same CAPTCHA**, confirming the bypass.

---

## 4. Remediation

- ✅ **Invalidate CAPTCHA after first successful use.**
- 🔒 **Bind CAPTCHA token to session/IP/user** to prevent replay by other clients.
- ⏳ **Expire CAPTCHA tokens after a short TTL** (e.g., 2–5 minutes).
- 🧠 **Implement server-side CAPTCHA enforcement only**, not client-trusting logic.
- 🛡️ **Use stronger bot protection**, like invisible reCAPTCHA v3 or hCaptcha with behavioral signals.

---

## 6. Notes

- This is not a case of missing validation — it's **weak validation** that allows abuse through **token reuse**.
- This flaw is **very common** in poorly implemented CAPTCHA protections where the frontend validates, but the backend trusts it blindly.

---
