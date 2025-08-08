import { Calendar, Search, Eye } from "lucide-react"

const features = [
  {
    icon: <Calendar className="h-6 w-6" />,
    title: "Launch Calendar",
    description: "Comprehensive overview of upcoming rocket launches from all major space companies.",
  },
  {
    icon: <Search className="h-6 w-6" />,
    title: "Quick Search",
    description: "Easily find specific launches, agencies, or locations with powerful search.",
  },
  {
    icon: <Eye className="h-6 w-6" />,
    title: "Mission Details",
    description: "Access detailed information about each mission, launch site, and space agency.",
  },
]

export default function Features() {
  return (
    <section id="features" className="py-24 px-4 sm:px-6 lg:px-8 border-t border-gray-800">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-16">Everything You Need to Track Space Launches</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="p-6 rounded-2xl bg-gray-900/50 backdrop-blur-sm border border-gray-800">
              <div className="text-blue-400 mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

