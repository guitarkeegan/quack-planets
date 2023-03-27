import { CORE_TYPE } from "@prisma/client"

export async function gatherData() {

  type AllPlanetsObj = {
    bodies: { 
      id: string,
      englishName: string,
      mass: {
        massValue: number,
        massExponent: number,
      },
      vol: {
        volValue: number,
        volExponent: number
      },
      discoveredBy: string,
      discoveryDate: Date,
      moons: [
        {
          moon: string,
          rel: string
        }
      ],
      coreType:  CORE_TYPE
    
    }[]
  }

  const planets = await fetch("https://api.le-systeme-solaire.net/rest/bodies/?filter[]=bodyType,eq,Planet")

  const planetsArr: AllPlanetsObj = await planets.json()

  console.log(planetsArr)
  // console.log("get all planet ids...");

  const planetObjs  = planetsArr['bodies'].map(planet=>({
    
      name: planet.englishName,
      vol: `${planet.vol.volValue} ^ ${planet.vol.volExponent} km ^ 3`,
      mass: `${planet.mass.massValue} ^ ${planet.mass.massExponent} kg`,
      moons: [...planet.moons],
    size:planet.mass.massValue,
    distanceFromSun: 0,
    factOne: `${planet.englishName} was discoved by ${planet.discoveredBy}`,
    factTwo: `${planet.englishName} was discovered on ${planet.discoveryDate}`,
    factThree: `${planet.englishName} has ${planet.moons.length} moons `,
    coreType: planet.coreType,

  }));
  console.log("formatting planet data...")
  console.log(planetObjs)
  return planetObjs;

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
  .then((data) => console.log("--end--"))
  .catch((e) => console.error(e));
