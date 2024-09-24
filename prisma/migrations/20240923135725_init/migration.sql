-- CreateTable
CREATE TABLE "Kika" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "headTitle" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "history" TEXT NOT NULL,
    "traditions" TEXT NOT NULL,
    "lastUpdated" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedById" INTEGER NOT NULL,
    CONSTRAINT "Kika_updatedById_fkey" FOREIGN KEY ("updatedById") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Mutuba" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "headTitle" TEXT NOT NULL,
    "kikaId" INTEGER NOT NULL,
    CONSTRAINT "Mutuba_kikaId_fkey" FOREIGN KEY ("kikaId") REFERENCES "Kika" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Ssiga" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "headTitle" TEXT NOT NULL,
    "mutubaId" INTEGER NOT NULL,
    CONSTRAINT "Ssiga_mutubaId_fkey" FOREIGN KEY ("mutubaId") REFERENCES "Mutuba" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Lunyiriri" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "headTitle" TEXT NOT NULL,
    "ssigaId" INTEGER NOT NULL,
    CONSTRAINT "Lunyiriri_ssigaId_fkey" FOREIGN KEY ("ssigaId") REFERENCES "Ssiga" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Luggya" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "headTitle" TEXT NOT NULL,
    "lunyiririId" INTEGER NOT NULL,
    CONSTRAINT "Luggya_lunyiririId_fkey" FOREIGN KEY ("lunyiririId") REFERENCES "Lunyiriri" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Enju" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "headTitle" TEXT NOT NULL,
    "luggyaId" INTEGER NOT NULL,
    CONSTRAINT "Enju_luggyaId_fkey" FOREIGN KEY ("luggyaId") REFERENCES "Luggya" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "User" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "username" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "role" TEXT NOT NULL DEFAULT 'USER'
);

-- CreateTable
CREATE TABLE "_KikaEditors" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,
    CONSTRAINT "_KikaEditors_A_fkey" FOREIGN KEY ("A") REFERENCES "Kika" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "_KikaEditors_B_fkey" FOREIGN KEY ("B") REFERENCES "User" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "_KikaModerators" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,
    CONSTRAINT "_KikaModerators_A_fkey" FOREIGN KEY ("A") REFERENCES "Kika" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "_KikaModerators_B_fkey" FOREIGN KEY ("B") REFERENCES "User" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "_MutubaEditors" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,
    CONSTRAINT "_MutubaEditors_A_fkey" FOREIGN KEY ("A") REFERENCES "Mutuba" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "_MutubaEditors_B_fkey" FOREIGN KEY ("B") REFERENCES "User" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "_MutubaModerators" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,
    CONSTRAINT "_MutubaModerators_A_fkey" FOREIGN KEY ("A") REFERENCES "Mutuba" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "_MutubaModerators_B_fkey" FOREIGN KEY ("B") REFERENCES "User" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "_SsigaEditors" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,
    CONSTRAINT "_SsigaEditors_A_fkey" FOREIGN KEY ("A") REFERENCES "Ssiga" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "_SsigaEditors_B_fkey" FOREIGN KEY ("B") REFERENCES "User" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "_SsigaModerators" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,
    CONSTRAINT "_SsigaModerators_A_fkey" FOREIGN KEY ("A") REFERENCES "Ssiga" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "_SsigaModerators_B_fkey" FOREIGN KEY ("B") REFERENCES "User" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "_LunyiririEditors" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,
    CONSTRAINT "_LunyiririEditors_A_fkey" FOREIGN KEY ("A") REFERENCES "Lunyiriri" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "_LunyiririEditors_B_fkey" FOREIGN KEY ("B") REFERENCES "User" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "_LunyiririModerators" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,
    CONSTRAINT "_LunyiririModerators_A_fkey" FOREIGN KEY ("A") REFERENCES "Lunyiriri" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "_LunyiririModerators_B_fkey" FOREIGN KEY ("B") REFERENCES "User" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "_LuggyaEditors" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,
    CONSTRAINT "_LuggyaEditors_A_fkey" FOREIGN KEY ("A") REFERENCES "Luggya" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "_LuggyaEditors_B_fkey" FOREIGN KEY ("B") REFERENCES "User" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "_LuggyaModerators" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,
    CONSTRAINT "_LuggyaModerators_A_fkey" FOREIGN KEY ("A") REFERENCES "Luggya" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "_LuggyaModerators_B_fkey" FOREIGN KEY ("B") REFERENCES "User" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "_EnjuEditors" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,
    CONSTRAINT "_EnjuEditors_A_fkey" FOREIGN KEY ("A") REFERENCES "Enju" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "_EnjuEditors_B_fkey" FOREIGN KEY ("B") REFERENCES "User" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "_EnjuModerators" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,
    CONSTRAINT "_EnjuModerators_A_fkey" FOREIGN KEY ("A") REFERENCES "Enju" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "_EnjuModerators_B_fkey" FOREIGN KEY ("B") REFERENCES "User" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "User_username_key" ON "User"("username");

-- CreateIndex
CREATE UNIQUE INDEX "_KikaEditors_AB_unique" ON "_KikaEditors"("A", "B");

-- CreateIndex
CREATE INDEX "_KikaEditors_B_index" ON "_KikaEditors"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_KikaModerators_AB_unique" ON "_KikaModerators"("A", "B");

-- CreateIndex
CREATE INDEX "_KikaModerators_B_index" ON "_KikaModerators"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_MutubaEditors_AB_unique" ON "_MutubaEditors"("A", "B");

-- CreateIndex
CREATE INDEX "_MutubaEditors_B_index" ON "_MutubaEditors"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_MutubaModerators_AB_unique" ON "_MutubaModerators"("A", "B");

-- CreateIndex
CREATE INDEX "_MutubaModerators_B_index" ON "_MutubaModerators"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_SsigaEditors_AB_unique" ON "_SsigaEditors"("A", "B");

-- CreateIndex
CREATE INDEX "_SsigaEditors_B_index" ON "_SsigaEditors"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_SsigaModerators_AB_unique" ON "_SsigaModerators"("A", "B");

-- CreateIndex
CREATE INDEX "_SsigaModerators_B_index" ON "_SsigaModerators"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_LunyiririEditors_AB_unique" ON "_LunyiririEditors"("A", "B");

-- CreateIndex
CREATE INDEX "_LunyiririEditors_B_index" ON "_LunyiririEditors"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_LunyiririModerators_AB_unique" ON "_LunyiririModerators"("A", "B");

-- CreateIndex
CREATE INDEX "_LunyiririModerators_B_index" ON "_LunyiririModerators"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_LuggyaEditors_AB_unique" ON "_LuggyaEditors"("A", "B");

-- CreateIndex
CREATE INDEX "_LuggyaEditors_B_index" ON "_LuggyaEditors"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_LuggyaModerators_AB_unique" ON "_LuggyaModerators"("A", "B");

-- CreateIndex
CREATE INDEX "_LuggyaModerators_B_index" ON "_LuggyaModerators"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_EnjuEditors_AB_unique" ON "_EnjuEditors"("A", "B");

-- CreateIndex
CREATE INDEX "_EnjuEditors_B_index" ON "_EnjuEditors"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_EnjuModerators_AB_unique" ON "_EnjuModerators"("A", "B");

-- CreateIndex
CREATE INDEX "_EnjuModerators_B_index" ON "_EnjuModerators"("B");
