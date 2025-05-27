-- CreateTable
CREATE TABLE "Image" (
    "image_id" SERIAL NOT NULL,
    "url" TEXT NOT NULL,
    "alt" TEXT,
    "product_id" INTEGER NOT NULL,

    CONSTRAINT "Image_pkey" PRIMARY KEY ("image_id")
);

-- AddForeignKey
ALTER TABLE "Image" ADD CONSTRAINT "Image_product_id_fkey" FOREIGN KEY ("product_id") REFERENCES "Products"("product_id") ON DELETE RESTRICT ON UPDATE CASCADE;
