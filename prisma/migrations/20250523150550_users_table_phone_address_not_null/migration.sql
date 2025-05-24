/*
  Warnings:

  - Made the column `phone` on table `Users` required. This step will fail if there are existing NULL values in that column.
  - Made the column `address` on table `Users` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Users" ALTER COLUMN "phone" SET NOT NULL,
ALTER COLUMN "address" SET NOT NULL;
