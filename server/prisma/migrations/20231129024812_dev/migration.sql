/*
  Warnings:

  - The primary key for the `donation` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `createdAt` on the `donation` table. All the data in the column will be lost.
  - You are about to drop the column `description` on the `donation` table. All the data in the column will be lost.
  - You are about to drop the column `id_doacao` on the `donation` table. All the data in the column will be lost.
  - You are about to drop the column `id_user` on the `donation` table. All the data in the column will be lost.
  - You are about to drop the column `quantity` on the `donation` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `donation` table. All the data in the column will be lost.
  - Added the required column `ID_DOA` to the `Donation` table without a default value. This is not possible if the table is not empty.
  - Added the required column `ID_USR` to the `Donation` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `donation` DROP FOREIGN KEY `Donation_id_user_fkey`;

-- AlterTable
ALTER TABLE `donation` DROP PRIMARY KEY,
    DROP COLUMN `createdAt`,
    DROP COLUMN `description`,
    DROP COLUMN `id_doacao`,
    DROP COLUMN `id_user`,
    DROP COLUMN `quantity`,
    DROP COLUMN `updatedAt`,
    ADD COLUMN `CRE_AT` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    ADD COLUMN `DESC` VARCHAR(191) NULL,
    ADD COLUMN `ID_DOA` INTEGER NOT NULL AUTO_INCREMENT,
    ADD COLUMN `ID_USR` INTEGER NOT NULL,
    ADD COLUMN `QUAN` INTEGER NULL,
    ADD COLUMN `UPD_AT` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    ADD PRIMARY KEY (`ID_DOA`);

-- AddForeignKey
ALTER TABLE `Donation` ADD CONSTRAINT `Donation_ID_USR_fkey` FOREIGN KEY (`ID_USR`) REFERENCES `User`(`id_user`) ON DELETE RESTRICT ON UPDATE CASCADE;
