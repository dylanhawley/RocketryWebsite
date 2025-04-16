import Header from "./components/header"
import Hero from "./components/hero"
import Features from "./components/features"
import Footer from "./components/footer"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      <Header />
      <main>
        <Hero />
        <Features />
      </main>
      <Footer />
    </div>
  )
}
