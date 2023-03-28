/*
  Warnings:

  - You are about to drop the column `diameterkm` on the `Planet` table. All the data in the column will be lost.
  - You are about to drop the column `maxDistanceFromSunkm` on the `Planet` table. All the data in the column will be lost.
  - You are about to drop the column `minDistanceFromSunkm` on the `Planet` table. All the data in the column will be lost.
  - Added the required column `averageDistanceFromSunkm` to the `Planet` table without a default value. This is not possible if the table is not empty.
  - Added the required column `radiuskm` to the `Planet` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Planet" DROP COLUMN "diameterkm",
DROP COLUMN "maxDistanceFromSunkm",
DROP COLUMN "minDistanceFromSunkm",
ADD COLUMN     "averageDistanceFromSunkm" INTEGER NOT NULL,
ADD COLUMN     "radiuskm" DOUBLE PRECISION NOT NULL;
