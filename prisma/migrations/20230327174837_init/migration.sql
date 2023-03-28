/*
  Warnings:

  - You are about to drop the column `maxDistanceFromSun` on the `Planet` table. All the data in the column will be lost.
  - You are about to drop the column `minDistanceFromSun` on the `Planet` table. All the data in the column will be lost.
  - You are about to drop the column `size` on the `Planet` table. All the data in the column will be lost.
  - Added the required column `maxDistanceFromSunkm` to the `Planet` table without a default value. This is not possible if the table is not empty.
  - Added the required column `minDistanceFromSunkm` to the `Planet` table without a default value. This is not possible if the table is not empty.
  - Added the required column `radiuskm` to the `Planet` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Planet" DROP COLUMN "maxDistanceFromSun",
DROP COLUMN "minDistanceFromSun",
DROP COLUMN "size",
ADD COLUMN     "maxDistanceFromSunkm" INTEGER NOT NULL,
ADD COLUMN     "minDistanceFromSunkm" INTEGER NOT NULL,
ADD COLUMN     "radiuskm" INTEGER NOT NULL;
