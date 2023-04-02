/**
 * todo set up props
 * todo display on planets pages.
 */

import styles from './styles.module.css';
import EarthDisplay from './EarthDisplay';
import SaturnDisplay from './SaturnDisplay';
import JupiterDisplay from './JupiterDisplay';
import { getPlanetByName } from '@/utils';
import VenusDisplay from './VenusDisplay';
import MercuryDisplay from './MercuryDisplay';
import FactDisplay from '../general/FactDisplay';
type PlanetComponentProps = {
  name: string;
  id: string;
  factOne: string;
  factTwo: string;
  factThree: string;
  moon: {name: string; historyOfName: string; size: number}[];
};
// todo add props for a style object.

const PlanetDisplay = async ({ name }: PlanetComponentProps) => {
  const planet = await getPlanetByName(name);

  return (
    <div>
      <h1 className='text-white text-6xl text-center p-2 uppercase underline underline-offset-4 '>
        {planet?.name}
      </h1>
      <section className='sm:grid sm:grid-cols-2 mt-4'>
        <div
          id='planet-wrapper'
          className='sm:mt-0 mt-12 flex justify-center items-center'
        >
          <div
            id={styles[name.toLowerCase()]}
            className={planets(name.toLowerCase())}
          >
            {name.toLocaleLowerCase() === 'jupiter' && <JupiterDisplay />}
            {name.toLocaleLowerCase() === 'saturn' && <SaturnDisplay />}
            {name.toLocaleLowerCase() === 'earth' && <EarthDisplay />}
            {name.toLocaleLowerCase() === 'venus' && <VenusDisplay />}
            {name.toLocaleLowerCase() === 'mercury' && <MercuryDisplay />}
          </div>
          {/* Overlay */}
          <div id={styles['container']}>
            <div id={styles['overlay-box']}>
              <p className='text-white text-2xl'>
                {planet?.radiuskm}
                <span>&#176;</span>
              </p>
              <div className={styles['line-1']}></div>
              <div className={styles['overlay-2']}>
                <div className={styles['line-2']}></div>
                <p className='text-white text-2xl'>{planet?.coreType}</p>
              </div>
              <div className={styles['overlay-3']}>
                <div className={styles['line-3']}></div>
                <p className='text-white text-2xl'>
                  {planet?.averageDistanceFromSunkm.toString()}
                </p>
              </div>
            </div>
          </div>
        </div>
        <FactDisplay
          fact1={planet?.factOne}
          fact2={planet?.factTwo}
          fact3={planet?.factThree}
          moons={planet?.moon}
          
        />
      </section>
    </div>
  );
};

const planets = (name: string) => {
  switch (name) {
    case 'mercury':
      return 'lg:w-[30rem] lg:h-[30rem] md:w-[400px] md:h-[400px] w-[280px] h-[280px] rounded-full';
    case 'venus':
      return 'lg:w-[30rem] lg:h-[30rem] md:w-[400px] md:h-[400px] w-[280px] h-[280px] rounded-full';
    case 'earth':
      return 'lg:w-[30rem] lg:h-[30rem] md:w-[400px] md:h-[400px] w-[280px] h-[280px] bg-[#041238] rounded-full';
    case 'mars':
      return 'lg:w-[30rem] lg:h-[30rem] md:w-[400px] md:h-[400px] w-[280px] h-[280px] bg-blue-400 rounded-full';
    case 'jupiter':
      return 'lg:w-[30rem] lg:h-[30rem] md:w-[400px] md:h-[400px] w-[250px] h-[250px] rounded-full flex justify-center items-center';
    case 'saturn':
      return 'lg:w-[18rem] lg:h-[18rem] md:w-[250px] md:h-[250px] sm:h-[200px] sm:w-[200px] w-[140px] h-[140px] bg-blue-400 rounded-full flex justify-center items-center';
    case 'uranus':
      return 'lg:w-[30rem] lg:h-[30rem] md:w-[400px] md:h-[400px] w-[280px] h-[280px] bg-blue-400 rounded-full';
    case 'neptune':
      return 'lg:w-[30rem] lg:h-[30rem] md:w-[400px] md:h-[400px] w-[280px] h-[280px] bg-blue-400 rounded-full';
    default:
      return 'lg:w-[30rem] lg:h-[30rem] md:w-[400px] md:h-[400px] w-[280px] h-[280px] bg-blue-400 rounded-full';
  }
};

export default PlanetDisplay;
