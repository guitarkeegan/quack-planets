import { Inter } from 'next/font/google'
import styles from './page.module.css'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  
  return (
    <main className="text-white text-6xl bg-black">
      Here is the main
      <Link href="/jupiter">
      <div>
      jupiter
      </div>
      </Link>
    </main>
  )
}
