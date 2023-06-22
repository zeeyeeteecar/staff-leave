import { prisma } from "../prisma";
//import { PrismaClient } from "@prisma/client";
//const prisma = new PrismaClient();

export default async function handle(req: any, res: any) {
  const result = await prisma.tb_staff_info.findMany({
    select: {
      staff_ID: true,
      userName: true,
      firstName: true,
      lastName: true,
      tb_staff_leave: {
        select: {
          Leave_ID: true,
          staffLeaveType: true,
          staffLeaveDate: true,
        },
      },
    },
  });

  await prisma.$disconnect();
  res.json(result);
}
