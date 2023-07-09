import { NextRequest, NextResponse } from "next/server";

import { prisma } from "@/prisma";

export async function GET(
  req: NextRequest,
  { params }: { params: { siswaId: string } }
) {
  const pelanggaranSiswa = await prisma.pelanggaran.findMany({
    where: {
      siswaId: params.siswaId,
    },
  });
  return NextResponse.json(pelanggaranSiswa, { status: 200 });
}
