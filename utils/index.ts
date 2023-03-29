import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export const getAllPlanets = async () => {
  let allPlanets = await prisma.planet.findMany();

  return allPlanets;
};
