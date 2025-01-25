import Header from "../components/header"
import Footer from "../components/footer"

export default function PrivacyLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      <Header />
      {children}
      <Footer />
    </div>
  )
}

