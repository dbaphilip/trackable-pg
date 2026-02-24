/*
  Warnings:

  - Added the required column `user_id` to the `issues` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "issues" ADD COLUMN     "user_id" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "issues" ADD CONSTRAINT "issues_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
