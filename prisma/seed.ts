import { db } from '@/lib/db';
import { CORE_TYPE } from '@prisma/client';

async function main() {}
main()
  .then(async () => {
    await db.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await db.$disconnect();
    process.exit(1);
  });
