import { Inter } from "next/font/google";
import styles from "./page.module.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="text-white text-6xl bg-black">
      Here is the main
      <Link href="/mercury">
        <div>mercury</div>
      </Link>
      <Link href="/venus">
        <div>venus</div>
      </Link>
      <Link href="/earth">
        <div>earth</div>
      </Link>
      <Link href="/mars">
        <div>mars</div>
      </Link>
      <Link href="/jupiter">
        <div>jupiter</div>
      </Link>
      <Link href="/saturn">
        <div>saturn</div>
      </Link>
      <Link href="/uranus">
        <div>uranus</div>
      </Link>
      <Link href="/neptune">
        <div>neptune</div>
      </Link>
    </main>
  );
}
