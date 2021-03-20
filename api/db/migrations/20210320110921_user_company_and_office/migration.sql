-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "email" TEXT NOT NULL,
    "name" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "canSeeMap" BOOLEAN NOT NULL DEFAULT false,
    "description" TEXT,
    "isAdmin" BOOLEAN NOT NULL DEFAULT false
);

-- CreateTable
CREATE TABLE "Company" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "company_name" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Office" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "office_name" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Employee" (
    "employee_id" TEXT NOT NULL PRIMARY KEY,
    "user_id" TEXT NOT NULL,
    "company_id" TEXT NOT NULL,
    "office_id" TEXT NOT NULL,
    FOREIGN KEY ("user_id") REFERENCES "User" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    FOREIGN KEY ("company_id") REFERENCES "Company" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    FOREIGN KEY ("office_id") REFERENCES "Office" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "User.email_unique" ON "User"("email");
