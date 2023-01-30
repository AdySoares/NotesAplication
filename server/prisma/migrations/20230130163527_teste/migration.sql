/*
  Warnings:

  - Made the column `notesId` on table `tags` required. This step will fail if there are existing NULL values in that column.
  - Made the column `notesId` on table `links` required. This step will fail if there are existing NULL values in that column.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_tags" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "title" TEXT NOT NULL,
    "notesId" TEXT NOT NULL,
    "usersId" TEXT NOT NULL,
    CONSTRAINT "tags_usersId_fkey" FOREIGN KEY ("usersId") REFERENCES "users" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "tags_notesId_fkey" FOREIGN KEY ("notesId") REFERENCES "notes" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_tags" ("id", "notesId", "title", "usersId") SELECT "id", "notesId", "title", "usersId" FROM "tags";
DROP TABLE "tags";
ALTER TABLE "new_tags" RENAME TO "tags";
CREATE UNIQUE INDEX "tags_usersId_notesId_key" ON "tags"("usersId", "notesId");
CREATE TABLE "new_links" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "url" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "notesId" TEXT NOT NULL,
    CONSTRAINT "links_notesId_fkey" FOREIGN KEY ("notesId") REFERENCES "notes" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_links" ("createdAt", "id", "notesId", "url") SELECT "createdAt", "id", "notesId", "url" FROM "links";
DROP TABLE "links";
ALTER TABLE "new_links" RENAME TO "links";
CREATE UNIQUE INDEX "links_notesId_key" ON "links"("notesId");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
