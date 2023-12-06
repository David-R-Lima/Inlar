/*
  Warnings:

  - You are about to drop the column `ID_USR` on the `donation` table. All the data in the column will be lost.
  - Added the required column `ID_DONATOR` to the `Donation` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `donation` DROP FOREIGN KEY `Donation_ID_USR_fkey`;

-- AlterTable
ALTER TABLE `donation` DROP COLUMN `ID_USR`,
    ADD COLUMN `ID_DONATOR` INTEGER NOT NULL;

-- CreateTable
CREATE TABLE `Donator` (
    `ID_DONATOR` INTEGER NOT NULL AUTO_INCREMENT,
    `NAME` VARCHAR(191) NOT NULL,
    `EMAIL` VARCHAR(191) NOT NULL,
    `CPF` VARCHAR(191) NOT NULL,
    `ENDERECO` VARCHAR(191) NOT NULL,
    `ID_DOA` INTEGER NOT NULL,

    PRIMARY KEY (`ID_DONATOR`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Donation` ADD CONSTRAINT `Donation_ID_DONATOR_fkey` FOREIGN KEY (`ID_DONATOR`) REFERENCES `Donator`(`ID_DONATOR`) ON DELETE RESTRICT ON UPDATE CASCADE;
