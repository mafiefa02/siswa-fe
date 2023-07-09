import { NextResponse } from "next/server";

import { prisma } from "@/prisma";

export async function GET() {
  const siswa = await prisma.siswa.findMany().catch((err) => {
    return NextResponse.json(err, { status: 500 });
  });

  return NextResponse.json(siswa, { status: 200 });
}
