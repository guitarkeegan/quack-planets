import { Inter } from "next/font/google";
import styles from "./page.module.css";
import { getAllPlanets } from "@/utils";

const inter = Inter({ subsets: ["latin"] });

export default async function Home() {
  const planets = await getAllPlanets();
  return (
    <main className="text-white text-6xl bg-black">
      {planets.map((planet) => (
        <div key={planet.id}>{planet.name}</div>
      ))}
    </main>
  );
}
