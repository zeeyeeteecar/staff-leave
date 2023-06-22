//import { PrismaClient } from "@prisma/client";
import { prisma } from "../prisma";

export default async function handle(req: any, res: any) {
  //const prisma = new PrismaClient();
  await prisma.$connect();

  const { holiday_ID } = req.body;

  const result = await prisma.tb_state_holiday.delete({
    where: { holiday_ID: Number(holiday_ID) },
  });

  await prisma.$disconnect();
  res.json(result);
}
