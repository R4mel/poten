/*
  Warnings:

  - A unique constraint covering the columns `[cart_id,product_id]` on the table `Cart_Items` will be added. If there are existing duplicate values, this will fail.
  - Made the column `role` on table `Users` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Users" ALTER COLUMN "role" SET NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Cart_Items_cart_id_product_id_key" ON "Cart_Items"("cart_id", "product_id");
