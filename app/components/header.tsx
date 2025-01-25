import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Rocket } from "lucide-react"

export default function Header() {
  return (
    <header className="py-6 px-4 sm:px-6 lg:px-8 border-b border-gray-800">
      <div className="container mx-auto flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <Rocket className="h-6 w-6" />
          <span className="text-xl font-bold">Rocketry</span>
        </Link>
      </div>
    </header>
  )
}

