import { Inter } from "next/font/google";
// import styles from "./page.module.css";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="text-white text-6xl">
      <div className="sun"></div>
      <div className="mercury-orbit sm:h-[160px] sm:w-[160px] h-0 w-0">
        <div className="mercury"></div>
      </div>
      <div className="venus-orbit sm:h-[200px] sm:w-[200px] h-0 w-0">
        <div className="venus"></div>
      </div>
      <div className="earth-orbit sm:h-[300px] sm:w-[300px] h-0 w-0">
        <div className="earth">
          <div className="earth-moon-orbit">
            <div className="earth-moon"></div>
          </div>
        </div>
      </div>
      <div className="mars-orbit sm:h-[370px] sm:w-[370px] h-0 w-0">
        <div className="mars"></div>
      </div>
      <div className="jupiter-orbit sm:h-[430px] sm:w-[430px] h-0 w-0">
        <div className="jupiter"></div>
      </div>
      <div className="saturn-orbit sm:h-[500px] sm:w-[500px] h-0 w-0">
        <div className="saturn"></div>
      </div>
      <div className="uranus-orbit sm:h-[560px] sm:w-[560px] h-0 w-0">
        <div className="uranus"></div>
      </div>
      <div className="neptune-orbit sm:h-[620px] sm:w-[620px] h-0 w-0">
        <div className="neptune"></div>
      </div>
    </main>
  );
}
