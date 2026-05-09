import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(request: Request) {
  try {
    const { name, phone, email, subject, message } = await request.json()

    // Validate required fields
    if (!name || !phone || !subject || !message) {
      return NextResponse.json(
        { error: 'Please fill in all required fields.' },
        { status: 400 }
      )
    }

    // Create Gmail SMTP transporter
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD, // Gmail App Password (not your login password)
      },
    })

    // Email to school (notification)
    await transporter.sendMail({
      from: `"NBPS Website" <${process.env.GMAIL_USER}>`,
      to: 'nationbuildingpublicschool@gmail.com',
      replyTo: email || undefined,
      subject: `📩 Website Enquiry: ${subject}`,
      html: `
        <div style="font-family: Georgia, serif; max-width: 600px; margin: 0 auto; background: #f9f9f9; border-radius: 10px; overflow: hidden; border: 1px solid #e0e0e0;">
          <div style="background: #002147; padding: 24px 32px;">
            <h2 style="color: #FFD700; margin: 0; font-size: 22px;">New Enquiry from NBPS Website</h2>
            <p style="color: #ccc; margin: 4px 0 0 0; font-size: 14px;">Submitted via the Contact Form</p>
          </div>
          <div style="padding: 32px;">
            <table style="width: 100%; border-collapse: collapse; font-size: 15px;">
              <tr style="border-bottom: 1px solid #eee;">
                <td style="padding: 10px 0; color: #555; width: 130px;"><strong>Name</strong></td>
                <td style="padding: 10px 0; color: #111;">${name}</td>
              </tr>
              <tr style="border-bottom: 1px solid #eee;">
                <td style="padding: 10px 0; color: #555;"><strong>Phone</strong></td>
                <td style="padding: 10px 0; color: #111;">${phone}</td>
              </tr>
              <tr style="border-bottom: 1px solid #eee;">
                <td style="padding: 10px 0; color: #555;"><strong>Email</strong></td>
                <td style="padding: 10px 0; color: #111;">${email || 'Not provided'}</td>
              </tr>
              <tr style="border-bottom: 1px solid #eee;">
                <td style="padding: 10px 0; color: #555;"><strong>Subject</strong></td>
                <td style="padding: 10px 0; color: #111;">${subject}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; color: #555; vertical-align: top;"><strong>Message</strong></td>
                <td style="padding: 10px 0; color: #111; white-space: pre-wrap;">${message}</td>
              </tr>
            </table>
          </div>
          <div style="background: #002147; padding: 16px 32px; text-align: center;">
            <p style="color: #aaa; font-size: 12px; margin: 0;">Nation Building Public School · Bidupur, Vaishali, Bihar</p>
          </div>
        </div>
      `,
    })

    // Auto-reply to sender if they provided an email
    if (email) {
      await transporter.sendMail({
        from: `"Nation Building Public School" <${process.env.GMAIL_USER}>`,
        to: email,
        subject: `We received your enquiry – NBPS`,
        html: `
          <div style="font-family: Georgia, serif; max-width: 600px; margin: 0 auto; background: #f9f9f9; border-radius: 10px; overflow: hidden; border: 1px solid #e0e0e0;">
            <div style="background: #002147; padding: 24px 32px;">
              <h2 style="color: #FFD700; margin: 0; font-size: 22px;">Thank You, ${name}!</h2>
              <p style="color: #ccc; margin: 4px 0 0 0; font-size: 14px;">Nation Building Public School</p>
            </div>
            <div style="padding: 32px; font-size: 15px; color: #333; line-height: 1.7;">
              <p>We have received your enquiry about <strong>${subject}</strong> and will get back to you within <strong>1 working day</strong>.</p>
              <p>If your matter is urgent, please call us directly:</p>
              <p style="font-size: 18px; font-weight: bold; color: #002147;">📞 6207 834 778</p>
              <hr style="border: none; border-top: 1px solid #eee; margin: 24px 0;" />
              <p style="color: #888; font-size: 13px;">Daud Nagar Chakgadho, Bidupur, Vaishali, Bihar · UDISE: 10181403909</p>
            </div>
          </div>
        `,
      })
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Email send error:', error)
    return NextResponse.json(
      { error: 'Failed to send message. Please try again or call us directly.' },
      { status: 500 }
    )
  }
}
