-- DropForeignKey
ALTER TABLE "Workouts" DROP CONSTRAINT "Workouts_userId_fkey";

-- AlterTable
ALTER TABLE "Workouts" ALTER COLUMN "userId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "Workouts" ADD CONSTRAINT "Workouts_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;
