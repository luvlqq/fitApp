-- DropForeignKey
ALTER TABLE "WorkoutToExercise" DROP CONSTRAINT "WorkoutToExercise_workoutId_fkey";

-- AddForeignKey
ALTER TABLE "WorkoutToExercise" ADD CONSTRAINT "WorkoutToExercise_workoutId_fkey" FOREIGN KEY ("workoutId") REFERENCES "Workouts"("id") ON DELETE CASCADE ON UPDATE CASCADE;
