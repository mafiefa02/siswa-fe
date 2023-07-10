import { prisma } from "@/prisma";

import SearchBar from "./(components)/search-bar";

import type { Pelanggaran, Siswa } from "@prisma/client";
async function getSiswa(): Promise<Siswa[]> {
  const siswa = await prisma.siswa.findMany();
  return siswa;
}

async function getPelanggaranSiswa() {
  const pelanggaran = await prisma.pelanggaran.findMany({
    orderBy: {
      createdAt: "asc",
    },
  });

  return pelanggaran;
}

export default async function Home() {
  const siswa = await getSiswa();
  const pelanggaranSiswa = await getPelanggaranSiswa();
  return <SearchBar siswa={siswa} pelanggaran={pelanggaranSiswa} />;
}
