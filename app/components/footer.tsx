import Link from "next/link"
import { Twitter, Mail } from "lucide-react"

export default function Footer() {
  return (
    <footer className="py-12 px-4 sm:px-6 lg:px-8 border-t border-gray-800">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center space-x-8">
            <Link href="/privacy" className="text-sm text-gray-400 hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-sm text-gray-400 hover:text-white transition-colors">
              Terms of Service
            </Link>
          </div>
          <div className="flex space-x-6">
            <Link href="https://twitter.com/rocketryapp" className="text-gray-400 hover:text-white transition-colors">
              <Twitter className="h-5 w-5" />
              <span className="sr-only">Twitter</span>
            </Link>
            <Link href="mailto:hello@rocketry.app" className="text-gray-400 hover:text-white transition-colors">
              <Mail className="h-5 w-5" />
              <span className="sr-only">Email</span>
            </Link>
          </div>
          <p className="text-sm text-gray-400">&copy; {new Date().getFullYear()} Rocketry. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

