/*
  Warnings:

  - You are about to drop the column `products option` on the `Products` table. All the data in the column will be lost.
  - You are about to drop the column `stock` on the `Products` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Products" DROP COLUMN "products option",
DROP COLUMN "stock";
