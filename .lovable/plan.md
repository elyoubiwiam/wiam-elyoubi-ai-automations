# Set up email notifications for form submissions

## Goal
When someone submits the estimate form or the contact form, Wiam receives an email with the details (instead of the request only being saved in the backend).

The forms already work and save submissions. The only missing piece is sending the email.

## What I will do
1. Turn on the built-in email service for the project (Lovable Emails).
2. Update the estimate form handler to send an email with the submission details (project type, systems, engagement, estimate, email address).
3. Update the contact form handler the same way (name, email, message).
4. Redeploy the form handlers and test both forms end to end.

## What I need from you
- **A sending domain** — the address emails are sent from. You add your domain (e.g. your domain from your domain provider) in the email setup dialog and add the DNS records it shows. Without it, emails can't be delivered.
- **The recipient email address** — the inbox where notifications should arrive (your email address).

## Technical details
- The form handlers are Supabase Edge Functions `submit-estimate` and `submit-contact`. Today they only insert a row into `estimate_requests` / `contact_submissions`; I'll add an email send after a successful insert.
- Email sending goes through the Lovable email gateway with no API keys needed. If the send fails, the submission is still saved — the visitor never sees an error because of email problems.
- The email is a notification to you (the site owner), not a reply to the visitor. The visitor's confirmation remains the on-screen message.
- Sending will not work until the sending domain is verified, but the code can be in place and tested once it is.
