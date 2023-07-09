import { NextRequest, NextResponse } from "next/server";

import { prisma } from "@/prisma";

export async function GET(
  req: NextRequest,
  { params }: { params: { siswaId: string } }
) {
  const siswa = await prisma.siswa.findUnique({
    where: {
      id: params.siswaId,
    },
  });

  return NextResponse.json(siswa, { status: 200 });
}
