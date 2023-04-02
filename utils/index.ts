import { db } from '@/lib/db';
import { delay } from '@/lib/mock-async';

export const getAllPlanets = async () => {
  let allPlanets = await db.planet.findMany();

  return allPlanets;
};

export const getPlanetByName = async (name: string) => {
  let planet = await db.planet.findFirst({
    where: { name: { equals: name } },
  });

  if (planet === null || planet === undefined) {
    console.error('MISSING PLANET DATA FOR', name);
  }
  return planet;
};
export const getMoonsById = async (id: string) => {
  let moons = await db.moon.findMany({
    where: { planetId: { equals: id } },
  });
  return moons;
};
