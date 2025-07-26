"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { submitContactForm } from "@/app/actions/contact"

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [result, setResult] = useState<{ success: boolean; message: string } | null>(null)

  async function handleSubmit(formData: FormData) {
    setIsSubmitting(true)
    setResult(null)

    const response = await submitContactForm(formData)
    setResult(response)
    setIsSubmitting(false)

    // Reset form if successful
    if (response.success) {
      const form = document.getElementById("contact-form") as HTMLFormElement
      form?.reset()
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Book a Free Strategy Call</CardTitle>
        <CardDescription>Let's discuss your business goals and how we can help you achieve them.</CardDescription>
      </CardHeader>
      <CardContent>
        <form id="contact-form" action={handleSubmit} className="grid gap-4">
          <div className="grid gap-2">
            <label
              htmlFor="name"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Name *
            </label>
            <Input id="name" name="name" placeholder="Enter your name" required />
          </div>
          <div className="grid gap-2">
            <label
              htmlFor="email"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Email *
            </label>
            <Input id="email" name="email" type="email" placeholder="Enter your email" required />
          </div>
          <div className="grid gap-2">
            <label
              htmlFor="phone"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Phone *
            </label>
            <Input id="phone" name="phone" type="tel" placeholder="Enter your phone number" required />
          </div>
          <div className="grid gap-2">
            <label
              htmlFor="business"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Business Type
            </label>
            <Input id="business" name="business" placeholder="What type of business do you run?" />
          </div>
          <div className="grid gap-2">
            <label
              htmlFor="message"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Message *
            </label>
            <Textarea id="message" name="message" placeholder="Tell us about your project and goals" required />
          </div>

          {result && (
            <div
              className={`p-3 rounded-md text-sm ${
                result.success
                  ? "bg-green-50 text-green-800 border border-green-200"
                  : "bg-red-50 text-red-800 border border-red-200"
              }`}
            >
              {result.message}
            </div>
          )}

          <Button type="submit" className="w-full" disabled={isSubmitting}>
            {isSubmitting ? "Sending..." : "Request a Call"}
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}
