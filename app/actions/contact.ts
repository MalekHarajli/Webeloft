"use server"

export async function submitContactForm(formData: FormData) {
  const name = formData.get("name") as string
  const email = formData.get("email") as string
  const phone = formData.get("phone") as string
  const business = formData.get("business") as string
  const message = formData.get("message") as string

  // Basic validation
  if (!name || !email || !phone || !message) {
    return {
      success: false,
      message: "Please fill in all required fields.",
    }
  }

  try {
    // Send email using Resend
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "website@resend.dev", // Using Resend's default domain for now
        to: ["hello@webeloft.com"], // Your email address
        subject: `🚀 New Lead: ${name} wants to work with Webeloft!`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #2563eb;">New Contact Form Submission</h2>
            
            <div style="background: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <h3 style="margin-top: 0;">Contact Details:</h3>
              <p><strong>Name:</strong> ${name}</p>
              <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
              <p><strong>Phone:</strong> <a href="tel:${phone}">${phone}</a></p>
              <p><strong>Business Type:</strong> ${business || "Not specified"}</p>
            </div>
            
            <div style="background: #fef3c7; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <h3 style="margin-top: 0;">Their Message:</h3>
              <p style="white-space: pre-wrap;">${message}</p>
            </div>
            
            <div style="background: #dcfce7; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <h3 style="margin-top: 0;">Quick Actions:</h3>
              <p>
                <a href="mailto:${email}?subject=Re: Your Webeloft Inquiry" 
                   style="background: #2563eb; color: white; padding: 10px 20px; text-decoration: none; border-radius: 5px; display: inline-block; margin-right: 10px;">
                  Reply via Email
                </a>
                <a href="tel:${phone}" 
                   style="background: #059669; color: white; padding: 10px 20px; text-decoration: none; border-radius: 5px; display: inline-block;">
                  Call Now
                </a>
              </p>
            </div>
            
            <p style="color: #6b7280; font-size: 14px;">
              Submitted: ${new Date().toLocaleString("en-US", {
                timeZone: "America/Detroit",
                weekday: "long",
                year: "numeric",
                month: "long",
                day: "numeric",
                hour: "numeric",
                minute: "2-digit",
              })}
            </p>
          </div>
        `,
      }),
    })

    if (!response.ok) {
      const errorData = await response.text()
      console.error("Resend API error:", errorData)
      throw new Error("Failed to send email")
    }

    return {
      success: true,
      message: "Thank you for your message! We'll get back to you within 24 hours.",
    }
  } catch (error) {
    console.error("Contact form error:", error)
    return {
      success: false,
      message: "Sorry, there was an error sending your message. Please try again or call us directly at 313-970-5903.",
    }
  }
}
