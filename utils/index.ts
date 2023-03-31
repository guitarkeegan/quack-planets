import { db } from "@/lib/db";
import { delay } from "@/lib/mock-async";

export const getAllPlanets = async () => {
  let allPlanets = await db.planet.findMany();

  return allPlanets;
};

export const getPlanetByName = async (name:string)=>{

  console.log('NAME ENTERED: ',name)
  let planet = await db.planet.findFirst({
    where: {name: {equals: name}}
  }) 
  console.log(planet);
  if(planet === null || planet === undefined){
    console.error('MISSING PLANET DATA', planet)
  }
  return planet;
}

