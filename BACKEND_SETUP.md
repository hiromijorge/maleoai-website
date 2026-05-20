# Backend Setup Guide for Maleo AI Website

This guide will help you set up all the backend integrations for the lead capture form.

---

## 📊 1. Google Analytics Setup

### Get Your GA4 Measurement ID

1. **Go to Google Analytics**: https://analytics.google.com
2. **Sign in** with your Google account (hiromi170117@gmail.com)
3. Click **"Start measuring"** or the **Admin** gear icon (bottom left)
4. Click **"Create"** → **"Property"**
5. Enter details:
   - **Property name**: "Maleo AI Website"
   - **Time zone**: Select your timezone
   - **Currency**: USD
6. Click **"Next"** → Answer business questions → Click **"Create"**
7. Choose **"Web"** as your platform
8. Enter:
   - **Website URL**: `https://maleoai.com`
   - **Stream name**: "Maleo AI Website"
9. Click **"Create stream"**
10. **Copy the Measurement ID** (looks like: `G-XXXXXXXXXX`)

### Add to Environment Variables
```bash
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```

---

## 🗄️ 2. Supabase Setup (Database for Leads)

### Create Supabase Account & Project

1. **Go to Supabase**: https://supabase.com
2. **Sign up** with your Google account
3. Click **"New Project"**
4. Enter:
   - **Organization**: Create new or select existing
   - **Project name**: "maleo-ai-website"
   - **Database password**: Generate a secure password
   - **Region**: Select closest to your users (e.g., Southeast Asia)
5. Click **"Create new project"**
6. Wait for the project to be created (~2 minutes)

### Get API Keys

1. In your project, go to **Settings** (gear icon, bottom left)
2. Click **API** in the left sidebar
3. Copy these values:
   - **Project URL** (under Config)
   - **service_role secret** (under Service_role secrets)

### Create Leads Table

1. Go to **Table Editor** (left sidebar)
2. Click **"New table"**
3. Enter:
   - **Name**: `leads`
   - **Enable Row Level Security (RLS)**: Leave unchecked for now
4. Add the following columns (click "Add column"):

| Column Name | Type | Default Value |
|------------|------|---------------|
| id | uuid | gen_random_uuid() |
| name | text | - |
| email | text | - |
| company | text | - |
| role | text | - |
| company_size | text | - |
| pain_point | text | - |
| message | text | '' |
| source | text | 'unknown' |
| form_type | text | - |
| submitted_at | timestamptz | now() |
| page_url | text | - |
| referrer | text | - |
| status | text | 'new' |
| created_at | timestamptz | now() |

5. Click **"Save"**

### Add to Environment Variables
```bash
NEXT_PUBLIC_SUPABASE_URL=https://xxxxxxxxxxxx.supabase.co
SUPABASE_SERVICE_ROLE_KEY=eyJ...
```

---

## 📧 3. Resend Setup (Email Notifications)

### Sign Up & Verify Domain

1. **Go to Resend**: https://resend.com
2. **Sign up** with your Google account
3. Click **"Domains"** in the sidebar
4. Click **"Add Domain"**
5. Enter your domain: `maleoai.com`
6. Click **"Add"**

### Configure DNS Records

Resend will provide DNS records to add to your domain registrar:

1. Go to your domain registrar (e.g., Namecheap, GoDaddy, Cloudflare)
2. Find **DNS Management** or **DNS Records**
3. Add the records provided by Resend:
   - **Type**: TXT
   - **Host/Name**: (as provided by Resend)
   - **Value**: (as provided by Resend)
   
   And for DKIM:
   - **Type**: TXT
   - **Host/Name**: (as provided by Resend)
   - **Value**: (as provided by Resend)

4. Wait 5-10 minutes for DNS propagation
5. In Resend, click **"Verify Domain"**

### Get API Key

1. In Resend, click **"API Keys"** in the sidebar
2. Click **"Create API Key"**
3. Enter:
   - **Name**: "Maleo AI Website"
   - **Permission**: Sending access
4. Click **"Add"**
5. **Copy the API key** (starts with `re_`)

### Add to Environment Variables
```bash
RESEND_API_KEY=re_xxxxxxxxxxxxxxxx
FROM_EMAIL=Maleo AI <noreply@maleoai.com>
NOTIFICATION_EMAIL=hiromi170117@gmail.com
```

