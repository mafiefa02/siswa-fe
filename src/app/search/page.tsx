import { getBaseUrl } from "@/lib/getBaseUrl";

import SearchBar from "./(components)/search-bar";

import type { Pelanggaran, Siswa } from "@prisma/client";
async function getSiswa(): Promise<Siswa[]> {
  return await fetch(`${getBaseUrl()}/api/siswa`, {
    cache: "no-cache",
  }).then((res) => res.json());
}

async function getPelanggaranSiswa() {
  const res: Pelanggaran[] = await fetch(`${getBaseUrl()}/api/pelanggaran/`, {
    method: "GET",
    cache: "no-cache",
  }).then((res) => res.json());

  return res;
}

export default async function Home() {
  const siswa = await getSiswa();
  const pelanggaranSiswa = await getPelanggaranSiswa();
  return <SearchBar siswa={siswa} pelanggaran={pelanggaranSiswa} />;
}
