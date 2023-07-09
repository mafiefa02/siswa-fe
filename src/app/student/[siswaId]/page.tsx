import { PlusIcon } from "lucide-react";
import moment from "moment";
import Image from "next/image";
import React from "react";

import details from "@/../public/details.jpg";
import Container from "@/components/layout/container";
import { H1, H3, P } from "@/components/typography";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { getBaseUrl } from "@/lib/getBaseUrl";
import { prisma } from "@/prisma";
import { Pelanggaran, Siswa } from "@prisma/client";

export async function generateStaticParams() {
  const students: Siswa[] = await prisma.siswa.findMany();

  return students.map((student) => ({
    siswaId: student.id,
  }));
}

export default async function SiswaDetails({
  params,
}: {
  params: { siswaId: string };
}) {
  const siswa: Siswa = await fetch(
    `${getBaseUrl()}/api/siswa/${params.siswaId}`,
    {
      method: "GET",
      cache: "no-cache",
    }
  ).then((res) => res.json());

  const pelanggaran: Pelanggaran[] = await fetch(
    `${getBaseUrl()}/api/pelanggaran/${params.siswaId}`,
    {
      method: "GET",
      cache: "no-cache",
    }
  ).then((res) => res.json());

  return (
    <>
      <div className="absolute w-full h-full bg-gradient-to-t from-primary/30 dark:from-background to-transparent -z-50" />
      <Container className="py-12">
        <div className="flex flex-col">
          <H1 className="-mb-5 max-w-md">{siswa.name}</H1>
          <P>NISN {siswa.nisn}</P>
        </div>
        <div className="flex flex-col gap-4 mt-6">
          <H3 className="text-primary">Pelanggaran Siswa</H3>

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
                <TableRow>
                  <TableCell colSpan={3} className="text-right">
                    <P>Total Poin</P>
                  </TableCell>
                  <TableCell className="text-destructive">
                    {siswa.points}
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        </div>
      </Container>
    </>
  );
}
