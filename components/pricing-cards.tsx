import Link from "next/link"
import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export function PricingCards() {
  return (
    <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3">
      <Card className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/20 to-transparent opacity-50"></div>
        <CardHeader>
          <CardTitle>Starter</CardTitle>
          <CardDescription>Perfect for small businesses just getting started</CardDescription>
        </CardHeader>
        <CardContent className="pb-8">
          <div className="text-4xl font-bold">$499</div>
          <div className="text-muted-foreground">One-time payment</div>
          <ul className="mt-6 space-y-2">
            <li className="flex items-center">
              <Check className="mr-2 h-4 w-4 text-primary" />
              <span>1-page professional website</span>
            </li>
            <li className="flex items-center">
              <Check className="mr-2 h-4 w-4 text-primary" />
              <span>Mobile-friendly design</span>
            </li>
            <li className="flex items-center">
              <Check className="mr-2 h-4 w-4 text-primary" />
              <span>Basic SEO optimization</span>
            </li>
            <li className="flex items-center">
              <Check className="mr-2 h-4 w-4 text-primary" />
              <span>Google Analytics setup</span>
            </li>
          </ul>
        </CardContent>
        <CardFooter>
          <Button className="w-full" asChild>
            <Link href={process.env.NEXT_PUBLIC_STRIPE_STARTER_LINK || "#contact"} target="_blank">
              Get Started
            </Link>
          </Button>
        </CardFooter>
      </Card>

      <Card className="relative overflow-hidden border-primary">
        <div className="absolute right-4 top-4 rounded-full bg-primary px-3 py-1 text-xs font-medium text-primary-foreground">
          Popular
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-primary/20 to-transparent opacity-50"></div>
        <CardHeader>
          <CardTitle>Pro</CardTitle>
          <CardDescription>Comprehensive solution for established businesses</CardDescription>
        </CardHeader>
        <CardContent className="pb-8">
          <div className="text-4xl font-bold">$899</div>
          <div className="text-muted-foreground">One-time payment</div>
          <ul className="mt-6 space-y-2">
            <li className="flex items-center">
              <Check className="mr-2 h-4 w-4 text-primary" />
              <span>3-5 page custom website</span>
            </li>
            <li className="flex items-center">
              <Check className="mr-2 h-4 w-4 text-primary" />
              <span>Advanced SEO optimization</span>
            </li>
            <li className="flex items-center">
              <Check className="mr-2 h-4 w-4 text-primary" />
              <span>Google My Business setup</span>
            </li>
            <li className="flex items-center">
              <Check className="mr-2 h-4 w-4 text-primary" />
              <span>Search Console + Analytics</span>
            </li>
          </ul>
        </CardContent>
        <CardFooter>
          <Button className="w-full" asChild>
            <Link href={process.env.NEXT_PUBLIC_STRIPE_PRO_LINK || "#contact"} target="_blank">
              Get Started
            </Link>
          </Button>
        </CardFooter>
      </Card>

      <Card className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/20 to-transparent opacity-50"></div>
        <CardHeader>
          <CardTitle>Premium</CardTitle>
          <CardDescription>Complete digital presence with ongoing support</CardDescription>
        </CardHeader>
        <CardContent className="pb-8">
          <div className="text-4xl font-bold">$1299+</div>
          <div className="text-muted-foreground">One-time payment</div>
          <ul className="mt-6 space-y-2">
            <li className="flex items-center">
              <Check className="mr-2 h-4 w-4 text-primary" />
              <span>5+ pages with custom features</span>
            </li>
            <li className="flex items-center">
              <Check className="mr-2 h-4 w-4 text-primary" />
              <span>Blog setup and optimization</span>
            </li>
            <li className="flex items-center">
              <Check className="mr-2 h-4 w-4 text-primary" />
              <span>Monthly SEO (first month free)</span>
            </li>
            <li className="flex items-center">
              <Check className="mr-2 h-4 w-4 text-primary" />
              <span>Priority support</span>
            </li>
          </ul>
        </CardContent>
        <CardFooter>
          <Button className="w-full" asChild>
            <Link href={process.env.NEXT_PUBLIC_STRIPE_PREMIUM_LINK || "#contact"} target="_blank">
              Get Started
            </Link>
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}
