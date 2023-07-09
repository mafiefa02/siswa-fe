import { NextRequest, NextResponse } from "next/server";

import { prisma } from "@/prisma";

export async function GET() {
  const pelanggaran = await prisma.pelanggaran.findMany({
    orderBy: {
      createdAt: "asc",
    },
  });

  return NextResponse.json(pelanggaran, { status: 200 });
}

export async function POST(req: NextRequest) {
  const body = await req.json();

  const pelanggaran = await prisma.pelanggaran
    .create({
      data: body,
    })
    .catch((err) => {
      return NextResponse.json(err, { status: 500 });
    });

  return NextResponse.json(pelanggaran, { status: 200 });
}
