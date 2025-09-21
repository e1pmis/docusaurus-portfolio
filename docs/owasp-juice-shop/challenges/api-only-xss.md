# API-only XSS 

| Item | Detail |
|------|--------|
| **Category** | Cross-Site Scripting (XSS) → Stored XSS via API |
| **Difficulty** | Medium (3‑Star) |
| **Juice Shop Flag** | 🎯 `score-board#API-only XSS` |
| **Video Demo** | [Loom Recording](https://www.loom.com/share/bc30952ee16a4076a4a5eb6b184616e1?sid=9e7a4c05-8dd3-4dcd-a6cb-75d3e9d1fe2c) |
| **Tools Used** | Burp Suite (intercept/repeater), Browser |
| **Date Completed** | 2025‑07 |

---

## 1. Vulnerability Overview
The `PUT /api/Products/:id` endpoint allows modification of product data, including the `description` field.  
The server accepts HTML and JavaScript content in this field without sanitization or encoding.  
If an attacker updates the description with a script payload, it is rendered and executed on the product listing page, triggering stored XSS.

This works even if the product was created via the UI—only the API needs to be used for injection.

---

## 2. Risk & Impact
* **Stored XSS:** Malicious code is stored on the server and runs in every visitor’s browser.
* **Credential theft:** Attackers can steal session tokens or impersonate users.
* **Admin compromise:** If viewed by an admin, XSS can lead to full backend takeover via CSRF or token theft.
* **Trust damage:** Defacing pages or redirecting users damages business reputation.

---

## 3. Reproduce Step-by-Step

1. **Launch Juice Shop**
   - Start the OWASP Juice Shop application (locally or in a lab environment).

2. **Intercept Admin Login to Obtain Token**
   - Open **Burp Suite** and enable **Intercept** mode.
   - In your browser, log in to Juice Shop using **admin credentials**.
   - Capture the login request and inspect the **response** in Burp.
   - Copy the **Authorization token** from the response body.

3. **Exploit via PUT Method**
   - Switch to **Burp Repeater** and prepare a `PUT` request to the following endpoint:
     ```
     PUT /api/Products/:id
     ```
     - Replace `:id` with the actual product ID (e.g., `1`).

4. **Add Authentication Header**
   - In the request headers, include:
     ```
     Authorization: Bearer <copied_token>
     ```
     - Replace `<copied_token>` with the actual obtained from the admin login.

5. **Inject XSS Payload**
   - Use the following JSON payload in the request body:
     ```json
     {
       "description": "<iframe src=\"javascript:alert(`xss`)\"></iframe>"
     }
     ```

6. **Send the Request**
   - Send the request using Burp Repeater.
   - A `200 OK` response confirms the update was successful.

7. **Trigger the XSS**
   - Open the `/#/search` page or any product listing view in your browser.
   - The XSS payload will execute automatically when the page renders the updated product description.
  
---

## 4. Remediation
* **Server-side sanitization:** Strip or escape dangerous tags and attributes (`<script>`, `onload`, etc.).
* **Output encoding:** Apply contextual output encoding on all user-supplied data.
* **Use a security-focused templating engine** to avoid raw HTML injection.
* **Deploy CSP headers** to mitigate the impact of stored XSS vectors.

---

## 5. Notes
* This challenge does not require creating a new product.
* The XSS vector only works if injected via the API—not the web UI.
* Editing existing objects via vulnerable API endpoints is a common real-world attack technique.

---
