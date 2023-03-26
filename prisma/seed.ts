//import { db } from "@/lib/db";
//import { CORE_TYPE } from "@prisma/client";
import { PrismaClient } from "@prisma/client";
import { gatherData } from "./gatherData";

const prisma = new PrismaClient();


async function main() {
  const data = await gatherData();
prisma.planet.createMany(data);
  
}
main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });