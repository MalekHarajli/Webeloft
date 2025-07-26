"use server"

// This would save to a database like Supabase (free)
export async function submitContactForm(formData: FormData) {
  const name = formData.get("name") as string
  const email = formData.get("email") as string
  const phone = formData.get("phone") as string
  const business = formData.get("business") as string
  const message = formData.get("message") as string

  if (!name || !email || !phone || !message) {
    return {
      success: false,
      message: "Please fill in all required fields.",
    }
  }

  try {
    // Save to Supabase database
    const response = await fetch(`${process.env.SUPABASE_URL}/rest/v1/contacts`, {
      method: "POST",
      headers: {
        apikey: process.env.SUPABASE_ANON_KEY!,
        Authorization: `Bearer ${process.env.SUPABASE_ANON_KEY}`,
        "Content-Type": "application/json",
        Prefer: "return=minimal",
      },
      body: JSON.stringify({
        name,
        email,
        phone,
        business,
        message,
        created_at: new Date().toISOString(),
      }),
    })

    if (!response.ok) {
      throw new Error("Failed to save contact")
    }

    return {
      success: true,
      message: "Thank you for your message! We'll get back to you within 24 hours.",
    }
  } catch (error) {
    console.error("Contact form error:", error)
    return {
      success: false,
      message: "Sorry, there was an error. Please call us directly at 313-970-5903.",
    }
  }
}
