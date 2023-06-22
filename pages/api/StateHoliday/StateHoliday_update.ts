import { prisma } from "../prisma";
import moment from "moment";
//import { TS_state_holiday } from "../../lib/TS";
//import { PrismaClient } from "@prisma/client";
//const prisma = new PrismaClient();

export default async function handle(req: any, res: any) {
  await prisma.$connect();

  const { holiday_ID, holidayTitle, holidayDate } = req.body;

  //console.log(holidayTitle);
  const holidayYear = moment(holidayDate).format("YYYY");

  const result = await prisma.tb_state_holiday.update({
    where: {
      holiday_ID: holiday_ID,
    },
    data: {
      holidayTitle: holidayTitle,
      holidayDate: holidayDate,
      holidayYear: holidayYear,
    },
  });

  await prisma.$disconnect();
  res.json(result);
}
