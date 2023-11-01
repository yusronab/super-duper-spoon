import Navbar from '@/components/Utilities/Navbar'
import Footer from '@/components/Utilities/Footer'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div>
      <Navbar />
      <div className="px-[8%]">{children}</div>
      <Footer />
    </div>
  )
}
