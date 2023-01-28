/*
  Warnings:

  - You are about to drop the column `latitude` on the `Company` table. All the data in the column will be lost.
  - You are about to drop the column `longitude` on the `Company` table. All the data in the column will be lost.
  - Added the required column `latitude` to the `Office` table without a default value. This is not possible if the table is not empty.
  - Added the required column `longitude` to the `Office` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Office" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "officeName" TEXT NOT NULL,
    "companyId" TEXT NOT NULL,
    "latitude" REAL NOT NULL,
    "longitude" REAL NOT NULL,
    CONSTRAINT "Office_companyId_fkey" FOREIGN KEY ("companyId") REFERENCES "Company" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Office" ("companyId", "id", "officeName") SELECT "companyId", "id", "officeName" FROM "Office";
DROP TABLE "Office";
ALTER TABLE "new_Office" RENAME TO "Office";
CREATE TABLE "new_Company" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL
);
INSERT INTO "new_Company" ("id", "name") SELECT "id", "name" FROM "Company";
DROP TABLE "Company";
ALTER TABLE "new_Company" RENAME TO "Company";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
