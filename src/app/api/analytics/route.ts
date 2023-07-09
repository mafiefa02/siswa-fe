import { NextResponse } from "next/server";

import { prisma } from "@/prisma";

export async function GET() {
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

  return NextResponse.json(
    {
      siswaCount: siswaCount,
      pelanggaranCount: pelanggaranCount,
      pelanggaranToday: pelanggaranToday,
    },
    { status: 200 }
  );
}
