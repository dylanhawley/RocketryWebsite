import Link from "next/link"

export default function Header() {
  return (
    <header className="py-6 px-4 sm:px-6 lg:px-8 border-b border-gray-800">
      <div className="container mx-auto flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <img src="/icon.png" alt="Rocketry logo" className="h-8 w-8" />
          <span className="text-xl font-bold">Rocketry</span>
        </Link>
      </div>
    </header>
  )
}

