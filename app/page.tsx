import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function Component() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white border-b border-gray-100 px-4 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Image src="/wassil-logo.png" alt="Wassil" width={120} height={40} />
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-gray-700 hover:text-red-500 transition-colors">
              Home
            </a>
            <a href="#" className="text-gray-700 hover:text-red-500 transition-colors">
              FAQ
            </a>
            <a href="#" className="text-gray-700 hover:text-red-500 transition-colors">
              Contact
            </a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center text-center text-white">
        <div className="absolute inset-0 bg-black/60 z-10"></div>
        <Image src="/hero-bg.jpg" alt="People shopping in store" fill className="object-cover" />
        <div className="relative z-20 max-w-4xl mx-auto px-4">
          <div className="mb-6">
            <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-medium">Food app</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Wassil — Get What You Need
            <br />
            From Stores Near You, in 5 Minutes
          </h1>
          <p className="text-xl mb-8 text-gray-200">
            Wassil connects you with your favorite stores nearby — faster than ever!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-red-500 hover:bg-red-600 text-white px-8 py-3 rounded-full text-lg">Playstore</Button>
            <Button
              variant="outline"
              className="bg-transparent text-white hover:bg-white hover:text-black px-8 py-3 rounded-full text-lg"
            >
              App store
            </Button>
          </div>
        </div>
      </section>

      {/* Phone Mockups Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 flex justify-center">
          <Image
            src="/phone-screens.png"
            alt="Wassil app screens showing statistics, main interface, and store locations"
            width={800}
            height={500}
            className="max-w-full h-auto"
          />
        </div>
      </section>

      {/* Statistics Bar */}
      <section className="py-8 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="bg-red-500 rounded-2xl py-8 px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
              <div>
                <div className="text-3xl font-bold mb-2">546+</div>
                <div className="text-sm opacity-90">Registered Riders</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">789,900+</div>
                <div className="text-sm opacity-90">Orders Delivered</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">690+</div>
                <div className="text-sm opacity-90">Restaurants Partnered</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">17,457+</div>
                <div className="text-sm opacity-90">Food Items</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How the app works */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-16 text-gray-800">How the app works</h2>
          <div className="flex justify-center items-center space-x-12">
            {/* Step 1: Select Role */}
            <div className="group relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-red-500/20 to-orange-500/20 rounded-[4rem] opacity-0 group-hover:opacity-100 transition-all duration-500 blur-xl"></div>
              <div className="relative w-72 h-[600px] bg-white rounded-[3rem] shadow-xl border border-gray-200 overflow-hidden transform group-hover:scale-105 group-hover:-translate-y-2 transition-all duration-500">
                <Image
                  src="/account-type-screen.png"
                  alt="Select your role - Consumer, Store, or Delivery person"
                  fill
                  className="object-cover"
                />
                <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="bg-black/80 text-white px-4 py-2 rounded-full text-sm font-medium">
                    Step 1: Choose Role
                  </div>
                </div>
              </div>
            </div>

            {/* Step 2: Fill Info */}
            <div className="group relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-orange-500/20 to-yellow-500/20 rounded-[4rem] opacity-0 group-hover:opacity-100 transition-all duration-500 blur-xl"></div>
              <div className="relative w-72 h-[600px] bg-white rounded-[3rem] shadow-xl border border-gray-200 overflow-hidden transform group-hover:scale-105 group-hover:-translate-y-2 transition-all duration-500 delay-100">
                <Image
                  src="/register-screen.png"
                  alt="Fill your information - Name and phone number"
                  fill
                  className="object-cover"
                />
                <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="bg-black/80 text-white px-4 py-2 rounded-full text-sm font-medium">
                    Step 2: Fill Info
                  </div>
                </div>
              </div>
            </div>

            {/* Step 3: Start Using */}
            <div className="group relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-yellow-500/20 to-red-500/20 rounded-[4rem] opacity-0 group-hover:opacity-100 transition-all duration-500 blur-xl"></div>
              <div className="relative w-72 h-[600px] bg-white rounded-[3rem] shadow-xl border border-gray-200 overflow-hidden transform group-hover:scale-105 group-hover:-translate-y-2 transition-all duration-500 delay-200">
                <Image
                  src="/orders-screen.png"
                  alt="Track your orders and manage deliveries"
                  fill
                  className="object-cover"
                />
                <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="bg-black/80 text-white px-4 py-2 rounded-full text-sm font-medium">
                    Step 3: Start Using
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Step indicators */}
          <div className="flex justify-center items-center space-x-8 mt-12">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                1
              </div>
              <span className="text-gray-600 font-medium">Select Role</span>
            </div>
            <div className="w-12 h-px bg-gray-300"></div>
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                2
              </div>
              <span className="text-gray-600 font-medium">Fill Information</span>
            </div>
            <div className="w-12 h-px bg-gray-300"></div>
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                3
              </div>
              <span className="text-gray-600 font-medium">Start Ordering</span>
            </div>
          </div>
        </div>
      </section>

      {/* Ordering Section */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex items-center relative">
            {/* Left side - Image with shadow effect */}
            <div className="flex-1 relative">
              {/* Shadow/duplicate image with reduced opacity */}
              <div className="absolute top-2 right-19.5 z-0">
                <Image
                  src="/couple-phones.png"
                  alt="Shadow"
                  width={500}
                  height={350}
                  className="rounded-2xl opacity-20"
                />
              </div>
              {/* Main image */}
              <div className="relative z-10">
                <Image
                  src="/couple-phones.png"
                  alt="Happy couple using Wassil app on their phones"
                  width={500}
                  height={350}
                  className="rounded-2xl"
                />
              </div>
            </div>

            {/* Right side - Text content */}
            <div className="flex-1 pl-8">
              <div className="max-w-lg">
                {/* Order + logo + ing text */}
                <div className="flex items-center mb-4">
                  
                  <span className="text-5xl font-bold text-gray-900">Wassil is more</span>
                </div>

                {/* Personalised & Instant in stretched dark rectangle */}
                <div className="relative mb-8 max-w-max">
                  {/* Extended rectangle behind main element */}
                  <div className="absolute right-0 top-0 bg-gray-900 rounded-full h-[76px] w-[380px] -translate-x-72 z-0"></div>

                  {/* Main content container */}
                  <div className="relative z-10 bg-gray-900 text-white px-8 py-5 rounded-full">
                    <div className="flex flex-col items-start">
                      <span className="text-3xl font-bold">
                        <span className="text-orange-400">
                          <u>Personalised</u>
                        </span>{" "}
                        & Instant
                      </span>
                    </div>
                  </div>
                </div>

                {/* Subtitle and buttons - centered */}
                <div className="text-center">
                  <p className="text-gray-700 text-lg mb-6">Download the Wassil app for faster ordering</p>

                  {/* App Store Buttons - centered */}
                  <div className="flex justify-center">
                    <Image
                      src="/app-store-buttons.png"
                      alt="Download on App Store and Google Play"
                      width={300}
                      height={60}
                      className="cursor-pointer hover:opacity-90 transition-opacity"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom Cards */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Partner Card */}
            <div className="group relative bg-gray-900 rounded-2xl overflow-hidden h-80">
              {/* Background Image */}
              <Image src="/cccd.jpg" alt="Professional chef with cooking ingredients" fill className="object-cover" />

              {/* Dark Overlay */}
              <div className="absolute inset-0 bg-black/40"></div>

              {/* Hover Badge */}
              <div className="absolute top-0 left-8 transform -translate-y-[100%] opacity-0 group-hover:translate-y-[-15%] group-hover:opacity-100 transition-all duration-300 ease-out">
                <div className="bg-white text-black px-4 py-3.5 rounded-lg text-sm font-medium whitespace-nowrap">
                  Earn more with lower fees
                </div>
              </div>

              {/* Content */}
              <div className="relative z-10 p-8 h-full flex flex-col justify-end">
                <div className="text-orange-500 text-lg font-medium mb-2">Signup as a business</div>
                <h3 className="text-white text-4xl font-bold mb-6">Partner with us</h3>
                <Button className="bg-orange-500 hover:bg-orange-600 text-white rounded-full px-8 py-3 w-fit">
                  Get Started
                </Button>
              </div>
            </div>

            {/* Ride Card */}
            <div className="group relative bg-yellow-400 rounded-2xl overflow-hidden h-80">
              {/* Background Image */}
              <Image
                src="/deli.jpg"
                alt="Delivery person giving thumbs up with scooter"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black/40"></div>
              {/* Hover Badge */}
              <div className="absolute top-0 left-8 transform -translate-y-full opacity-0 group-hover:translate-y-[-15%] group-hover:opacity-100 transition-all duration-300 ease-out">
                <div className="bg-white text-black px-10 py-3.5 rounded-lg text-sm font-medium whitespace-nowrap">
                  Avail exclusive perks
                </div>
              </div>

              {/* Content */}
              <div className="relative z-10 p-8 h-full flex flex-col justify-end">
                <div className="text-orange-500 text-lg font-medium mb-2">Signup as a rider</div>
                <h3 className="text-white text-4xl font-bold mb-6">Ride with us</h3>
                <Button className="bg-orange-500 hover:bg-orange-600 text-white rounded-full px-8 py-3 w-fit">
                  Get Started
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
