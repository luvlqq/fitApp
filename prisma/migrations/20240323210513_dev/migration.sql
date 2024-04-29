-- CreateTable
CREATE TABLE "Audit" (
    "id" SERIAL NOT NULL,
    "scope" TEXT,
    "name" TEXT,
    "text" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- CreateIndex
CREATE UNIQUE INDEX "Audit_id_key" ON "Audit"("id");
