/*
  Warnings:

  - You are about to drop the column `workoutId` on the `Exercise` table. All the data in the column will be lost.
  - Made the column `difficultyLevel` on table `Exercise` required. This step will fail if there are existing NULL values in that column.
  - Made the column `groupOfMuscles` on table `Exercise` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "Exercise" DROP CONSTRAINT "Exercise_workoutId_fkey";

-- AlterTable
ALTER TABLE "Exercise" DROP COLUMN "workoutId",
ALTER COLUMN "difficultyLevel" SET NOT NULL,
ALTER COLUMN "groupOfMuscles" SET NOT NULL;

-- AlterTable
ALTER TABLE "Workouts" ADD COLUMN     "exerciseId" INTEGER;

-- CreateTable
CREATE TABLE "WorkoutToExercise" (
    "id" SERIAL NOT NULL,
    "workoutId" INTEGER NOT NULL,
    "exerciseId" INTEGER NOT NULL,

    CONSTRAINT "WorkoutToExercise_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "WorkoutToExercise_workoutId_exerciseId_key" ON "WorkoutToExercise"("workoutId", "exerciseId");

-- AddForeignKey
ALTER TABLE "Workouts" ADD CONSTRAINT "Workouts_exerciseId_fkey" FOREIGN KEY ("exerciseId") REFERENCES "Exercise"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "WorkoutToExercise" ADD CONSTRAINT "WorkoutToExercise_workoutId_fkey" FOREIGN KEY ("workoutId") REFERENCES "Workouts"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "WorkoutToExercise" ADD CONSTRAINT "WorkoutToExercise_exerciseId_fkey" FOREIGN KEY ("exerciseId") REFERENCES "Exercise"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
