-- DropIndex
DROP INDEX `Pelanggaran_siswaId_fkey` ON `Pelanggaran`;

-- AlterTable
ALTER TABLE `Siswa` ADD COLUMN `avatar` VARCHAR(191) NULL;

-- AddForeignKey
ALTER TABLE `Pelanggaran` ADD CONSTRAINT `Pelanggaran_siswaId_fkey` FOREIGN KEY (`siswaId`) REFERENCES `Siswa`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
