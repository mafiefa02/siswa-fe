import Image from "next/image";

import { DataTable } from "@/components/data-table";
import Container from "@/components/layout/container";
import Navbar from "@/components/layout/navbar";

import { columns } from "./(components)/columns";

interface Siswa {
  id: string;
  name: string;
  avatar: string;
  createdAt: string;
  nisn: string;
  penalty: string[];
  points: number;
}

async function getSiswa(): Promise<Siswa[]> {
  return await fetch(
    "https://64a81f0ddca581464b855760.mockapi.io/api/v1/siswa",
    {
      next: {
        revalidate: 10,
      },
    }
  ).then((res) => res.json());
}

export default async function Home() {
  const siswa = await getSiswa();
  return (
    <main>
      <Container className="py-4">
        <DataTable columns={columns} data={siswa} />
      </Container>
    </main>
  );
}
