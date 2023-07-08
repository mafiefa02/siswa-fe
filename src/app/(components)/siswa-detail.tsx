import { PlusIcon } from "lucide-react";
import React from "react";

import { DataTable } from "@/components/data-table";
import Container from "@/components/layout/container";
import { H1, H3 } from "@/components/typography";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import type { Siswa } from "@/types/types";
export default function SiswaDetail({ siswa }: { siswa: Siswa }) {
  return (
    <Container className="md:flex flex-col gap-12 hidden py-6">
      <div className="flex flex-row gap-4 items-center">
        <Avatar>
          <AvatarImage src={siswa.avatar} alt={siswa.name} />
          <AvatarFallback>
            {siswa.name.split(" ")[0][0]}
            {siswa.name.split(" ")[1][0]}
          </AvatarFallback>
        </Avatar>
        <div className="flex flex-col gap-px">
          <H3 className="text-primary -mb-2">{siswa.name}</H3>
          <p className="text-foreground/50 text-sm">NISN {siswa.nisn}</p>
        </div>
        <div className="flex flex-col gap-px ml-auto">
          <p className="text-foreground/50 text-sm">Total Poin</p>
          <H3 className="text-primary text-right">{siswa.points * 100}</H3>
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <div className="flex flex-row justify-between items-end">
          <H3 className="text-primary">Pelanggaran Siswa</H3>
          <Button>
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
              <TableRow>
                <TableCell>Lorem ipsum dolor sit amet.</TableCell>
                <TableCell>12/12/2021</TableCell>
                <TableCell>Lorem ipsum dolor sit amet.</TableCell>
                <TableCell className="text-destructive">- 100</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Lorem ipsum dolor sit amet.</TableCell>
                <TableCell>12/12/2021</TableCell>
                <TableCell>Lorem ipsum dolor sit amet.</TableCell>
                <TableCell className="text-destructive">- 100</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Lorem ipsum dolor sit amet.</TableCell>
                <TableCell>12/12/2021</TableCell>
                <TableCell>Lorem ipsum dolor sit amet.</TableCell>
                <TableCell className="text-destructive">- 100</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Lorem ipsum dolor sit amet.</TableCell>
                <TableCell>12/12/2021</TableCell>
                <TableCell>Lorem ipsum dolor sit amet.</TableCell>
                <TableCell className="text-destructive">- 100</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </div>
    </Container>
  );
}
