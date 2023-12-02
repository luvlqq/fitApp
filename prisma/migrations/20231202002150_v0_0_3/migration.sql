-- DropForeignKey
ALTER TABLE "Meals" DROP CONSTRAINT "Meals_nutrionId_fkey";

-- AlterTable
ALTER TABLE "Meals" ALTER COLUMN "nutrionId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "Meals" ADD CONSTRAINT "Meals_nutrionId_fkey" FOREIGN KEY ("nutrionId") REFERENCES "NutrionPlans"("id") ON DELETE SET NULL ON UPDATE CASCADE;
