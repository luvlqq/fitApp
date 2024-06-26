-- CreateEnum
CREATE TYPE "groupOfMusculesENUM" AS ENUM ('Chest', 'Back', 'Hips', 'Bicep', 'Triceps', 'Delta', 'Press', 'Caviar', 'Trapezium', 'Forearm');

-- CreateEnum
CREATE TYPE "Role" AS ENUM ('Admin', 'User');

-- CreateEnum
CREATE TYPE "Gender" AS ENUM ('Male', 'Female');

-- CreateEnum
CREATE TYPE "MainUserGoal" AS ENUM ('BuildMuscule', 'EatBetter', 'Increase_Endurance', 'Improve_Fitness', 'Burn_Fat', 'Relieve_Stress');

-- CreateEnum
CREATE TYPE "FitnessLevel" AS ENUM ('Beginner', 'Low', 'Medium', 'Advanced');

-- CreateEnum
CREATE TYPE "DifficultyLevels" AS ENUM ('Easy', 'Medium', 'Hard', 'Light_Weitgh_Baby');

-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "hashRt" TEXT,
    "role" "Role" NOT NULL DEFAULT 'User',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- CreateTable
CREATE TABLE "Workouts" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "duration" INTEGER NOT NULL,
    "userId" INTEGER
);

-- CreateTable
CREATE TABLE "Exercise" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "video" TEXT NOT NULL,
    "duration" INTEGER NOT NULL,
    "workoutId" INTEGER,
    "difficultyLevel" "DifficultyLevels" NOT NULL,
    "groupOfMuscles" "groupOfMusculesENUM" NOT NULL
);

-- CreateTable
CREATE TABLE "FavouriteWorkouts" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "workoutId" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "HealthData" (
    "id" SERIAL NOT NULL,
    "gender" "Gender" NOT NULL,
    "weight" DOUBLE PRECISION NOT NULL,
    "height" DOUBLE PRECISION NOT NULL,
    "dateOfBirth" TIMESTAMP(3) NOT NULL,
    "primaryGoal" "MainUserGoal" NOT NULL,
    "fitnessLevel" "FitnessLevel" NOT NULL,
    "userId" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "NutrionPlans" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "proteins" DOUBLE PRECISION NOT NULL,
    "fats" DOUBLE PRECISION NOT NULL,
    "carbs" DOUBLE PRECISION NOT NULL,
    "kkal" DOUBLE PRECISION NOT NULL,
    "isCustom" BOOLEAN NOT NULL,
    "userId" INTEGER
);

-- CreateTable
CREATE TABLE "Meals" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "photo" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "recipe" TEXT NOT NULL,
    "timeToPrepare" INTEGER NOT NULL,
    "proteins" DOUBLE PRECISION NOT NULL,
    "fats" DOUBLE PRECISION NOT NULL,
    "carbs" DOUBLE PRECISION NOT NULL,
    "kkal" DOUBLE PRECISION NOT NULL,
    "nutritionId" INTEGER
);

-- CreateTable
CREATE TABLE "Goals" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "exercisesDone" INTEGER NOT NULL,
    "weight" DOUBLE PRECISION NOT NULL
);

-- CreateTable
CREATE TABLE "Achievements" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "dateOfCollect" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "userId" INTEGER
);

-- CreateTable
CREATE TABLE "Audit" (
    "id" SERIAL NOT NULL,
    "scope" TEXT,
    "name" TEXT,
    "text" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- CreateIndex
CREATE UNIQUE INDEX "User_id_key" ON "User"("id");

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Workouts_id_key" ON "Workouts"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Exercise_id_key" ON "Exercise"("id");

-- CreateIndex
CREATE UNIQUE INDEX "FavouriteWorkouts_id_key" ON "FavouriteWorkouts"("id");

-- CreateIndex
CREATE UNIQUE INDEX "HealthData_id_key" ON "HealthData"("id");

-- CreateIndex
CREATE UNIQUE INDEX "HealthData_userId_key" ON "HealthData"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "NutrionPlans_id_key" ON "NutrionPlans"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Meals_id_key" ON "Meals"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Goals_id_key" ON "Goals"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Achievements_id_key" ON "Achievements"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Audit_id_key" ON "Audit"("id");

-- AddForeignKey
ALTER TABLE "Workouts" ADD CONSTRAINT "Workouts_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Exercise" ADD CONSTRAINT "Exercise_workoutId_fkey" FOREIGN KEY ("workoutId") REFERENCES "Workouts"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FavouriteWorkouts" ADD CONSTRAINT "FavouriteWorkouts_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FavouriteWorkouts" ADD CONSTRAINT "FavouriteWorkouts_workoutId_fkey" FOREIGN KEY ("workoutId") REFERENCES "Workouts"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "HealthData" ADD CONSTRAINT "HealthData_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "NutrionPlans" ADD CONSTRAINT "NutrionPlans_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Meals" ADD CONSTRAINT "Meals_nutritionId_fkey" FOREIGN KEY ("nutritionId") REFERENCES "NutrionPlans"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Goals" ADD CONSTRAINT "Goals_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Achievements" ADD CONSTRAINT "Achievements_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;
