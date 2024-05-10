/*
  Warnings:

  - Added the required column `image` to the `Exercise` table without a default value. This is not possible if the table is not empty.
  - Added the required column `sets` to the `Exercise` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Exercise" ADD COLUMN     "image" TEXT NOT NULL,
ADD COLUMN     "sets" TEXT NOT NULL,
ALTER COLUMN "duration" DROP NOT NULL,
ALTER COLUMN "difficultyLevel" DROP NOT NULL,
ALTER COLUMN "groupOfMuscles" DROP NOT NULL;
