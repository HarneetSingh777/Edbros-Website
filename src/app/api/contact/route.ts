import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

interface ContactBody {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  service: string;
  description: string;
  budget: string;
  timeline?: string;
  instagram?: string;
  youtube?: string;
  tiktok?: string;
  website?: string;
  requestId: string;
}

function buildCustomerEmail(data: ContactBody): string {
  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Request Confirmation</title>
</head>
<body style="margin: 0; padding: 0; background-color: #0a0a0a; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color: #0a0a0a; padding: 40px 20px;">
    <tr>
      <td align="center">
        <table role="presentation" width="600" cellpadding="0" cellspacing="0" style="max-width: 600px; width: 100%;">
          
          <!-- Logo Header -->
          <tr>
            <td style="text-align: center; padding: 20px 0 30px;">
              <span style="font-family: Georgia, 'Times New Roman', serif; font-size: 32px; font-style: italic; color: #ffffff; letter-spacing: 2px;">edbros</span>
            </td>
          </tr>

          <!-- Main Card -->
          <tr>
            <td style="background: linear-gradient(135deg, #111111, #1a1a1a); border-radius: 16px; border: 1px solid rgba(255,255,255,0.08); padding: 40px 36px;">
              
              <!-- Title -->
              <h1 style="margin: 0 0 8px; font-size: 24px; font-weight: 700; color: #ffffff; letter-spacing: -0.5px;">
                We've received your request!
              </h1>
              <p style="margin: 0 0 28px; font-size: 15px; color: #888888; line-height: 1.6;">
                Hi <strong style="color: #cccccc;">${data.name}</strong>, thank you for choosing Edbros. Here's a summary of your submission.
              </p>

              <!-- Request ID Badge -->
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="margin-bottom: 28px;">
                <tr>
                  <td style="background: linear-gradient(135deg, rgba(108,92,231,0.15), rgba(0,206,201,0.10)); border: 1px solid rgba(108,92,231,0.25); border-radius: 12px; padding: 20px 24px; text-align: center;">
                    <p style="margin: 0 0 4px; font-size: 11px; text-transform: uppercase; letter-spacing: 2px; color: #888888; font-weight: 600;">Your Request ID</p>
                    <p style="margin: 0; font-size: 28px; font-weight: 800; color: #6c5ce7; font-family: 'Courier New', monospace; letter-spacing: 3px;">${data.requestId}</p>
                    <p style="margin: 8px 0 0; font-size: 12px; color: #666666;">Save this ID for future reference</p>
                  </td>
                </tr>
              </table>

              <!-- Project Details -->
              <h2 style="margin: 0 0 16px; font-size: 14px; text-transform: uppercase; letter-spacing: 1.5px; color: #666666; font-weight: 600;">Project Details</h2>
              
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="margin-bottom: 24px;">
                <tr>
                  <td style="padding: 12px 16px; background-color: rgba(255,255,255,0.03); border-radius: 8px 8px 0 0; border-bottom: 1px solid rgba(255,255,255,0.05);">
                    <span style="font-size: 11px; text-transform: uppercase; letter-spacing: 1px; color: #555555; font-weight: 600;">Service</span>
                    <p style="margin: 4px 0 0; font-size: 14px; color: #cccccc;">${data.service}</p>
                  </td>
                </tr>
                <tr>
                  <td style="padding: 12px 16px; background-color: rgba(255,255,255,0.03); border-bottom: 1px solid rgba(255,255,255,0.05);">
                    <span style="font-size: 11px; text-transform: uppercase; letter-spacing: 1px; color: #555555; font-weight: 600;">Budget</span>
                    <p style="margin: 4px 0 0; font-size: 14px; color: #cccccc;">${data.budget}</p>
                  </td>
                </tr>
                ${data.timeline ? `
                <tr>
                  <td style="padding: 12px 16px; background-color: rgba(255,255,255,0.03); border-bottom: 1px solid rgba(255,255,255,0.05);">
                    <span style="font-size: 11px; text-transform: uppercase; letter-spacing: 1px; color: #555555; font-weight: 600;">Timeline</span>
                    <p style="margin: 4px 0 0; font-size: 14px; color: #cccccc;">${data.timeline}</p>
                  </td>
                </tr>
                ` : ''}
                <tr>
                  <td style="padding: 12px 16px; background-color: rgba(255,255,255,0.03); border-radius: 0 0 8px 8px;">
                    <span style="font-size: 11px; text-transform: uppercase; letter-spacing: 1px; color: #555555; font-weight: 600;">Description</span>
                    <p style="margin: 4px 0 0; font-size: 14px; color: #cccccc; line-height: 1.5;">${data.description}</p>
                  </td>
                </tr>
              </table>

              <!-- What happens next -->
              <h2 style="margin: 0 0 16px; font-size: 14px; text-transform: uppercase; letter-spacing: 1.5px; color: #666666; font-weight: 600;">What Happens Next</h2>
              
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="margin-bottom: 28px;">
                <tr>
                  <td style="padding: 12px 0;">
                    <table role="presentation" cellpadding="0" cellspacing="0">
                      <tr>
                        <td style="width: 32px; height: 32px; background: rgba(108,92,231,0.15); border-radius: 8px; text-align: center; vertical-align: middle; color: #6c5ce7; font-weight: bold; font-size: 13px;">1</td>
                        <td style="padding-left: 14px; font-size: 14px; color: #aaaaaa; line-height: 1.5;">Our team will review your project details within <strong style="color: #cccccc;">24 hours</strong></td>
                      </tr>
                    </table>
                  </td>
                </tr>
                <tr>
                  <td style="padding: 12px 0;">
                    <table role="presentation" cellpadding="0" cellspacing="0">
                      <tr>
                        <td style="width: 32px; height: 32px; background: rgba(108,92,231,0.15); border-radius: 8px; text-align: center; vertical-align: middle; color: #6c5ce7; font-weight: bold; font-size: 13px;">2</td>
                        <td style="padding-left: 14px; font-size: 14px; color: #aaaaaa; line-height: 1.5;">We'll send you a <strong style="color: #cccccc;">custom proposal</strong> tailored to your needs</td>
                      </tr>
                    </table>
                  </td>
                </tr>
                <tr>
                  <td style="padding: 12px 0;">
                    <table role="presentation" cellpadding="0" cellspacing="0">
                      <tr>
                        <td style="width: 32px; height: 32px; background: rgba(108,92,231,0.15); border-radius: 8px; text-align: center; vertical-align: middle; color: #6c5ce7; font-weight: bold; font-size: 13px;">3</td>
                        <td style="padding-left: 14px; font-size: 14px; color: #aaaaaa; line-height: 1.5;">Once approved, we <strong style="color: #cccccc;">kick off</strong> your project immediately</td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>

              <!-- Divider -->
              <hr style="border: none; border-top: 1px solid rgba(255,255,255,0.06); margin: 24px 0;" />

              <!-- Footer Note -->
              <p style="margin: 0; font-size: 13px; color: #555555; line-height: 1.6; text-align: center;">
                Questions? Reply directly to this email or reach us at
                <a href="mailto:contact@edbros.com" style="color: #6c5ce7; text-decoration: none;">contact@edbros.com</a>
              </p>

            </td>
          </tr>

          <!-- Bottom Footer -->
          <tr>
            <td style="text-align: center; padding: 24px 0 10px;">
              <p style="margin: 0; font-size: 12px; color: #444444;">
                &copy; ${new Date().getFullYear()} Edbros. All rights reserved.
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>
  `.trim();
}

function buildTeamNotificationEmail(data: ContactBody): string {
  const socialLinks = [
    data.instagram && `Instagram: ${data.instagram}`,
    data.youtube && `YouTube: ${data.youtube}`,
    data.tiktok && `TikTok: ${data.tiktok}`,
    data.website && `Website: ${data.website}`,
  ].filter(Boolean).join('\n');

  return `
<!DOCTYPE html>
<html lang="en">
<head><meta charset="UTF-8" /></head>
<body style="margin: 0; padding: 0; background-color: #f5f5f5; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color: #f5f5f5; padding: 40px 20px;">
    <tr>
      <td align="center">
        <table role="presentation" width="600" cellpadding="0" cellspacing="0" style="max-width: 600px; width: 100%; background: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 2px 8px rgba(0,0,0,0.06);">
          
          <!-- Header -->
          <tr>
            <td style="background: linear-gradient(135deg, #6c5ce7, #00cec9); padding: 24px 32px;">
              <h1 style="margin: 0; font-size: 18px; color: #ffffff; font-weight: 700;">🔔 New Project Request</h1>
              <p style="margin: 4px 0 0; font-size: 13px; color: rgba(255,255,255,0.8);">Request ID: ${data.requestId}</p>
            </td>
          </tr>

          <!-- Body -->
          <tr>
            <td style="padding: 28px 32px;">

              <h3 style="margin: 0 0 16px; font-size: 14px; color: #333; text-transform: uppercase; letter-spacing: 1px;">Client Information</h3>
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="margin-bottom: 24px; border: 1px solid #eee; border-radius: 8px; overflow: hidden;">
                <tr>
                  <td style="padding: 10px 14px; background: #fafafa; font-size: 12px; color: #888; font-weight: 600; width: 120px; border-bottom: 1px solid #eee;">Name</td>
                  <td style="padding: 10px 14px; font-size: 14px; color: #333; border-bottom: 1px solid #eee;">${data.name}</td>
                </tr>
                <tr>
                  <td style="padding: 10px 14px; background: #fafafa; font-size: 12px; color: #888; font-weight: 600; border-bottom: 1px solid #eee;">Email</td>
                  <td style="padding: 10px 14px; font-size: 14px; color: #333; border-bottom: 1px solid #eee;"><a href="mailto:${data.email}" style="color: #6c5ce7;">${data.email}</a></td>
                </tr>
                ${data.phone ? `
                <tr>
                  <td style="padding: 10px 14px; background: #fafafa; font-size: 12px; color: #888; font-weight: 600; border-bottom: 1px solid #eee;">Phone</td>
                  <td style="padding: 10px 14px; font-size: 14px; color: #333; border-bottom: 1px solid #eee;">${data.phone}</td>
                </tr>` : ''}
                ${data.company ? `
                <tr>
                  <td style="padding: 10px 14px; background: #fafafa; font-size: 12px; color: #888; font-weight: 600; border-bottom: 1px solid #eee;">Company</td>
                  <td style="padding: 10px 14px; font-size: 14px; color: #333; border-bottom: 1px solid #eee;">${data.company}</td>
                </tr>` : ''}
              </table>

              <h3 style="margin: 0 0 16px; font-size: 14px; color: #333; text-transform: uppercase; letter-spacing: 1px;">Project Details</h3>
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="margin-bottom: 24px; border: 1px solid #eee; border-radius: 8px; overflow: hidden;">
                <tr>
                  <td style="padding: 10px 14px; background: #fafafa; font-size: 12px; color: #888; font-weight: 600; width: 120px; border-bottom: 1px solid #eee;">Service</td>
                  <td style="padding: 10px 14px; font-size: 14px; color: #333; border-bottom: 1px solid #eee;">${data.service}</td>
                </tr>
                <tr>
                  <td style="padding: 10px 14px; background: #fafafa; font-size: 12px; color: #888; font-weight: 600; border-bottom: 1px solid #eee;">Budget</td>
                  <td style="padding: 10px 14px; font-size: 14px; color: #333; border-bottom: 1px solid #eee;">${data.budget}</td>
                </tr>
                ${data.timeline ? `
                <tr>
                  <td style="padding: 10px 14px; background: #fafafa; font-size: 12px; color: #888; font-weight: 600; border-bottom: 1px solid #eee;">Timeline</td>
                  <td style="padding: 10px 14px; font-size: 14px; color: #333; border-bottom: 1px solid #eee;">${data.timeline}</td>
                </tr>` : ''}
                <tr>
                  <td style="padding: 10px 14px; background: #fafafa; font-size: 12px; color: #888; font-weight: 600; vertical-align: top;">Description</td>
                  <td style="padding: 10px 14px; font-size: 14px; color: #333; line-height: 1.5;">${data.description}</td>
                </tr>
              </table>

              ${socialLinks ? `
              <h3 style="margin: 0 0 12px; font-size: 14px; color: #333; text-transform: uppercase; letter-spacing: 1px;">Social Profiles</h3>
              <pre style="background: #fafafa; padding: 12px 16px; border-radius: 8px; font-size: 13px; color: #555; border: 1px solid #eee; white-space: pre-wrap;">${socialLinks}</pre>
              ` : ''}

            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="padding: 16px 32px; background: #fafafa; border-top: 1px solid #eee;">
              <p style="margin: 0; font-size: 12px; color: #999;">This is an automated notification from the Edbros website.</p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>
  `.trim();
}

export async function POST(request: Request) {
  try {
    const body: ContactBody = await request.json();
    const { name, email, service, requestId, description, budget } = body;

    // Validate required fields
    if (!email || !name || !service || !requestId || !description || !budget) {
      return NextResponse.json(
        { message: 'Missing required fields' },
        { status: 400 }
      );
    }

    const { SMTP_EMAIL, SMTP_PASSWORD, TEAM_EMAIL } = process.env;

    // If SMTP credentials aren't configured, simulate and return success
    if (!SMTP_EMAIL || !SMTP_PASSWORD) {
      console.warn('⚠ SMTP credentials not configured. Email will not be sent.');
      console.warn(`📧 Simulated confirmation email to: ${email}`);
      console.warn(`📋 Request ID: ${requestId}`);
      console.warn(`📦 Service: ${service}`);
      return NextResponse.json({ 
        message: 'Request received (email simulated — SMTP not configured)',
        requestId 
      });
    }

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: SMTP_EMAIL,
        pass: SMTP_PASSWORD,
      },
    });

    // 1. Send confirmation email to the customer
    const customerMailOptions = {
      from: `"Edbros" <${SMTP_EMAIL}>`,
      to: email,
      subject: `✅ Request Confirmed — Your ID: ${requestId}`,
      html: buildCustomerEmail(body),
    };

    // 2. Send notification email to the Edbros team
    const teamMailOptions = {
      from: `"Edbros Website" <${SMTP_EMAIL}>`,
      to: TEAM_EMAIL || SMTP_EMAIL, // Falls back to SMTP_EMAIL if TEAM_EMAIL not set
      subject: `🔔 New Project Request: ${requestId} — ${name} (${service})`,
      html: buildTeamNotificationEmail(body),
    };

    // Send both emails in parallel
    await Promise.all([
      transporter.sendMail(customerMailOptions),
      transporter.sendMail(teamMailOptions),
    ]);

    return NextResponse.json(
      { message: 'Confirmation email sent successfully', requestId },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { message: 'Failed to send confirmation email. Your request was still recorded.' },
      { status: 500 }
    );
  }
}
