import Image from "next/image"
import Link from "next/link"
import { ChevronRight, Leaf, ShoppingCart, TrendingUp, Truck, Users } from "lucide-react"

import { Button } from "@/components/ui/button"
import LanguageSwitcher from "./language-switcher"
import TestimonialCard from "./testimonial-card"
import { assets } from "./images/assets"

export default function LandingPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Leaf className="h-6 w-6 text-green-600" />
            <span className="text-xl font-bold text-green-700">Farmers.io</span>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <Link href="#features" className="text-sm font-medium hover:text-green-600 transition-colors">
              Features
            </Link>
            <Link href="#how-it-works" className="text-sm font-medium hover:text-green-600 transition-colors">
              How It Works
            </Link>
            <Link href="#testimonials" className="text-sm font-medium hover:text-green-600 transition-colors">
              Testimonials
            </Link>
            <Link href="#faq" className="text-sm font-medium hover:text-green-600 transition-colors">
              FAQ
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <LanguageSwitcher />
            <div className="hidden md:flex gap-2">
              <Button variant="outline" className="border-green-600 text-green-600 hover:bg-green-50">
                Login
              </Button>
              <Button className="bg-green-600 hover:bg-green-700">Sign Up</Button>
            </div>
            <Button variant="ghost" size="icon" className="md:hidden">
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
        </div>
      </header>
      <main className="flex-1">
        <section className="relative overflow-hidden bg-gradient-to-b from-white to-green-50 py-20 md:py-15">
          <div className="container relative z-10">
            <div className="grid gap-12 lg:grid-cols-2 lg:gap-8 items-center">
              <div className="space-y-6">
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
                  Connecting Farmers Directly with Wholesale Buyers
                </h1>
                <p className="text-lg text-muted-foreground md:text-xl">
                  Farmers.io eliminates intermediaries, ensuring farmers receive fair compensation while offering
                  wholesalers reliable access to high-quality crops.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" className="bg-green-600 hover:bg-green-700">
                    Get Started
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                  <Button size="lg" variant="outline" className="border-green-600 text-green-600 hover:bg-green-50">
                    Learn More
                  </Button>
                </div>
              </div>
              <div className="relative mx-auto lg:mr-0 max-w-3xl rounded-xl overflow-hidden shadow-2xl">
                <Image
                  src={assets.farmer}
                  alt="Indian farmer with crops"
                  width={1280}
                  height={720} // Increased intrinsic height
                  className="object-cover w-full h-[33rem]" // Let height adjust automatically
                  priority
                />
              </div>
            </div>
          </div>
          <div className="absolute inset-0 bg-[url('/placeholder.svg?height=200&width=1000')] bg-repeat opacity-5"></div>
        </section>

        <section id="features" className="py-20 bg-white">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">Why Choose Farmers.io?</h2>
              <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
                Our platform offers unique features designed to empower farmers and provide wholesalers with reliable
                access to quality produce.
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              <div className="bg-green-50 rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow">
                <div className="rounded-full bg-green-100 w-12 h-12 flex items-center justify-center mb-6">
                  <Users className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="text-xl font-bold mb-3">Direct Connectivity</h3>
                <p className="text-muted-foreground">
                  Farmers can list their produce and interact directly with wholesalers, eliminating middlemen and
                  increasing profits.
                </p>
              </div>
              <div className="bg-green-50 rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow">
                <div className="rounded-full bg-green-100 w-12 h-12 flex items-center justify-center mb-6">
                  <ShoppingCart className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="text-xl font-bold mb-3">Advance Bookings</h3>
                <p className="text-muted-foreground">
                  Wholesalers can pre-book crops, providing farmers with immediate cash flow and financial stability.
                </p>
              </div>
              <div className="bg-green-50 rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow">
                <div className="rounded-full bg-green-100 w-12 h-12 flex items-center justify-center mb-6">
                  <Truck className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="text-xl font-bold mb-3">Integrated Logistics</h3>
                <p className="text-muted-foreground">
                  We offer reliable delivery services, ensuring that the transition from farm to market is seamless.
                </p>
              </div>
              <div className="bg-green-50 rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow">
                <div className="rounded-full bg-green-100 w-12 h-12 flex items-center justify-center mb-6">
                  <TrendingUp className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="text-xl font-bold mb-3">Transparent Pricing</h3>
                <p className="text-muted-foreground">
                  A real-time pricing mechanism that ensures farmers receive competitive and fair rates for their
                  produce.
                </p>
              </div>
              <div className="bg-green-50 rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow">
                <div className="rounded-full bg-green-100 w-12 h-12 flex items-center justify-center mb-6">
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
                    className="h-6 w-6 text-green-600"
                  >
                    <path d="M12 18a6 6 0 1 0 0-12 6 6 0 0 0 0 12Z" />
                    <path d="m15.873 15.873 3.071 3.071" />
                    <path d="m5.056 5.056 3.071 3.071" />
                    <path d="m15.873 8.127 3.071-3.071" />
                    <path d="m5.056 18.944 3.071-3.071" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3">Weather Updates</h3>
                <p className="text-muted-foreground">
                  Get real-time weather forecasts and alerts to help plan harvesting and crop management effectively.
                </p>
              </div>
              <div className="bg-green-50 rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow">
                <div className="rounded-full bg-green-100 w-12 h-12 flex items-center justify-center mb-6">
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
                    className="h-6 w-6 text-green-600"
                  >
                    <path d="m12 8-9.04 9.06a2.82 2.82 0 1 0 3.98 3.98L16 12" />
                    <circle cx="17" cy="7" r="5" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3">Multilingual Support</h3>
                <p className="text-muted-foreground">
                  Our platform supports multiple Indian languages, making it accessible to farmers across the country.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="how-it-works" className="py-20 bg-green-50">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">How It Works</h2>
              <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
                Farmers.io makes it easy for farmers to sell their produce directly to wholesalers in just a few simple
                steps.
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-3">
              <div className="bg-white rounded-lg p-8 shadow-sm relative">
                <div className="absolute -top-4 -left-4 w-12 h-12 rounded-full bg-green-600 text-white flex items-center justify-center text-xl font-bold">
                  1
                </div>
                <h3 className="text-xl font-bold mb-3 mt-4">Register</h3>
                <p className="text-muted-foreground">
                  Create your account as a farmer or wholesaler and complete your profile with relevant details.
                </p>
              </div>
              <div className="bg-white rounded-lg p-8 shadow-sm relative">
                <div className="absolute -top-4 -left-4 w-12 h-12 rounded-full bg-green-600 text-white flex items-center justify-center text-xl font-bold">
                  2
                </div>
                <h3 className="text-xl font-bold mb-3 mt-4">List Products</h3>
                <p className="text-muted-foreground">
                  Farmers can list their available crops, set prices, and provide details about quality and quantity.
                </p>
              </div>
              <div className="bg-white rounded-lg p-8 shadow-sm relative">
                <div className="absolute -top-4 -left-4 w-12 h-12 rounded-full bg-green-600 text-white flex items-center justify-center text-xl font-bold">
                  3
                </div>
                <h3 className="text-xl font-bold mb-3 mt-4">Connect & Trade</h3>
                <p className="text-muted-foreground">
                  Wholesalers browse listings, contact farmers, and complete transactions securely through our platform.
                </p>
              </div>
            </div>
          </div>
        </section>


        <section id="testimonials" className="py-20 bg-white">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">What Our Users Say</h2>
              <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
                Hear from farmers and wholesalers who have transformed their businesses with Farmers.io.
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              <TestimonialCard
                name="Rajesh Kumar"
                role="Wheat Farmer, Punjab"
                quote="Since joining Farmers.io, my income has increased by 30%. I no longer have to deal with exploitative middlemen and can set fair prices for my crops."
                imageSrc="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              />
              <TestimonialCard
                name="Anita Sharma"
                role="Rice Farmer, West Bengal"
                quote="The advance booking feature has been a game-changer for my family. I now have financial stability and can plan my harvests better knowing I have confirmed buyers."
                imageSrc="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              />
              <TestimonialCard
                name="Vikram Patel"
                role="Wholesale Buyer, Mumbai"
                quote="Farmers.io has simplified my sourcing process. I can now directly connect with farmers, ensuring quality produce at fair prices while supporting local agriculture."
                imageSrc="https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              />
            </div>
          </div>
        </section>

        <section className="py-20 bg-green-600 text-white">
          <div className="container">
            <div className="grid gap-8 lg:grid-cols-2 items-center">
              <div>
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl mb-6">
                  Ready to Transform Agricultural Trading?
                </h2>
                <p className="text-lg mb-8 text-green-50">
                  Join thousands of farmers and wholesalers who are already benefiting from our platform. Sign up today
                  and experience the future of agricultural commerce.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" className="bg-white text-green-600 hover:bg-gray-200">
                    Register as Farmer
                  </Button>
                  <Button size="lg" className="bg-white text-green-600 hover:bg-gray-200">
                    Register as Wholesaler
                  </Button>
                </div>
              </div>
              <div className="relative mx-auto lg:ml-auto aspect-square max-w-md rounded-xl overflow-hidden">
                <Image
                  src={assets.officer}
                  alt="Farmers using the app"
                  width={500}
                  height={500}
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        <section id="faq" className="py-20 bg-white">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">Frequently Asked Questions</h2>
              <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
                Find answers to common questions about Farmers.io.
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-2 max-w-4xl mx-auto">
              <div className="bg-green-50 rounded-lg p-6">
                <h3 className="text-lg font-bold mb-2">How do I register as a farmer?</h3>
                <p className="text-muted-foreground">
                  Simply click on "Register as Farmer" button, fill in your details, verify your identity, and start
                  listing your produce.
                </p>
              </div>
              <div className="bg-green-50 rounded-lg p-6">
                <h3 className="text-lg font-bold mb-2">Is there a fee to join Farmers.io?</h3>
                <p className="text-muted-foreground">
                  Registration is completely free. We charge a small commission only when a successful transaction is
                  completed.
                </p>
              </div>
              <div className="bg-green-50 rounded-lg p-6">
                <h3 className="text-lg font-bold mb-2">How are payments handled?</h3>
                <p className="text-muted-foreground">
                  We offer secure payment processing through our platform, with options for advance payments and
                  installments.
                </p>
              </div>
              <div className="bg-green-50 rounded-lg p-6">
                <h3 className="text-lg font-bold mb-2">What languages does the app support?</h3>
                <p className="text-muted-foreground">
                  We support Hindi, English, Bengali, Tamil, Telugu, Marathi, Gujarati, Kannada, Malayalam, and Punjabi.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="bg-gray-900 text-gray-300 py-12">
        <div className="container">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Leaf className="h-6 w-6 text-green-500" />
                <span className="text-xl font-bold text-white">Farmers.io</span>
              </div>
              <p className="text-sm mb-4">
                Connecting farmers directly with wholesale buyers for a fairer, more transparent agricultural market.
              </p>
              <div className="flex gap-4">
                <a href="#" className="text-gray-400 hover:text-white">
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
                    className="h-5 w-5"
                  >
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
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
                    className="h-5 w-5"
                  >
                    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
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
                    className="h-5 w-5"
                  >
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                  </svg>
                </a>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4 text-white">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#features" className="hover:text-green-500 transition-colors">
                    Features
                  </Link>
                </li>
                <li>
                  <Link href="#how-it-works" className="hover:text-green-500 transition-colors">
                    How It Works
                  </Link>
                </li>
                <li>
                  <Link href="#testimonials" className="hover:text-green-500 transition-colors">
                    Testimonials
                  </Link>
                </li>
                <li>
                  <Link href="#faq" className="hover:text-green-500 transition-colors">
                    FAQ
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4 text-white">Resources</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="hover:text-green-500 transition-colors">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-green-500 transition-colors">
                    Farming Tips
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-green-500 transition-colors">
                    Market Trends
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-green-500 transition-colors">
                    Support Center
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4 text-white">Contact Us</h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
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
                    className="h-5 w-5 mt-0.5 text-gray-400"
                  >
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                  <span>+91 1234567890</span>
                </li>
                <li className="flex items-start gap-2">
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
                    className="h-5 w-5 mt-0.5 text-gray-400"
                  >
                    <rect width="20" height="16" x="2" y="4" rx="2" />
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                  </svg>
                  <span>support@farmers.io</span>
                </li>
                <li className="flex items-start gap-2">
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
                    className="h-5 w-5 mt-0.5 text-gray-400"
                  >
                    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                  <span>123 Agricultural Hub, New Delhi, India</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-sm text-center">
            <p>&copy; {new Date().getFullYear()} Farmers.io. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

