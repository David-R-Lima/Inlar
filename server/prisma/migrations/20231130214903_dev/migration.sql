/*
  Warnings:

  - You are about to drop the column `ENDERECO` on the `donator` table. All the data in the column will be lost.
  - Added the required column `ADDRESS` to the `donator` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `donator` DROP COLUMN `ENDERECO`,
    ADD COLUMN `ADDRESS` VARCHAR(191) NOT NULL;
