//import { PrismaClient } from "@prisma/client";
import { prisma } from "../prisma";

export default async function handle(req: any, res: any) {
  //const prisma = new PrismaClient();
  await prisma.$connect();

  const { holidayTitle, holidayDate, holidayYear } = req.body;

  const result = await prisma.tb_state_holiday.create({
    data: {
      holidayTitle: holidayTitle,
      holidayDate: holidayDate,
      holidayYear: holidayYear,
    },
  });

  await prisma.$disconnect();
  res.json(result);
}
