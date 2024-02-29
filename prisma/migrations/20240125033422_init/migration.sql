/*
  Warnings:

  - You are about to drop the column `zooId` on the `animal` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE `animal` DROP FOREIGN KEY `Animal_zooId_fkey`;

-- AlterTable
ALTER TABLE `animal` DROP COLUMN `zooId`;
