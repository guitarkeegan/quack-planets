import Navbar from '@/components/general/Navbar'
import './globals.css'

export const metadata = {
  title: 'Quack-Planets',
  description: 'Information on the planets and moons of our solar system',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-black">
        {/* @ts-expect-error Server Component */}
        <Navbar/>
        {children}
        </body>
    </html>
  )
}
