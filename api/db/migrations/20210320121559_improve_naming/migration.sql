/*
  Warnings:

  - You are about to drop the column `company_name` on the `Company` table. All the data in the column will be lost.
  - The migration will change the primary key for the `Employee` table. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `employee_id` on the `Employee` table. All the data in the column will be lost.
  - You are about to drop the column `user_id` on the `Employee` table. All the data in the column will be lost.
  - You are about to drop the column `company_id` on the `Employee` table. All the data in the column will be lost.
  - You are about to drop the column `office_id` on the `Employee` table. All the data in the column will be lost.
  - You are about to drop the column `office_name` on the `Office` table. All the data in the column will be lost.
  - Added the required column `companyName` to the `Company` table without a default value. This is not possible if the table is not empty.
  - Added the required column `id` to the `Employee` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userId` to the `Employee` table without a default value. This is not possible if the table is not empty.
  - Added the required column `companyId` to the `Employee` table without a default value. This is not possible if the table is not empty.
  - Added the required column `officeId` to the `Employee` table without a default value. This is not possible if the table is not empty.
  - Added the required column `officeName` to the `Office` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Company" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "companyName" TEXT NOT NULL
);
INSERT INTO "new_Company" ("id") SELECT "id" FROM "Company";
DROP TABLE "Company";
ALTER TABLE "new_Company" RENAME TO "Company";
CREATE TABLE "new_Employee" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "userId" TEXT NOT NULL,
    "companyId" TEXT NOT NULL,
    "officeId" TEXT NOT NULL,
    FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    FOREIGN KEY ("companyId") REFERENCES "Company" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    FOREIGN KEY ("officeId") REFERENCES "Office" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
DROP TABLE "Employee";
ALTER TABLE "new_Employee" RENAME TO "Employee";
CREATE TABLE "new_Office" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "officeName" TEXT NOT NULL
);
INSERT INTO "new_Office" ("id") SELECT "id" FROM "Office";
DROP TABLE "Office";
ALTER TABLE "new_Office" RENAME TO "Office";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
