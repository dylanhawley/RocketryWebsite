import Link from "next/link"
import Image from "next/image"

export default function Hero() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div className="text-center md:text-left">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6 tracking-tight">
            Your Personal Space Launch Assistant
          </h1>
          <p className="text-xl sm:text-2xl mb-8 text-gray-400">
            Track every rocket launch, from SpaceX to Blue Origin. Find launches with ideal viewing conditions.
          </p>
          <Link href="https://apps.apple.com/us/app/rocketry-live-launch-tracker/id6738462173" className="inline-block">
            <Image
              src="/Download_on_the_App_Store_Badge_US-UK_RGB_wht_092917.svg"
              alt="Download on App Store"
              width={200}
              height={60}
              className="hover:opacity-90 transition-opacity"
            />
          </Link>
        </div>
        <div className="relative mx-auto md:mx-0">
          <Image
            src="/rocketry_screenshot.png"
            alt="Rocketry App Interface showing upcoming rocket launches"
            width={380}
            height={800}
            className="mx-auto"
            priority
          />
        </div>
      </div>
    </section>
  )
}

