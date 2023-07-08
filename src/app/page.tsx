import { ChevronRight } from "lucide-react";
import { useState } from "react";

import Container from "@/components/layout/container";
import { LargeParagraph } from "@/components/typography";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";

import SearchBar from "./(components)/search-bar";

import type { Siswa } from "@/types/types";

async function getSiswa(): Promise<Siswa[]> {
  return await fetch(
    "https://64a81f0ddca581464b855760.mockapi.io/api/v1/siswa",
    {
      next: {
        revalidate: 60 * 60 * 24, // 1 day
      },
    }
  ).then((res) => res.json());
}

export default async function Home() {
  const siswa = await getSiswa();
  return (
    <>
      <div className="w-full flex flex-row h-[calc(100vh-74.01px)] overflow-hidden">
        <SearchBar siswa={siswa} />
      </div>
    </>
  );
}
