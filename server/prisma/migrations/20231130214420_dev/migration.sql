/*
  Warnings:

  - Added the required column `CELLPHONE` to the `donator` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `donator` ADD COLUMN `CELLPHONE` VARCHAR(191) NOT NULL;
