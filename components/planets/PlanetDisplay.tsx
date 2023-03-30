/**
 * todo set up props
 * todo display on planets pages.
 */

import { FC } from "react";
import styles from './styles.module.css';
type PlanetComponentProps = {
  name: string;
  description: string;
};
// todo add props for a style object. 
const PlanetDisplay : FC<PlanetComponentProps> = ({ name, description }) => {
  
  return (
    <section className="sm:grid sm:grid-cols-2 mt-24" >
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
          {name.toLocaleLowerCase() === "jupiter" && 
          <div id="red-dot" className="bg-red-700 lg:h-[40px] lg:w-[60px] md:h-[40px] md:w-[60px] sm:h-[30px] sm:w-[50px] h-[20px] w-[35px] absolute z-10 rounded-full -rotate-45 mt-6 ml-3 opacity-50 border-slate-200 border-solid border-4 blur-sm shadow-xl shadow-gray-100"></div>
        }
        {name.toLocaleLowerCase() === "saturn" &&
        <div className="bg-white z-10 absolute rounded-full lg:h-[2px] lg:w-[520px] md:h-[2px] md:w-[400px] sm:h-[1px] sm:w-[300px] h-[1px] w-[220px]"></div>
        }
        </div>
      </div>
    </section>
  );
};

const planets = (name: string) => {
  switch (name){
    case "mercury":
      return "lg:w-[30rem] lg:h-[30rem] md:w-[400px] md:h-[400px] w-[280px] h-[280px] bg-blue-400 rounded-full"
    case "venus":
      return "lg:w-[30rem] lg:h-[30rem] md:w-[400px] md:h-[400px] w-[280px] h-[280px] bg-blue-400 rounded-full"
    case "earth":
      return "lg:w-[30rem] lg:h-[30rem] md:w-[400px] md:h-[400px] w-[280px] h-[280px] bg-blue-400 rounded-full"
    case "mars":
      return "lg:w-[30rem] lg:h-[30rem] md:w-[400px] md:h-[400px] w-[280px] h-[280px] bg-blue-400 rounded-full"
    case "jupiter":
      return "lg:w-[30rem] lg:h-[30rem] md:w-[400px] md:h-[400px] w-[250px] h-[250px] rounded-full flex justify-center items-center"
    case "saturn":
      return "lg:w-[18rem] lg:h-[18rem] md:w-[250px] md:h-[250px] sm:h-[200px] sm:w-[200px] w-[140px] h-[140px] bg-blue-400 rounded-full flex justify-center items-center"
    case "uranus":
      return "lg:w-[30rem] lg:h-[30rem] md:w-[400px] md:h-[400px] w-[280px] h-[280px] bg-blue-400 rounded-full"
    case "neptune":
        return "lg:w-[30rem] lg:h-[30rem] md:w-[400px] md:h-[400px] w-[280px] h-[280px] bg-blue-400 rounded-full"
    default:
      return "lg:w-[30rem] lg:h-[30rem] md:w-[400px] md:h-[400px] w-[280px] h-[280px] bg-blue-400 rounded-full"
  }
  
}



export default PlanetDisplay;