import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Download() {
  return (
    <section id="download" className="py-24 px-4 sm:px-6 lg:px-8 border-t border-gray-800">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">Download Rocketry Today</h2>
        <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
          Join thousands of space enthusiasts who use Rocketry to stay updated with the latest launches.
        </p>
        <Button asChild size="lg" className="rounded-full">
          <Link href="https://apps.apple.com/app/rocketry" className="inline-flex items-center">
            <svg className="h-5 w-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.0754 12.0001C17.0656 10.2303 18.0784 9.23832 19.1246 8.66646C18.5782 7.87415 17.6218 7.33317 16.5242 7.22725C15.4826 7.12481 14.3922 7.84062 13.8722 7.84062C13.3302 7.84062 12.4181 7.24837 11.5533 7.26476C10.3744 7.29754 9.27753 7.94325 8.70567 8.95476C7.50695 11.0601 8.41148 14.1815 9.56576 15.9021C10.1393 16.7453 10.8252 17.6809 11.7379 17.6563C12.6177 17.6285 12.9576 17.0937 14.0156 17.0937C15.0556 17.0937 15.3759 17.6563 16.2967 17.6424C17.2502 17.6285 17.8458 16.8003 18.399 15.9474C18.8463 15.2615 19.0184 14.9289 19.3747 14.2429C18.1432 13.7104 17.0824 12.9967 17.0754 12.0001V12.0001ZM15.3839 6.05007C15.8609 5.47473 16.1657 4.68242 16.0737 3.90649C15.3927 3.94622 14.5908 4.35525 14.0941 4.91421C13.6449 5.42058 13.2847 6.23264 13.3939 6.98566C14.1485 7.0515 14.9051 6.62609 15.3839 6.05007V6.05007Z" />
            </svg>
            Download on App Store
          </Link>
        </Button>
      </div>
    </section>
  )
}