---

## 💬 4. Slack Setup (Team Notifications)

### ⚠️ Important: No Tokens Required!

**You DO NOT need:**
- ❌ OAuth access tokens
- ❌ Refresh tokens  
- ❌ Bot tokens
- ❌ User tokens

**You ONLY need:**
- ✅ **Incoming Webhook URL** (one simple URL!)

A webhook URL is like a special mailbox address. When our server sends lead data to this URL, Slack automatically posts it to your channel. The URL itself contains all the authentication needed.

### Create Slack App

**Time:** 3 minutes  
**Difficulty:** Easy

1. **Go to Slack API**: https://api.slack.com/apps
2. Click **"Create New App"**
3. Choose **"From scratch"**
4. Enter:
   - **App Name**: "Maleo AI Leads"
   - **Workspace**: Select your workspace
5. Click **"Create App"**

### Enable Incoming Webhooks

1. In the left sidebar, click **"Incoming Webhooks"**
2. Toggle **"Activate Incoming Webhooks"** to On
3. Scroll down and click **"Add New Webhook to Workspace"**
4. Select the channel where you want to receive notifications:
   - Choose an existing channel (e.g., #leads, #general)
   - Or create a new channel
5. Click **"Allow"**
6. **Copy the Webhook URL** (starts with `https://hooks.slack.com/services/`)

### Add to Environment Variables
```bash
SLACK_WEBHOOK_URL=your_slack_webhook_url_here
```

---

## 📝 5. Create Environment File

Create a file named `.env.local` in your project root:

```bash
# Copy from the example file
cp .env.local.example .env.local

# Or create manually and paste your values
```

Fill in all the values:
```bash
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
NEXT_PUBLIC_SUPABASE_URL=https://xxxxxxxxxxxx.supabase.co
SUPABASE_SERVICE_ROLE_KEY=eyJ...
RESEND_API_KEY=re_xxxxxxxxxxxxxxxx
FROM_EMAIL=Maleo AI <noreply@maleoai.com>
NOTIFICATION_EMAIL=hiromi170117@gmail.com
SLACK_WEBHOOK_URL=https://hooks.slack.com/services/...
```

**⚠️ IMPORTANT**: Never commit `.env.local` to git! It's already in `.gitignore`.

---

## 🧪 6. Test Your Setup

### Start Development Server
```bash
npm run dev
```

### Test the Form
1. Go to `http://localhost:3000`
2. Click "Start Your Pilot" button
3. Fill out the form with test data
4. Submit the form
5. Check for:
   - ✅ Data in Supabase (Table Editor > leads)
   - ✅ Email in your inbox
   - ✅ Slack notification in your channel
   - ✅ Google Analytics event in GA Realtime

---

## 🔧 Troubleshooting

### Supabase Issues
- **Error connecting**: Check URL and service_role key
- **Table not found**: Ensure you created the `leads` table
- **Insert failed**: Check column names match exactly

### Email Issues
- **Emails not sending**: Verify domain is verified in Resend
- **Going to spam**: Ensure SPF/DKIM DNS records are correct
- **API key error**: Use the sending access key, not API key

### Slack Issues
- **Webhook not working**: Regenerate webhook URL
- **Wrong channel**: Re-add webhook to correct channel
- **No notifications**: Check if channel is private and bot is invited

### Google Analytics Issues
- **No tracking**: Check GA ID format (should start with G-)
- **Not showing**: Wait 24-48 hours for data to appear in reports
- **Realtime not working**: Use GA4 Realtime report (not Universal Analytics)

---

## 📱 Alternative: Use Without Some Integrations

If you don't want to set up all integrations, you can:

1. **Skip Slack**: Leave `SLACK_WEBHOOK_URL` empty - other integrations will still work
2. **Skip Email**: Leave `RESEND_API_KEY` empty - data will still store in Supabase
3. **Skip Supabase**: Data will be logged to console but not persisted

The system is designed to work with partial setup - it won't crash if some services aren't configured.

---

## 🚀 Production Deployment

When deploying to Vercel:

1. Go to your project in Vercel Dashboard
2. Click **"Settings"** → **"Environment Variables"**
3. Add all variables from your `.env.local` file
4. Redeploy the project

The lead capture form will now work in production!
