"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/toast/useToast";
import { Siswa } from "@prisma/client";

export default function Search({ siswa }: { siswa: Siswa[] }) {
  const [search, setSearch] = useState("");
  const [searchResult, setSearchResult] = useState<Siswa[]>([]);

  useEffect(() => {
    const filtered = siswa.filter(
      (result) =>
        result.name.toLowerCase().includes(search.toLowerCase()) ||
        result.nisn.startsWith(search)
    );
    setSearchResult(filtered);
  }, [search, siswa]);

  return (
    <div className="w-full space-y-2">
      <Input
        placeholder="Cari siswa"
        onChange={(e) => setSearch(e.target.value)}
        className="w-full"
      />
      {search === "" ? (
        <Button className="w-full hover:bg-primary-container/80 hover:text-primary-container-foreground/80 bg-primary-container text-primary-container-foreground dark:bg-primary dark:text-primary-foreground">
          Cari
        </Button>
      ) : (
        <Card className="flex flex-col items-center max-h-[150px] overflow-y-auto">
          {searchResult.length === 0 ? (
            <p className="text-center my-auto py-4">Tidak ada hasil.</p>
          ) : (
            <div className="flex flex-col w-full gap-2 p-4">
              {searchResult.map((result) => {
                return (
                  <Link
                    href={`/student/${result.id}`}
                    key={result.id}
                    className="flex rounded-md flex-col gap-px text-left px-6 py-1 only:bg-primary/10 hover:bg-primary/10 hover:cursor-pointer"
                  >
                    <p className="max-w-[20ch] text-ellipsis line-clamp-1 font-semibold">
                      {result.name}
                    </p>

                    <p className="text-sm">{result.nisn}</p>
                  </Link>
                );
              })}
            </div>
          )}
        </Card>
      )}
    </div>
  );
}
