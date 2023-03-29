import Navbar from '@/components/general/Navbar'
import './globals.css'

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
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
