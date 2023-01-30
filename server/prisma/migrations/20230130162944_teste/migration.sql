/*
  Warnings:

  - A unique constraint covering the columns `[usersId]` on the table `tags` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX "tags_usersId_notesId_key";

-- CreateIndex
CREATE UNIQUE INDEX "tags_usersId_key" ON "tags"("usersId");
