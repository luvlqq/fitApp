/*
  Warnings:

  - You are about to drop the column `age` on the `HealthData` table. All the data in the column will be lost.
  - You are about to drop the column `nutrionId` on the `Meals` table. All the data in the column will be lost.
  - You are about to drop the column `timeOfExercise` on the `Workouts` table. All the data in the column will be lost.
  - You are about to drop the `Achivments` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `difficultyLevel` to the `Exercise` table without a default value. This is not possible if the table is not empty.
  - Added the required column `duration` to the `Exercise` table without a default value. This is not possible if the table is not empty.
  - Added the required column `dateOfBirth` to the `HealthData` table without a default value. This is not possible if the table is not empty.
  - Added the required column `fitnessLevel` to the `HealthData` table without a default value. This is not possible if the table is not empty.
  - Added the required column `gender` to the `HealthData` table without a default value. This is not possible if the table is not empty.
  - Added the required column `primaryGoal` to the `HealthData` table without a default value. This is not possible if the table is not empty.
  - Changed the type of `timeToPrepare` on the `Meals` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Added the required column `isCustom` to the `NutrionPlans` table without a default value. This is not possible if the table is not empty.
  - Changed the type of `duration` on the `Workouts` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- CreateEnum
CREATE TYPE "Gender" AS ENUM ('Male', 'Female');

-- CreateEnum
CREATE TYPE "MainUserGoal" AS ENUM ('BuildMuscule', 'EatBetter', 'Increase_Endurance', 'Improve_Fitness', 'Burn_Fat', 'Relieve_Stress');

-- CreateEnum
CREATE TYPE "FitnessLevel" AS ENUM ('Beginner', 'Low', 'Medium', 'Advanced');

-- CreateEnum
CREATE TYPE "DifficultyLevels" AS ENUM ('Easy', 'Medium', 'Hard', 'Light_Weitgh_Baby');

-- DropForeignKey
ALTER TABLE "Achivments" DROP CONSTRAINT "Achivments_userId_fkey";

-- DropForeignKey
ALTER TABLE "Meals" DROP CONSTRAINT "Meals_nutrionId_fkey";

-- AlterTable
ALTER TABLE "Exercise" ADD COLUMN     "difficultyLevel" "DifficultyLevels" NOT NULL,
ADD COLUMN     "duration" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "HealthData" DROP COLUMN "age",
ADD COLUMN     "dateOfBirth" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "fitnessLevel" "FitnessLevel" NOT NULL,
ADD COLUMN     "gender" "Gender" NOT NULL,
ADD COLUMN     "primaryGoal" "MainUserGoal" NOT NULL;

-- AlterTable
ALTER TABLE "Meals" DROP COLUMN "nutrionId",
ADD COLUMN     "nutritionId" INTEGER,
DROP COLUMN "timeToPrepare",
ADD COLUMN     "timeToPrepare" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "NutrionPlans" ADD COLUMN     "isCustom" BOOLEAN NOT NULL;

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;

-- AlterTable
ALTER TABLE "Workouts" DROP COLUMN "timeOfExercise",
DROP COLUMN "duration",
ADD COLUMN     "duration" INTEGER NOT NULL;

-- DropTable
DROP TABLE "Achivments";

-- CreateTable
CREATE TABLE "Achievements" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "dateOfCollect" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "userId" INTEGER
);

-- CreateIndex
CREATE UNIQUE INDEX "Achievements_id_key" ON "Achievements"("id");

-- AddForeignKey
ALTER TABLE "Meals" ADD CONSTRAINT "Meals_nutritionId_fkey" FOREIGN KEY ("nutritionId") REFERENCES "NutrionPlans"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Achievements" ADD CONSTRAINT "Achievements_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;
