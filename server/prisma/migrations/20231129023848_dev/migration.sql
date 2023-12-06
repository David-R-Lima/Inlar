/*
  Warnings:

  - You are about to drop the column `id_user` on the `donation` table. All the data in the column will be lost.
  - Added the required column `id_User` to the `Donation` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `donation` DROP FOREIGN KEY `Donation_id_user_fkey`;

-- AlterTable
ALTER TABLE `donation` DROP COLUMN `id_user`,
    ADD COLUMN `id_User` INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE `Donation` ADD CONSTRAINT `Donation_id_User_fkey` FOREIGN KEY (`id_User`) REFERENCES `User`(`id_user`) ON DELETE RESTRICT ON UPDATE CASCADE;
