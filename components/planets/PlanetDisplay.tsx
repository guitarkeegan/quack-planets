/**
 * todo set up props
 * todo display on planets pages.
 */

import { FC } from 'react';
import styles from './styles.module.css';
type PlanetComponentProps = {
  name: string;
  description: string;
};
// todo add props for a style object.
const PlanetDisplay: FC<PlanetComponentProps> = ({ name, description }) => {
  return (
    <section className='sm:grid sm:grid-cols-2 mt-24'>
      <div className='text-white flex items-start justify-evenly flex-col px-6'>
        <h1 className={styles[name.toLocaleLowerCase()]}>{name}</h1>
        <h2 className='text-2xl'>{description}</h2>
      </div>
      <div
        id='planet-wrapper'
        className='sm:mt-0 mt-12 flex justify-center items-center'
      >
        <div id='jupiter' className={planets(name.toLowerCase())}></div>
      </div>
    </section>
  );
};

const planets = (name: string) => {
  switch (name) {
    case 'mercury':
      return 'lg:w-[30rem] lg:h-[30rem] md:w-[400px] md:h-[400px] w-[280px] h-[280px] bg-blue-400 rounded-full';
    case 'venus':
      return 'lg:w-[30rem] lg:h-[30rem] md:w-[400px] md:h-[400px] w-[280px] h-[280px] bg-blue-400 rounded-full';
    case 'earth':
      return 'lg:w-[30rem] lg:h-[30rem] md:w-[400px] md:h-[400px] w-[280px] h-[280px] bg-blue-400 rounded-full';
    case 'mars':
      return 'lg:w-[30rem] lg:h-[30rem] md:w-[400px] md:h-[400px] w-[280px] h-[280px] bg-blue-400 rounded-full';
    case 'jupiter':
      return 'lg:w-[30rem] lg:h-[30rem] md:w-[400px] md:h-[400px] w-[280px] h-[280px] bg-blue-400 rounded-full';
    case 'saturn':
      return 'lg:w-[30rem] lg:h-[30rem] md:w-[400px] md:h-[400px] w-[280px] h-[280px] bg-blue-400 rounded-full';
    case 'uranus':
      return 'lg:w-[30rem] lg:h-[30rem] md:w-[400px] md:h-[400px] w-[280px] h-[280px] bg-blue-400 rounded-full';
    case 'neptune':
      return 'lg:w-[30rem] lg:h-[30rem] md:w-[400px] md:h-[400px] w-[280px] h-[280px] bg-blue-400 rounded-full';
    default:
      return 'lg:w-[30rem] lg:h-[30rem] md:w-[400px] md:h-[400px] w-[280px] h-[280px] bg-blue-400 rounded-full';
  }
};

export default PlanetDisplay;
