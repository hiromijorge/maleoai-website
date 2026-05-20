import { NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';
import { Resend } from 'resend';

// Initialize clients (only if env vars are available)
const supabase = process.env.NEXT_PUBLIC_SUPABASE_URL && process.env.SUPABASE_SERVICE_ROLE_KEY
  ? createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_ROLE_KEY)
  : null;

const resend = process.env.RESEND_API_KEY
  ? new Resend(process.env.RESEND_API_KEY)
  : null;

export async function POST(request) {
  try {
    const body = await request.json();
    
    const {
      name,
      email,
      company,
      role,
      companySize,
      painPoint,
      message,
      source,
      formType,
      submittedAt,
      pageUrl,
      referrer,
    } = body;

    // Validate required fields
    if (!name || !email || !company || !role || !companySize || !painPoint) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    // Prepare lead data
    const leadData = {
      id: crypto.randomUUID(),
      name: name.trim(),
      email: email.toLowerCase().trim(),
      company: company.trim(),
      role,
      company_size: companySize,
      pain_point: painPoint,
      message: message?.trim() || '',
      source: source || 'unknown',
      form_type: formType,
      submitted_at: submittedAt || new Date().toISOString(),
      page_url: pageUrl,
      referrer,
      status: 'new',
      created_at: new Date().toISOString(),
    };

    const results = {
      supabase: false,
      email: false,
      slack: false,
    };

    // 1. Store in Supabase
    try {
      if (supabase) {
        const { error: supabaseError } = await supabase
          .from('leads')
          .insert([leadData]);

        if (supabaseError) {
          console.error('Supabase error:', supabaseError);
        } else {
          results.supabase = true;
          console.log('✅ Lead stored in Supabase');
        }
      }
    } catch (dbError) {
      console.error('Database error:', dbError);
    }

    // 2. Send email notification
    try {
      if (resend && process.env.FROM_EMAIL) {
        await resend.emails.send({
          from: process.env.FROM_EMAIL,
          to: process.env.NOTIFICATION_EMAIL?.split(',') || ['hiromi170117@gmail.com'],
          subject: `🎯 New Lead: ${formType.toUpperCase()} from ${company}`,
          html: generateEmailTemplate(leadData),
        });
        results.email = true;
        console.log('✅ Email notification sent');
      }
    } catch (emailError) {
      console.error('Email error:', emailError);
    }

    // 3. Send Slack notification
    try {
      if (process.env.SLACK_WEBHOOK_URL) {
        const slackResponse = await fetch(process.env.SLACK_WEBHOOK_URL, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ 
            text: formatSlackMessage(leadData),
            blocks: formatSlackBlocks(leadData)
          }),
        });

        if (slackResponse.ok) {
          results.slack = true;
          console.log('✅ Slack notification sent');
        }
      }
    } catch (slackError) {
      console.error('Slack error:', slackError);
    }

    // Log the lead for debugging
    console.log('📩 New Lead Submitted:', {
      ...leadData,
      integrations: results,
    });

    return NextResponse.json(
      { 
        success: true, 
        message: 'Lead submitted successfully',
        leadId: leadData.id,
        integrations: results,
      },
      { status: 201 }
    );

  } catch (error) {
    console.error('Error processing lead submission:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

// Email template generator
function generateEmailTemplate(lead) {
  const painPointMap = {
    'speed': "Can't compete on speed with larger enterprises",
    'manual': 'Manual processes draining resources',
    'roi': 'Uncertainty about AI ROI',
    'vendor': 'Fear of choosing wrong vendor',
    'talent': 'Lack of AI talent in-house',
    'other': 'Other',
  };

  const roleMap = {
    'founder': 'Founder / CEO',
    'cto': 'CTO / Tech Lead',
    'coo': 'COO / Operations',
    'manager': 'Department Manager',
    'other': 'Other',
  };

  return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>New Lead - Maleo AI</title>
    </head>
    <body style="margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; background-color: #f5f5f5;">
      <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #f5f5f5; padding: 40px 20px;">
        <tr>
          <td align="center">
            <table width="600" cellpadding="0" cellspacing="0" style="background-color: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
              <!-- Header -->
              <tr>
                <td style="background: linear-gradient(135deg, #f97316 0%, #ea580c 100%); padding: 30px; text-align: center;">
                  <h1 style="color: #ffffff; margin: 0; font-size: 24px; font-weight: bold;">🎯 New Lead Submission</h1>
                  <p style="color: #fed7aa; margin: 8px 0 0 0; font-size: 14px;">${lead.form_type.toUpperCase()} - ${new Date(lead.created_at).toLocaleString()}</p>
                </td>
              </tr>
              
              <!-- Content -->
              <tr>
                <td style="padding: 30px;">
                  <table width="100%" cellpadding="0" cellspacing="0">
                    <tr>
                      <td style="padding-bottom: 20px;">
                        <h2 style="color: #1e293b; margin: 0 0 20px 0; font-size: 18px; border-bottom: 2px solid #f97316; padding-bottom: 10px;">Contact Information</h2>
                      </td>
                    </tr>
                    
                    <tr>
                      <td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0;">
                        <strong style="color: #64748b; display: inline-block; width: 120px;">Name:</strong>
                        <span style="color: #1e293b;">${lead.name}</span>
                      </td>
                    </tr>
                    <tr>
                      <td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0;">
                        <strong style="color: #64748b; display: inline-block; width: 120px;">Email:</strong>
                        <a href="mailto:${lead.email}" style="color: #f97316; text-decoration: none;">${lead.email}</a>
                      </td>
                    </tr>
                    <tr>
                      <td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0;">
                        <strong style="color: #64748b; display: inline-block; width: 120px;">Company:</strong>
                        <span style="color: #1e293b;">${lead.company}</span>
                      </td>
                    </tr>
                    <tr>
                      <td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0;">
                        <strong style="color: #64748b; display: inline-block; width: 120px;">Role:</strong>
                        <span style="color: #1e293b;">${roleMap[lead.role] || lead.role}</span>
                      </td>
                    </tr>
                    <tr>
                      <td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0;">
                        <strong style="color: #64748b; display: inline-block; width: 120px;">Company Size:</strong>
                        <span style="color: #1e293b;">${lead.company_size} employees</span>
                      </td>
                    </tr>
                    
                    <tr>
                      <td style="padding: 20px 0;">
                        <h2 style="color: #1e293b; margin: 0 0 20px 0; font-size: 18px; border-bottom: 2px solid #f97316; padding-bottom: 10px;">Pain Point</h2>
                        <div style="background-color: #fff7ed; border-left: 4px solid #f97316; padding: 15px; border-radius: 6px;">
                          <p style="color: #1e293b; margin: 0; font-size: 14px; line-height: 1.6;">
                            ${painPointMap[lead.pain_point] || lead.pain_point}
                          </p>
                        </div>
                      </td>
                    </tr>
                    
                    ${lead.message ? `
                    <tr>
                      <td style="padding: 20px 0;">
                        <h2 style="color: #1e293b; margin: 0 0 20px 0; font-size: 18px; border-bottom: 2px solid #f97316; padding-bottom: 10px;">Message</h2>
                        <div style="background-color: #f8fafc; padding: 15px; border-radius: 6px;">
                          <p style="color: #334155; margin: 0; font-size: 14px; line-height: 1.6;">${lead.message}</p>
                        </div>
                      </td>
                    </tr>
                    ` : ''}
                    
                    <tr>
                      <td style="padding: 20px 0;">
                        <h2 style="color: #1e293b; margin: 0 0 20px 0; font-size: 18px; border-bottom: 2px solid #f97316; padding-bottom: 10px;">Additional Details</h2>
                      </td>
                    </tr>
                    <tr>
                      <td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0;">
                        <strong style="color: #64748b; display: inline-block; width: 120px;">Source:</strong>
                        <span style="color: #1e293b;">${lead.source}</span>
                      </td>
                    </tr>
                    <tr>
                      <td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0;">
                        <strong style="color: #64748b; display: inline-block; width: 120px;">Page URL:</strong>
                        <a href="${lead.page_url}" style="color: #f97316; text-decoration: none; font-size: 12px;">${lead.page_url}</a>
                      </td>
                    </tr>
                    <tr>
                      <td style="padding: 10px 0;">
                        <strong style="color: #64748b; display: inline-block; width: 120px;">Referrer:</strong>
                        <span style="color: #1e293b; font-size: 12px;">${lead.referrer || 'Direct'}</span>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
              
              <!-- Footer -->
              <tr>
                <td style="background-color: #f8fafc; padding: 20px 30px; text-align: center; border-top: 1px solid #e2e8f0;">
                  <p style="color: #64748b; margin: 0; font-size: 12px;">
                    This lead was submitted via Maleo AI website<br>
                    Lead ID: ${lead.id}
                  </p>
                </td>
              </tr>
            </table>
          </td>
        </tr>
      </table>
    </body>
    </html>
  `;
}

// Slack message formatter (simple text)
function formatSlackMessage(lead) {
  const painPointMap = {
    'speed': "Can't compete on speed with larger enterprises",
    'manual': 'Manual processes draining resources',
    'roi': 'Uncertainty about AI ROI',
    'vendor': 'Fear of choosing wrong vendor',
    'talent': 'Lack of AI talent in-house',
    'other': 'Other',
  };

  return `🎯 *New Lead: ${lead.form_type.toUpperCase()}*

*${lead.name}* from *${lead.company}*
📧 ${lead.email}
💼 ${lead.role}
👥 ${lead.company_size} employees

*Challenge:* ${painPointMap[lead.pain_point] || lead.pain_point}
*Source:* ${lead.source}

${lead.message ? `*Message:* ${lead.message}` : ''}`;
}

// Slack blocks formatter (rich formatting)
function formatSlackBlocks(lead) {
  const painPointMap = {
    'speed': "Can't compete on speed with larger enterprises",
    'manual': 'Manual processes draining resources',
    'roi': 'Uncertainty about AI ROI',
    'vendor': 'Fear of choosing wrong vendor',
    'talent': 'Lack of AI talent in-house',
    'other': 'Other',
  };

  const blocks = [
    {
      type: 'header',
      text: {
        type: 'plain_text',
        text: `🎯 New Lead: ${lead.form_type.toUpperCase()}`,
        emoji: true,
      },
    },
    {
      type: 'section',
      fields: [
        {
          type: 'mrkdwn',
          text: `*Name:*\n${lead.name}`,
        },
        {
          type: 'mrkdwn',
          text: `*Company:*\n${lead.company}`,
        },
        {
          type: 'mrkdwn',
          text: `*Email:*\n${lead.email}`,
        },
        {
          type: 'mrkdwn',
          text: `*Role:*\n${lead.role}`,
        },
        {
          type: 'mrkdwn',
          text: `*Company Size:*\n${lead.company_size} employees`,
        },
        {
          type: 'mrkdwn',
          text: `*Source:*\n${lead.source}`,
        },
      ],
    },
    {
      type: 'section',
      text: {
        type: 'mrkdwn',
        text: `*Pain Point:*\n${painPointMap[lead.pain_point] || lead.pain_point}`,
      },
    },
  ];

  if (lead.message) {
    blocks.push({
      type: 'section',
      text: {
        type: 'mrkdwn',
        text: `*Message:*\n${lead.message}`,
      },
    });
  }

  blocks.push({
    type: 'context',
    elements: [
      {
        type: 'mrkdwn',
        text: `Lead ID: \`${lead.id}\` • Submitted: ${new Date(lead.created_at).toLocaleString()}`,
      },
    ],
  });

  return blocks;
}
