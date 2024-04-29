/*
  Warnings:

  - Added the required column `age` to the `HealthData` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "HealthData" ADD COLUMN     "age" INTEGER NOT NULL;
