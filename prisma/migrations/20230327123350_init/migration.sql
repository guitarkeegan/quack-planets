/*
  Warnings:

  - You are about to drop the column `mass` on the `Planet` table. All the data in the column will be lost.
  - You are about to drop the column `vol` on the `Planet` table. All the data in the column will be lost.
  - Added the required column `distanceFromSun` to the `Planet` table without a default value. This is not possible if the table is not empty.
  - Added the required column `size` to the `Planet` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Planet" DROP COLUMN "mass",
DROP COLUMN "vol",
ADD COLUMN     "distanceFromSun" INTEGER NOT NULL,
ADD COLUMN     "size" INTEGER NOT NULL;
