import { ChevronLeft, PlusIcon } from "lucide-react";
import moment from "moment";
import React from "react";

import Container from "@/components/layout/container";
import { H3, P } from "@/components/typography";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { cn } from "@/lib/utils";

import type { Siswa, Pelanggaran } from "@prisma/client";
export default function SiswaDetail({
  siswa,
  pelanggaran,
  setSelected,
  selected,
}: {
  siswa: Siswa;
  pelanggaran: Pelanggaran[];
  setSelected: React.Dispatch<React.SetStateAction<boolean>>;
  selected: boolean;
}) {
  return (
    <Container
      className={cn(
        "md:flex hidden flex-col gap-12 py-6 z-20",
        selected && "flex w-full"
      )}
    >
      <Button
        variant={"link"}
        className={cn("self-start group/back md:hidden")}
        onClick={() => setSelected(false)}
      >
        <ChevronLeft className="mr-2 group-hover/back:-translate-x-2 transition-all ease-out" />
        Kembali
      </Button>
      <div className="flex flex-row gap-4 items-center">
        <Avatar>
          <AvatarImage src={siswa.avatar ?? undefined} alt={siswa.name} />
          <AvatarFallback>{siswa.name.split(" ")[0][0]}</AvatarFallback>
        </Avatar>
        <div className="flex flex-col gap-px">
          <H3 className="text-primary">{siswa.name}</H3>
          <p className="text-foreground/50 text-sm">NISN {siswa.nisn}</p>
          <p className="text-foreground/50 text-sm md:hidden">
            Total poin: <span className="text-primary">{siswa.points}</span>
          </p>
        </div>
        <div className="hidden md:flex flex-col gap-px ml-auto">
          <p className="text-foreground/50 text-sm">Total Poin</p>
          <H3 className="text-primary md:text-right">{siswa.points}</H3>
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end">
          <H3 className="text-primary md:mb-0 mb-2">Pelanggaran</H3>
          <Button className="md:w-max w-full">
            <PlusIcon className="mr-2" />
            Tambah Pelanggaran
          </Button>
        </div>
        <div className="rounded-md border">
          <Table>
            <TableHeader>
              <TableRow className="bg-foreground/5 hover:bg-foreground/10">
                <TableHead>Pelanggaran</TableHead>
                <TableHead>Tanggal</TableHead>
                <TableHead>Keterangan</TableHead>
                <TableHead className="w-[100px]">Poin</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {pelanggaran.length !== 0 &&
                pelanggaran.map((pelanggaran) => {
                  return (
                    <TableRow key={pelanggaran.id}>
                      <TableCell>{pelanggaran.name}</TableCell>
                      <TableCell>
                        {moment(pelanggaran.createdAt).format("LL")}
                      </TableCell>
                      <TableCell>{pelanggaran.reason}</TableCell>
                      <TableCell className="text-destructive">
                        - {pelanggaran.points}
                      </TableCell>
                    </TableRow>
                  );
                })}
              {pelanggaran.length === 0 && (
                <TableRow>
                  <TableCell colSpan={4}>
                    <P className="text-center">Tidak ada pelanggaran.</P>
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>
      </div>
    </Container>
  );
}
