import { db } from "@/lib/db";

export const getAllPlanets = async () => {
  let allPlanets = await db.planet.findMany();

  return allPlanets;
};

