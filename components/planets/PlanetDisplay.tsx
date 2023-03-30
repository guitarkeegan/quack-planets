/**
 * todo set up props
 * todo display on planets pages.
 */

import { FC } from "react";
import styles from "./styles.module.css";
import EarthDisplay from "./EarthDisplay";
import SaturnDisplay from "./SaturnDisplay";
import JupiterDisplay from "./JupiterDisplay";
type PlanetComponentProps = {
  name: string;
  description: string;
};
// todo add props for a style object.
const PlanetDisplay: FC<PlanetComponentProps> = ({ name, description }) => {
  return (
    <section className="sm:grid sm:grid-cols-2 mt-24">
      <div className="text-white flex items-start justify-evenly flex-col px-6">
        <h1 className={styles[name.toLocaleLowerCase()]}>{name}</h1>
        <h2 className="text-2xl">{description}</h2>
      </div>
      <div
        id="planet-wrapper"
        className="sm:mt-0 mt-12 flex justify-center items-center"
      >
        <div
          id={styles[name.toLocaleLowerCase()]}
          className={planets(name.toLowerCase())}
        >
          {name.toLocaleLowerCase() === "jupiter" && (
            <JupiterDisplay />
          )}
          {name.toLocaleLowerCase() === "saturn" && (
            <SaturnDisplay />
          )}
          {name.toLocaleLowerCase() === "earth" && (
            <EarthDisplay />
          )}
          {name.toLocaleLowerCase() === "venus" && (
            <div id="venus" className="lg:w-[30rem] lg:h-[30rem] md:w-[400px] md:h-[400px] w-[280px] h-[280px] bg-slate-100 opacity-40 rounded-full"></div>
          )}
        </div>
      </div>
    </section>
  );
};

const planets = (name: string) => {
  switch (name) {
    case "mercury":
      return "lg:w-[30rem] lg:h-[30rem] md:w-[400px] md:h-[400px] w-[280px] h-[280px] bg-blue-400 rounded-full";
    case "venus":
      return "lg:w-[30rem] lg:h-[30rem] md:w-[400px] md:h-[400px] w-[280px] h-[280px] bg-orange-600 rounded-full";
    case "earth":
      return "lg:w-[30rem] lg:h-[30rem] md:w-[400px] md:h-[400px] w-[280px] h-[280px] bg-[#041238] rounded-full";
    case "mars":
      return "lg:w-[30rem] lg:h-[30rem] md:w-[400px] md:h-[400px] w-[280px] h-[280px] bg-blue-400 rounded-full";
    case "jupiter":
      return "lg:w-[30rem] lg:h-[30rem] md:w-[400px] md:h-[400px] w-[250px] h-[250px] rounded-full flex justify-center items-center";
    case "saturn":
      return "lg:w-[18rem] lg:h-[18rem] md:w-[250px] md:h-[250px] sm:h-[200px] sm:w-[200px] w-[140px] h-[140px] bg-blue-400 rounded-full flex justify-center items-center";
    case "uranus":
      return "lg:w-[30rem] lg:h-[30rem] md:w-[400px] md:h-[400px] w-[280px] h-[280px] bg-blue-400 rounded-full";
    case "neptune":
      return "lg:w-[30rem] lg:h-[30rem] md:w-[400px] md:h-[400px] w-[280px] h-[280px] bg-blue-400 rounded-full";
    default:
      return "lg:w-[30rem] lg:h-[30rem] md:w-[400px] md:h-[400px] w-[280px] h-[280px] bg-blue-400 rounded-full";
  }
};

export default PlanetDisplay;
