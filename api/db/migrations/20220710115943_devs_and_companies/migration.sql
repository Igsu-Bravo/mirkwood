-- CreateTable
CREATE TABLE "Developer" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "alias" TEXT NOT NULL,
    "role" TEXT NOT NULL,
    "companyId" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "Developer_companyId_fkey" FOREIGN KEY ("companyId") REFERENCES "Company" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Company" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "latitude" INTEGER NOT NULL,
    "longitude" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Developer_companyId_key" ON "Developer"("companyId");
