# OWASP Juice Shop – Main

This project contains a collection of Juice Shop hacking challenges solved as part of the **Juice Shop Meister** initiative.  
The purpose is to demonstrate practical exploitation of common web vulnerabilities and document both the technical process and its implications.

The repository includes:
- Reproducible exploitation steps for selected challenges.
- Risk assessments and real-world consequences.
- Demo video walkthroughs showing step-by-step execution.


> ⚠️ **Disclaimer:**  
> This documentaion is intended **strictly for educational purposes**.  
> All activities demonstrated here were conducted in a controlled environment on intentionally vulnerable applications.  
> Do **not** use these techniques against systems you do not own or have explicit permission to test.

---

## 📘 Table of Contents

- [OWASP Juice Shop – Main](#owasp-juice-shop--main)
  - [📘 Table of Contents](#-table-of-contents)
  - [✅ Challenges](#-challenges)
    - [1. Admin Registration](#1-admin-registration)
    - [2. API-only XSS](#2-api-only-xss)
    - [3. Forged Feedback](#3-forged-feedback)
    - [4. CAPTCHA Bypass](#4-captcha-bypass)

---


## ✅ Challenges

Each challenge targets a **different vulnerability category** and is documented in detail:

### 1. Admin Registration
- **Category:** Broken Access Control → Privilege Escalation
- **Flag:** `score-board#Admin Registration`
- **Summary:** Gains admin rights during signup by injecting `"role": "admin"` in the request.
- 📄 [Read full report](docs/owasp-juice-shop/challenges/admin-registration.md)  
- 🎥 [Watch video demo](https://www.loom.com/share/927a884d9b18462ca6f5155743559850?sid=574d181f-dd2e-4af7-a48b-a1279c48c437)

---

### 2. API-only XSS
- **Category:** Cross-Site Scripting → Stored XSS via API
- **Flag:** `score-board#API-only XSS`
- **Summary:** Injects a malicious payload via `PUT /api/Products/:id` that triggers on product pages.
- 📄 [Read full report](docs/owasp-juice-shop/challenges/api-only-xss.md)  
- 🎥 [Watch video demo](https://www.loom.com/share/bc30952ee16a4076a4a5eb6b184616e1?sid=9e7a4c05-8dd3-4dcd-a6cb-75d3e9d1fe2c)

---

### 3. Forged Feedback
- **Category:** Broken Access Control → Horizontal Privilege Escalation
- **Flag:** `score-board#Forged Feedback`
- **Summary:** Sends feedback under another user's identity by modifying the `UserId`.
- 📄 [Read full report](docs/owasp-juice-shop/challenges/forged-feedback.md)  
- 🎥 [Watch video demo](https://www.loom.com/share/a740a5ef424e4c4985a02cdcbe4761d6?sid=6e2ab31e-a2c2-439f-a5b9-caf40871707b)

---

### 4. CAPTCHA Bypass
- **Category:** Broken Anti-Automation  
- **Flag:** `score-board#CAPTCHA Bypass`  
- **Summary:** Reuses a solved CAPTCHA token for unlimited feedback submissions, bypassing anti-bot measures.  
- 📄 [Read full report](docs/owasp-juice-shop/challenges/captcha-bypass.md)  
- 🎥 [Watch video demo](https://www.loom.com/share/61e8371a3ed447cc9ed6270ffead11cd?sid=a9cb9be7-d181-4765-9c18-745fcd1b1047)

---