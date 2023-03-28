import { db } from '@/lib/db';

async function gatherData() {
  type AllPlanetsObj = {
    bodies: {
      id: string;
      englishName: string;
      mass: {
        massValue: number;
        massExponent: number;
      };
      vol: {
        volValue: number;
        volExponent: number;
      };
      discoveredBy: string;
      discoveryDate: Date;
      moons: [
        {
          moon: string;
          rel: string;
        }
      ];
    }[];
  };

  const planets = await fetch(
    'https://api.le-systeme-solaire.net/rest/bodies/?filter[]=bodyType,eq,Planet'
  );

  const planetsArr: AllPlanetsObj = await planets.json();

  const planetObjs = planetsArr['bodies'].map((planet) => ({
    name: planet.englishName,
    vol: `${planet.vol.volValue} ^ ${planet.vol.volExponent} km ^ 3`,
    mass: `${planet.mass.massValue} ^ ${planet.mass.massExponent} kg`,
    moons: planet.moons,
  }));
  console.log('formatting planet data...');
  for (let i = 0; i < planetObjs.length; i++) {
    console.log(planetObjs[i]);
  }
  // const getAllIds: AllIds = await (
  //   await fetch(
  //     "https://api.le-systeme-solaire.net/rest/bodies/?data=id&filter[]=bodyType,eq,Planet"
  //   )
  // ).json();

  // // console.log(planetIds)

  // console.log("fetching planet data...");

  // let planetData = [];

  // for (let planet of planetIds){
  //   planetData.push(  await ((await fetch(`https://api.le-systeme-solaire.net/rest/bodies/${planet}`)).json()))
  // }

  // console.log(planetData);
}

gatherData()
  .then((data) => console.log('--end--', data))
  .catch((e) => console.error(e));
