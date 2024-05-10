/*
  Warnings:

  - Added the required column `imageUrl` to the `Workouts` table without a default value. This is not possible if the table is not empty.
  - Added the required column `videoUrl` to the `Workouts` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Workouts" ADD COLUMN     "imageUrl" TEXT NOT NULL,
ADD COLUMN     "videoUrl" TEXT NOT NULL;
