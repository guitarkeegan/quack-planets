import { Inter } from "next/font/google";
import styles from "./page.module.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });
//todo we can pull the names from the db somewhere and set the slugs as their names for keeping routes from having to be hardcoded.
const routes : string[] = ["mercury", "venus", " earth", "mars","jupiter", "saturan", "uranus","neptune" ]
export default function Home() {
  return (
    <main className="text-white text-6xl bg-black">
      Here is the main
     {routes.map((route, index)=>(
      <Link key={index} href={`/${route}`}>
        {route}
      </Link>
     ))}
    </main>
  );
}
