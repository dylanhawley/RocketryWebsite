import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Rocket } from "lucide-react"

export default function Cta() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-blue-600 text-white">
      <div className="container mx-auto text-center">
        <Rocket className="h-16 w-16 mx-auto mb-6" />
        <h2 className="text-3xl font-bold mb-4">Ready to Start Your Space Journey?</h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto text-blue-100">
          Download Rocketry now and never miss another rocket launch.
        </p>
        <Button asChild size="lg" variant="secondary" className="rounded-full">
          <Link href="https://apps.apple.com/app/rocketry">Download on App Store</Link>
        </Button>
      </div>
    </section>
  )
}

