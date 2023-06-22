import { prisma } from "../prisma";
//import { PrismaClient } from "@prisma/client";
//const prisma = new PrismaClient();

export default async function handle(req: any, res: any) {
  const result = await prisma.tb_state_holiday.findMany({
    orderBy: {
      holidayDate: "desc",
    },
  });

  await prisma.$disconnect();
  res.json(result);
}
