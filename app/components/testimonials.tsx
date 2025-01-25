import Image from "next/image"
import { Star } from "lucide-react"

const testimonials = [
  {
    quote: "The best rocket launch tracking app I've ever used. Clean interface and reliable notifications!",
    author: "Space Enthusiast",
    rating: 5,
    avatar: "/placeholder.svg?height=80&width=80",
  },
  {
    quote: "Never miss a launch again! The calendar feature is incredibly helpful for planning launch viewings.",
    author: "Astronomy Lover",
    rating: 5,
    avatar: "/placeholder.svg?height=80&width=80",
  },
  {
    quote: "Perfect app for space fans. The notifications work great and the UI is beautiful.",
    author: "Tech Reviewer",
    rating: 5,
    avatar: "/placeholder.svg?height=80&width=80",
  },
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">What Our Users Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gray-50 p-6 rounded-2xl shadow">
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 mb-4">"{testimonial.quote}"</p>
              <div className="flex items-center">
                <Image
                  src={testimonial.avatar || "/placeholder.svg"}
                  alt={testimonial.author}
                  width={40}
                  height={40}
                  className="rounded-full mr-4"
                />
                <p className="font-semibold">{testimonial.author}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

