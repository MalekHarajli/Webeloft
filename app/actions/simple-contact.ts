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
    // Simple email using Resend (easiest email service)
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "website@webeloft.com", // You'll need to verify this domain
        to: ["hello@webeloft.com"], // Your email
        subject: `New Contact Form Submission from ${name}`,
        html: `
          <h2>New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone}</p>
          <p><strong>Business:</strong> ${business}</p>
          <p><strong>Message:</strong> ${message}</p>
          <p><strong>Submitted:</strong> ${new Date().toLocaleString()}</p>
        `,
      }),
    })

    if (!response.ok) {
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
