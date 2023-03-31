import { Inter } from "next/font/google";
// import styles from "./page.module.css";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="text-white text-6xl sm:mt-0 mt-12 sm:gap-0 gap-4 sm:flex-none flex flex-col items-center">
      <div className="sun"></div>
      <div className="mercury-orbit">
        <div className="mercury"></div>
      </div>
      <div className="venus-orbit">
        <div className="venus"></div>
      </div>
      <div className="earth-orbit">
        <div className="earth">
          <div className="earth-moon-orbit">
            <div className="earth-moon"></div>
          </div>
        </div>
      </div>
      <div className="mars-orbit">
        <div className="mars"></div>
      </div>
      <div className="jupiter-orbit">
        <div className="jupiter"></div>
      </div>
      <div className="saturn-orbit">
        <div className="saturn"></div>
      </div>
      <div className="uranus-orbit">
        <div className="uranus"></div>
      </div>
      <div className="neptune-orbit">
        <div className="neptune"></div>
      </div>
    </main>
  );
}
