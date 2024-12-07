/*
  Warnings:

  - You are about to drop the column `name` on the `user` table. All the data in the column will be lost.
  - You are about to drop the column `number` on the `user` table. All the data in the column will be lost.
  - You are about to drop the column `role` on the `user` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[phoneNo]` on the table `user` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `phoneNo` to the `user` table without a default value. This is not possible if the table is not empty.
  - Added the required column `username` to the `user` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userrole` to the `user` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX `user_number_key` ON `user`;

-- AlterTable
ALTER TABLE `user` DROP COLUMN `name`,
    DROP COLUMN `number`,
    DROP COLUMN `role`,
    ADD COLUMN `phoneNo` INTEGER NOT NULL,
    ADD COLUMN `username` VARCHAR(191) NOT NULL,
    ADD COLUMN `userrole` VARCHAR(191) NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX `user_phoneNo_key` ON `user`(`phoneNo`);
