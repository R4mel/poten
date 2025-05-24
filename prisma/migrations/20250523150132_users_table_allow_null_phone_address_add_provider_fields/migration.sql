-- AlterTable
ALTER TABLE "Users" ADD COLUMN     "provider" TEXT,
ADD COLUMN     "provider_id" TEXT,
ALTER COLUMN "phone" DROP NOT NULL;
