/*
  Warnings:

  - You are about to drop the column `descricao` on the `doacao` table. All the data in the column will be lost.
  - You are about to drop the column `quantidade` on the `doacao` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `doacao` DROP COLUMN `descricao`,
    DROP COLUMN `quantidade`,
    ADD COLUMN `description` VARCHAR(191) NULL,
    ADD COLUMN `quantity` INTEGER NULL;
