import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: any) {
  const body = await request.json();
  const { staffID } = body;

  console.log("body====", body);
  console.log("staffID====", staffID);

  if (!staffID ) {
    return new NextResponse("Missing user id", {
      status: 400,
    });
  }

  const result: any = await prisma.tb_staff_leave.findMany({
    // where: {
    //     staff_o2b2_ID: Number(staffID),
    // },
  });

  // if (result) {
  //   return new NextResponse("User already exists", {
  //     status: 400,
  //   });
  // }

  await prisma.$disconnect();

  //return new Response(JSON.stringify(result));
  return NextResponse.json(result);
}
