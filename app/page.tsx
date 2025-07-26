import Image from "next/image"
import Link from "next/link"
import { ChevronRight, Code, Mail, MapPin, Phone, Search } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ContactForm } from "@/components/contact-form"
import { PricingCards } from "@/components/pricing-cards"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Image src="/images/webeloft-logo.png" width={120} height={40} alt="Webeloft Logo" className="h-8 w-auto" />
          </div>
          <nav className="hidden md:flex gap-6">
            <Link href="#services" className="text-sm font-medium hover:underline underline-offset-4">
              Services
            </Link>
            <Link href="#portfolio" className="text-sm font-medium hover:underline underline-offset-4">
              Portfolio
            </Link>
            <Link href="#reviews" className="text-sm font-medium hover:underline underline-offset-4">
              Reviews
            </Link>
            <Link href="#contact" className="text-sm font-medium hover:underline underline-offset-4">
              Contact
            </Link>
          </nav>
          <Button asChild className="hidden md:inline-flex">
            <Link href="#contact">Book a Free Strategy Call</Link>
          </Button>
          <Button variant="outline" size="icon" className="md:hidden bg-transparent">
            <span className="sr-only">Toggle menu</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-6 w-6"
            >
              <line x1="4" x2="20" y1="12" y2="12" />
              <line x1="4" x2="20" y1="6" y2="6" />
              <line x1="4" x2="20" y1="18" y2="18" />
            </svg>
          </Button>
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-b from-background to-muted">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:grid-cols-2">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Professional websites for local businesses
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    Built to rank, built to grow. Custom websites and real SEO traction for local businesses.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button asChild size="lg">
                    <Link href="#contact">Book a Free Strategy Call</Link>
                  </Button>
                  <Button variant="outline" size="lg" asChild>
                    <Link href="#services">
                      View Our Services
                      <ChevronRight className="ml-1 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <Image
                  src="/images/webeloft-logo.png"
                  width={550}
                  height={550}
                  alt="Webeloft - Professional websites for local businesses"
                  className="rounded-lg object-contain"
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        <section id="services" className="w-full py-12 md:py-24 lg:py-32 bg-background">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
                  Our Services
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Grow Your Business Online</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  We help local businesses establish a strong online presence with custom websites and proven SEO
                  strategies.
                </p>
              </div>
            </div>

            <PricingCards />

            <div className="mx-auto max-w-3xl space-y-4 text-center">
              <h3 className="text-2xl font-bold">🔍 Local SEO Setup (included in all plans)</h3>
              <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
                <div className="flex flex-col items-center space-y-2 rounded-lg border p-4">
                  <Search className="h-8 w-8 text-primary" />
                  <h4 className="text-lg font-medium">Keyword Research</h4>
                  <p className="text-sm text-muted-foreground">Niche + city targeted keywords</p>
                </div>
                <div className="flex flex-col items-center space-y-2 rounded-lg border p-4">
                  <Code className="h-8 w-8 text-primary" />
                  <h4 className="text-lg font-medium">Meta Optimization</h4>
                  <p className="text-sm text-muted-foreground">Tags, titles, alt text</p>
                </div>
                <div className="flex flex-col items-center space-y-2 rounded-lg border p-4">
                  <MapPin className="h-8 w-8 text-primary" />
                  <h4 className="text-lg font-medium">Google My Business</h4>
                  <p className="text-sm text-muted-foreground">Setup and optimization</p>
                </div>
              </div>
            </div>

            <div className="mt-12 flex justify-center">
              <Button variant="outline" size="lg" asChild>
                <Link href="#contact">
                  Request a Custom Quote
                  <ChevronRight className="ml-1 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        <section id="portfolio" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
                  Our Work
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Recent Projects</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Check out some of our recent website designs and SEO success stories.
                </p>
              </div>
            </div>

            <div className="mx-auto grid max-w-5xl gap-8 py-12 md:grid-cols-2 lg:grid-cols-3">
              <div className="group relative overflow-hidden rounded-lg border">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  width={600}
                  height={400}
                  alt="Local Restaurant Website"
                  className="object-cover transition-transform group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 transition-opacity group-hover:opacity-100"></div>
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white opacity-0 transition-opacity group-hover:opacity-100">
                  <h3 className="text-lg font-bold">Local Restaurant</h3>
                  <p className="text-sm">Custom website with online ordering system</p>
                </div>
              </div>

              <div className="group relative overflow-hidden rounded-lg border">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  width={600}
                  height={400}
                  alt="Dental Practice Website"
                  className="object-cover transition-transform group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 transition-opacity group-hover:opacity-100"></div>
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white opacity-0 transition-opacity group-hover:opacity-100">
                  <h3 className="text-lg font-bold">Dental Practice</h3>
                  <p className="text-sm">5-page website with appointment booking</p>
                </div>
              </div>

              <div className="group relative overflow-hidden rounded-lg border">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  width={600}
                  height={400}
                  alt="Home Services Website"
                  className="object-cover transition-transform group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 transition-opacity group-hover:opacity-100"></div>
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white opacity-0 transition-opacity group-hover:opacity-100">
                  <h3 className="text-lg font-bold">Home Services</h3>
                  <p className="text-sm">Lead generation website with SEO</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="reviews" className="w-full py-12 md:py-24 lg:py-32 bg-background">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
                  Reviews
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Client Reviews</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Don't just take our word for it. Here's what our clients are saying about working with Webeloft.
                </p>
              </div>
            </div>

            <div className="mx-auto grid max-w-4xl gap-6 py-12 md:grid-cols-2">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="relative h-10 w-10 overflow-hidden rounded-full">
                      <Image
                        src="/placeholder.svg?height=40&width=40"
                        width={40}
                        height={40}
                        alt="Client Avatar"
                        className="object-cover"
                      />
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <svg
                            key={i}
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="h-4 w-4 text-yellow-500"
                          >
                            <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                          </svg>
                        ))}
                      </div>
                      <blockquote className="text-sm text-muted-foreground">
                        "Webeloft transformed our online presence. Our website now ranks on the first page of Google for
                        our main keywords, and we've seen a 40% increase in leads since launching."
                      </blockquote>
                      <div className="font-medium">Sarah Johnson</div>
                      <div className="text-xs text-muted-foreground">Owner, Local Dental Practice</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="relative h-10 w-10 overflow-hidden rounded-full">
                      <Image
                        src="/placeholder.svg?height=40&width=40"
                        width={40}
                        height={40}
                        alt="Client Avatar"
                        className="object-cover"
                      />
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <svg
                            key={i}
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="h-4 w-4 text-yellow-500"
                          >
                            <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                          </svg>
                        ))}
                      </div>
                      <blockquote className="text-sm text-muted-foreground">
                        "The team at Webeloft delivered exactly what we needed - a professional website that actually
                        brings in customers. Their SEO work has been a game-changer for our small business."
                      </blockquote>
                      <div className="font-medium">Michael Rodriguez</div>
                      <div className="text-xs text-muted-foreground">Owner, Local Restaurant</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section id="contact" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
                  Contact Us
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Ready to Grow Your Business?</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Book a free strategy call or request a quote. We'll help you create a website that drives real
                  results.
                </p>
              </div>
            </div>

            <div className="mx-auto grid max-w-5xl gap-6 py-12 lg:grid-cols-2">
              <ContactForm />

              <div className="flex flex-col justify-center space-y-8">
                <div className="flex items-start space-x-4">
                  <Phone className="h-6 w-6 text-primary" />
                  <div>
                    <h3 className="text-lg font-medium">Phone</h3>
                    <p className="text-muted-foreground">313-970-5903</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Mail className="h-6 w-6 text-primary" />
                  <div>
                    <h3 className="text-lg font-medium">Email</h3>
                    <p className="text-muted-foreground">hello@webeloft.com</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <MapPin className="h-6 w-6 text-primary" />
                  <div>
                    <h3 className="text-lg font-medium">Location</h3>
                    <p className="text-muted-foreground">Serving local businesses nationwide</p>
                  </div>
                </div>
                <div className="rounded-lg border bg-background p-6">
                  <h3 className="text-lg font-medium">Limited Time Offer</h3>
                  <p className="mt-2 text-muted-foreground">
                    Mention this website for a free Google My Business optimization with any package ($99 value).
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full border-t bg-background">
        <div className="container flex flex-col items-center justify-between gap-4 py-10 md:h-24 md:flex-row md:py-0">
          <div className="flex items-center">
            <Image src="/images/webeloft-logo.png" width={120} height={40} alt="Webeloft Logo" className="h-8 w-auto" />
          </div>
          <p className="text-center text-sm text-muted-foreground md:text-left">
            &copy; {new Date().getFullYear()} Webeloft. All rights reserved.
          </p>
          <div className="flex gap-4">
            <Link href="#" className="text-sm text-muted-foreground hover:underline">
              Privacy Policy
            </Link>
            <Link href="#" className="text-sm text-muted-foreground hover:underline">
              Terms of Service
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
