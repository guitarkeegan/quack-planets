-- CreateEnum
CREATE TYPE "CORE_TYPE" AS ENUM ('SOLID', 'GAS');

-- CreateTable
CREATE TABLE "Planet" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "name" TEXT NOT NULL,
    "vol" TEXT NOT NULL,
    "mass" TEXT NOT NULL,
    "factOne" TEXT NOT NULL,
    "factTwo" TEXT NOT NULL,
    "factThree" TEXT NOT NULL,
    "coreType" "CORE_TYPE" NOT NULL,

    CONSTRAINT "Planet_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Moon" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "name" TEXT NOT NULL,
    "historyOfName" TEXT NOT NULL,
    "size" INTEGER NOT NULL,
    "planetId" TEXT NOT NULL,

    CONSTRAINT "Moon_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Moon" ADD CONSTRAINT "Moon_planetId_fkey" FOREIGN KEY ("planetId") REFERENCES "Planet"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
