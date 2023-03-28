/*
  Warnings:

  - You are about to drop the column `radiuskm` on the `Planet` table. All the data in the column will be lost.
  - Added the required column `diameterkm` to the `Planet` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Planet" DROP COLUMN "radiuskm",
ADD COLUMN     "diameterkm" INTEGER NOT NULL;
