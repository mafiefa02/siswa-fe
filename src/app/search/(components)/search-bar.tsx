"use client";

import { ChevronRight, SearchIcon } from "lucide-react";
import React, { useEffect, useState } from "react";

import { LargeParagraph } from "@/components/typography";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { AvatarImage } from "@radix-ui/react-avatar";

import SiswaDetail from "./siswa-detail";

import type { Pelanggaran, Siswa } from "@prisma/client";
export default function SearchBar({
  siswa,
  pelanggaran,
}: {
  siswa: Siswa[];
  pelanggaran: Pelanggaran[];
}) {
  const [chosenSiswa, setChosenSiswa] = useState<Siswa | null>(null);
  const [filteredSiswa, setFilteredSiswa] = useState<Siswa[]>(siswa);
  const [chosenSiswaPelanggaran, setChosenSiswaPelanggaran] = useState<
    Pelanggaran[]
  >([]);
  const [selected, setSelected] = useState<boolean>(false);

  useEffect(() => {
    if (chosenSiswa) {
      const filtered = pelanggaran.filter((item) => {
        return item.siswaId === chosenSiswa.id;
      });

      setChosenSiswaPelanggaran(filtered);
    }
  }, [chosenSiswa, pelanggaran]);

  return (
    <>
      <div
        className={cn(
          "relative flex flex-col w-full md:w-2/5 md:max-w-[400px] h-full bg-primary/5 shadow-md",
          selected && "hidden md:flex"
        )}
      >
        <div className="sticky flex flex-row gap-4 items-center top-0 p-8">
          <SearchIcon />
          <Input
            placeholder="Cari NISN atau nama lengkap"
            onChange={(e) => {
              const filtered = siswa.filter((item) => {
                return (
                  item.name
                    .toLowerCase()
                    .includes(e.target.value.toLowerCase()) ||
                  item.nisn.toString().includes(e.target.value)
                );
              });

              setFilteredSiswa(filtered);
            }}
          />
        </div>
        <div className="flex flex-col gap-4 last-of-type:pb-8 py-2 px-8 overflow-y-auto">
          {filteredSiswa.map((item) => {
            return (
              <div
                key={item.id}
                className="flex flex-row hover:bg-primary/10 hover:shadow p-2 rounded-md items-center gap-2 group/card hover:cursor-pointer"
                onClick={() => {
                  setSelected(true);
                  setChosenSiswa(item);
                }}
              >
                <Avatar>
                  <AvatarImage src={item.avatar ?? undefined} alt={item.name} />
                  <AvatarFallback>{item.name.split(" ")[0][0]}</AvatarFallback>
                </Avatar>
                <div className="flex flex-col gap-px justify-center">
                  <LargeParagraph className="line-clamp-1 text-ellipsis">
                    {item.name}
                  </LargeParagraph>
                  <p className="text-xs text-foreground/50">NISN {item.nisn}</p>
                </div>
                <ChevronRight className="invisible ml-auto mr-2 group-hover/card:visible group-hover/card:translate-x-2 ease-in transition-all" />
              </div>
            );
          })}
        </div>
      </div>
      {chosenSiswa && (
        <SiswaDetail
          setSelected={setSelected}
          selected={selected}
          siswa={chosenSiswa}
          pelanggaran={chosenSiswaPelanggaran}
        />
      )}
    </>
  );
}
