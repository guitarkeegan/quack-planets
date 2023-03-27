//import { db } from "@/lib/db";
//import { CORE_TYPE } from "@prisma/client";
import { PrismaClient } from "@prisma/client";
import { gatherData } from "./gatherData";

const db = new PrismaClient();


async function main() {
  const data = await gatherData();
  
await db.planet.createMany({
data: [...data]
});
  
}
main()
  .then(async () => {
    await db.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await db.$disconnect();
    process.exit(1);
  });