/*
  Warnings:

  - You are about to drop the `Coupons` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Image` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Reviews` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `User_Coupons` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Wishlists` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Image" DROP CONSTRAINT "Image_product_id_fkey";

-- DropForeignKey
ALTER TABLE "Reviews" DROP CONSTRAINT "Reviews_order_id_fkey";

-- DropForeignKey
ALTER TABLE "Reviews" DROP CONSTRAINT "Reviews_product_id_fkey";

-- DropForeignKey
ALTER TABLE "Reviews" DROP CONSTRAINT "Reviews_user_id_fkey";

-- DropForeignKey
ALTER TABLE "User_Coupons" DROP CONSTRAINT "User_Coupons_coupon_id_fkey";

-- DropForeignKey
ALTER TABLE "User_Coupons" DROP CONSTRAINT "User_Coupons_user_id_fkey";

-- DropForeignKey
ALTER TABLE "Wishlists" DROP CONSTRAINT "Wishlists_product_id_fkey";

-- DropForeignKey
ALTER TABLE "Wishlists" DROP CONSTRAINT "Wishlists_user_id_fkey";

-- AlterTable
ALTER TABLE "Products" ADD COLUMN     "imageUrl" TEXT;

-- DropTable
DROP TABLE "Coupons";

-- DropTable
DROP TABLE "Image";

-- DropTable
DROP TABLE "Reviews";

-- DropTable
DROP TABLE "User_Coupons";

-- DropTable
DROP TABLE "Wishlists";
