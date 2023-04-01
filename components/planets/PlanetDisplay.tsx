/**
 * todo set up props
 * todo display on planets pages.
 */

import { FC } from "react";
import styles from "./styles.module.css";
import EarthDisplay from "./EarthDisplay";
import SaturnDisplay from "./SaturnDisplay";
import JupiterDisplay from "./JupiterDisplay";
import { getPlanetByName } from "@/utils";
import VenusDisplay from "./VenusDisplay";
import MercuryDisplay from "./MercuryDisplay";
type PlanetComponentProps = {
  name: string;
  description: string;
};
// todo add props for a style object.

const PlanetDisplay = async ({ name }: PlanetComponentProps) => {
  const planet = await getPlanetByName(name);
  return (
    <div>
      <h1 className="text-blue text-xl text-center p-2">{planet?.name}</h1>
      <section className="sm:grid sm:grid-cols-2 mt-4">
        <div
          id="planet-wrapper"
          className="sm:mt-0 mt-12 flex justify-center items-center"
        >
          <div
            id={styles[name.toLowerCase()]}
            className={planets(name.toLowerCase())}
          >
            {name.toLocaleLowerCase() === "jupiter" && <JupiterDisplay />}
            {name.toLocaleLowerCase() === "saturn" && <SaturnDisplay />}
            {name.toLocaleLowerCase() === "earth" && <EarthDisplay />}
            {name.toLocaleLowerCase() === "venus" && <VenusDisplay />}
          </div>
          {name.toLocaleLowerCase() === "mercury" && <MercuryDisplay />}
        </div>
        <div className="p-4 m-4 ">
          <h2 className="text-white text-xl p-4 ">Did you know...</h2>
          <div className="p-6 max-w-sm mx-auto mb-2 bg-white rounded-xl flex flex-col items-center space-x-4 shadow-lg shadow-indigo-500/50">
            <p className="text-xl font-medium text-black flow-root">
              {planet?.factOne}
            </p>
          </div>
          <div className="p-6 max-w-sm mx-auto mb-2 bg-white rounded-xl shadow-lg flex flex-col items-center space-x-4">
            <p className="text-xl font-medium text-black flow-root">
              {planet?.factTwo}
            </p>
          </div>
          <div className="p-6 max-w-sm mx-auto mb-2 bg-white rounded-xl shadow-lg flex flex-col items-center space-x-4">
            <p className="text-xl font-medium text-black flow-root">
              {planet?.factThree}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

const planets = (name: string) => {
  switch (name) {
    case "mercury":
      return "lg:w-[30rem] lg:h-[30rem] md:w-[400px] md:h-[400px] w-[280px] h-[280px] rounded-full";
    case "venus":
      return "lg:w-[30rem] lg:h-[30rem] md:w-[400px] md:h-[400px] w-[280px] h-[280px] rounded-full";
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
