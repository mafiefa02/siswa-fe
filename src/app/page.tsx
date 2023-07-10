import Image from "next/image";
import React from "react";

import hero from "@/../public/hero.png";
import Container from "@/components/layout/container";
import { H1, H3 } from "@/components/typography";
import { prisma } from "@/prisma";
import { Siswa } from "@prisma/client";

import Search from "./(components)/search";

async function getSiswa(): Promise<Siswa[]> {
  const siswa = await prisma.siswa.findMany();
  return siswa;
}

async function getAnalytics(): Promise<{
  siswaCount: number;
  pelanggaranCount: number;
  pelanggaranToday: number;
}> {
  const siswaCount = await prisma.siswa.count();
  const pelanggaranCount = await prisma.pelanggaran.count();

  const pelanggaranToday = await prisma.pelanggaran.count({
    where: {
      createdAt: {
        gte: new Date(new Date().setHours(0, 0, 0, 0)),
        lt: new Date(new Date().setHours(23, 59, 59, 999)),
      },
    },
  });
  return {
    siswaCount: siswaCount,
    pelanggaranCount: pelanggaranCount,
    pelanggaranToday: pelanggaranToday,
  };
}

export default async function Home() {
  const siswa = await getSiswa();
  const analytics = await getAnalytics();

  return (
    <>
      <div className="absolute w-full h-screen -z-50">
        <Image
          src={hero}
          alt="hero"
          style={{
            objectFit: "cover",
            zIndex: -50,
            filter: "brightness(35%) grayscale(80%)",
          }}
          fill
        />
        <div className="absolute w-full h-full bg-gradient-to-t from-primary/20 dark:from-background to-transparent" />
      </div>
      <Container className="flex flex-row justify-between w-full max-w-lg items-center">
        <div className="flex mx-auto flex-col justify-center gap-6 items-center h-full text-center">
          <div className="px-8">
            <H1 className="text-primary-container">SANTRIB</H1>
            <H3 className="text-primary-container">Aplikasi Santri Tertib</H3>
            <p className="text-background tracking-tight dark:text-foreground mt-4">
              Madina Boarding School Samarinda
            </p>
          </div>

          <Search siswa={siswa} />
        </div>

        <div className="absolute bottom-0 left-0 mx-auto py-8 flex flex-row items-center w-full justify-evenly">
          <div className="hidden sm:flex flex-row items-center gap-2 text-background dark:text-foreground">
            <p className="text-md md:text-3xl font-semibold">
              {analytics.siswaCount}
            </p>
            <p className="text-sm sm:text-base">Siswa terdaftar</p>
          </div>

          <div className="flex flex-row items-center gap-2 text-background dark:text-foreground">
            <p className="text-md md:text-3xl font-semibold">
              {analytics.pelanggaranCount}
            </p>
            <p className="text-sm sm:text-base">Total pelanggaran</p>
          </div>

          <div className="flex flex-row items-center gap-2 text-background dark:text-foreground">
            <p className="text-md md:text-3xl font-semibold">
              {analytics.pelanggaranToday}
            </p>
            <p className="text-sm sm:text-base">Pelanggaran hari ini</p>
          </div>
        </div>
      </Container>
    </>
  );
}
