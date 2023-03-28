/*
  Warnings:

  - You are about to drop the column `distanceFromSun` on the `Planet` table. All the data in the column will be lost.
  - Added the required column `maxDistanceFromSun` to the `Planet` table without a default value. This is not possible if the table is not empty.
  - Added the required column `minDistanceFromSun` to the `Planet` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Planet" DROP COLUMN "distanceFromSun",
ADD COLUMN     "maxDistanceFromSun" INTEGER NOT NULL,
ADD COLUMN     "minDistanceFromSun" INTEGER NOT NULL;
