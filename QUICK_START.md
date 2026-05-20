# 🔧 Quick Setup Reference

## Required Environment Variables

Create `.env.local` file in project root with these values:

```bash
# Google Analytics (Get from https://analytics.google.com)
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX

# Supabase (Get from https://supabase.com/dashboard)
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
SUPABASE_SERVICE_ROLE_KEY=eyJ...

# Resend Email (Get from https://resend.com)
RESEND_API_KEY=re_xxxxxxxxxxxxxxxx
FROM_EMAIL=Maleo AI <noreply@maleoai.com>
NOTIFICATION_EMAIL=hiromi170117@gmail.com

# Slack (Optional - Get from https://api.slack.com/apps)
SLACK_WEBHOOK_URL=https://hooks.slack.com/services/...
```

---

## 🚀 Quick Start Steps

### 1. Google Analytics (5 minutes)
1. Go to https://analytics.google.com
2. Create Property → Web → Get Measurement ID (G-XXXXXXXXXX)
3. Add to `.env.local`

### 2. Supabase (10 minutes)
1. Go to https://supabase.com → New Project
2. Get Project URL + Service Role Key from Settings > API
3. Go to SQL Editor → New Query → Paste contents of `supabase/leads_table.sql`
4. Run the SQL script
5. Add credentials to `.env.local`

### 3. Resend Email (15 minutes)
1. Go to https://resend.com → Sign up
2. Add Domain → Add DNS records to your domain registrar
3. Verify domain (wait for DNS propagation)
4. Create API Key (Sending access)
5. Add to `.env.local`

### 4. Slack (Optional, 3 minutes)
**Note: You ONLY need the Webhook URL - no tokens or OAuth required!**

1. Go to https://api.slack.com/apps → Create New App → "From scratch"
2. App Name: "Maleo AI Leads" → Select your workspace → Create
3. Left sidebar: Click "Incoming Webhooks" → Toggle ON
4. Click "Add New Webhook to Workspace"
5. Select channel (e.g., #leads or #general) → Allow
6. **Copy Webhook URL** (starts with `https://hooks.slack.com/services/`)
7. Add to `.env.local`

---

## 📁 Files Created

### Documentation
- `BACKEND_SETUP.md` - Complete setup guide with screenshots
- `.env.local.example` - Environment variables template
- `QUICK_START.md` - This quick reference

### Supabase
- `supabase/leads_table.sql` - SQL script to create leads table

### Backend
- `src/app/api/leads/route.js` - Lead submission API endpoint

### Analytics
- `src/lib/analytics.js` - Google Analytics tracking utilities
- `src/app/components/GoogleAnalytics.js` - GA4 integration component

### Forms
- `src/app/components/LeadCaptureForm.js` - Lead capture form
- `src/app/components/LeadModal.js` - Modal wrapper for form

---

## 🧪 Test Commands

```bash
# Install dependencies (if not already done)
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Test form submission
# 1. Go to http://localhost:3000
# 2. Click "Start Your Pilot"
# 3. Fill and submit form
# 4. Check Supabase, Email, Slack
```

---

## 📊 Data Collected

The lead form captures:
- **Name** - Full name of contact
- **Email** - Work email address
- **Company** - Company name
- **Role** - Job title/role (Founder, CTO, COO, Manager, etc.)
- **Company Size** - Number of employees
- **Pain Point** - Biggest AI challenge
- **Message** - Optional project description
- **Source** - How they found you (Google, LinkedIn, Referral, etc.)
- **Form Type** - Which CTA they clicked (pilot, consultation, geo_audit)
- **Page URL** - Where they submitted from
- **Referrer** - Previous page

---

## 🎯 Lead Statuses

Track lead progress in Supabase:
- `new` - Just submitted
- `contacted` - You've reached out
- `qualified` - Good fit confirmed
- `converted` - Became a customer
- `lost` - Not a fit

Update status with SQL:
```sql
UPDATE leads SET status = 'contacted' WHERE id = 'uuid-here';
```

---

## 📧 Email Template

The email notification includes:
- Beautiful HTML design
- All lead details in a table
- Pain point highlighted
- Message (if provided)
- Source tracking info
- Lead ID and timestamp

Sent to: `NOTIFICATION_EMAIL` (default: hiromi170117@gmail.com)

---

## 💬 Slack Notifications

**Important:** Slack integration uses **Incoming Webhooks** - you only need a Webhook URL, not access tokens, refresh tokens, or OAuth!

### What is a Webhook URL?
It's a special URL that acts like a mailbox. When you send data to it (via POST request), Slack receives it and posts a message to your channel. No authentication tokens needed - the URL itself is the secret.

### Slack Message Includes:
- 🎯 Header with form type
- Contact information
- Company details
- Pain point highlighted
- Optional message
- Lead ID and timestamp

---

## 📈 Analytics Events Tracked

The system tracks:
- `form_submit_attempt` - User clicked submit
- `form_submit_success` - Lead successfully saved
- `form_submit_error` - Something went wrong
- `cta_click` - Any CTA button clicked
- `service_interest` - User clicked a service card
- `scroll_depth` - 25%, 50%, 75%, 90% scroll
- `time_on_page` - How long they stayed

View in Google Analytics 4 → Events

---

## 🔒 Security Notes

1. **Never commit `.env.local`** - It's in `.gitignore`
2. **Use Service Role Key for Supabase** - Not anon key
3. **Verify domain in Resend** - Prevents email spoofing
4. **Keep API keys secret** - Don't share or expose in frontend

---

## 🆘 Troubleshooting

### Build fails
```bash
# Clear cache and rebuild
rm -rf .next
npm run build
```

### Form not submitting
- Check browser console for errors
- Verify API endpoint: `http://localhost:3000/api/leads`
- Check server logs

### No data in Supabase
- Verify Supabase URL and key
- Check if `leads` table exists
- Look for errors in server console

### Emails not sending
- Check if domain is verified in Resend
- Verify FROM_EMAIL format: `Name <email@domain.com>`
- Check spam folders

### Slack not working
- Regenerate webhook URL
- Verify bot is in the channel
- Check if channel is private

---

## 📞 Need Help?

Detailed guides:
- Full setup: `BACKEND_SETUP.md`
- Database setup: `supabase/leads_table.sql`
- API code: `src/app/api/leads/route.js`

All integrations are **optional** - the form will work with partial setup!
