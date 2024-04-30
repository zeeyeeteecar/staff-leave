import moment from "moment";
import React from "react";
import MonthRow from "./MonthRow";
import { prisma } from "@/lib/prisma";

///----------------------------------------------------------------
async function dataFetch_Holidays() {
  "use server";
  const result = await prisma.tb_state_holiday.findMany({
    orderBy: {
      holidayDate: "desc",
    },
  });
  await prisma.$disconnect();
  return result;
}

///----------------------------------------------------------------

const dataFetch_StaffLeave = async () => {
  "use server";
  const result = await prisma.tb_staff_leave.findMany({});
  //const result = await prisma.tb_staff_leave.findMany({});
  //await prisma.$disconnect();
  return result;
};

///----------------------------------------------------------------

export default async function MonthBlock() {
  const result_allHolidays = await dataFetch_Holidays();
  const result_allStaffLeave = await dataFetch_StaffLeave();

  const yearTitle = 2023;
  const array_monthNumbers = Array(12)
    .fill(0)
    .map((e, i) => i + 1);

  return (
    <div className="bg-white w-[1800px] h-[900px] flex flex-col flex-1">
      <div className="border-2 w-full flex flex-col flex-1">
        {/* <div>{JSON.stringify(await dataFetch_Holidays())}</div> */}
        {array_monthNumbers &&
          array_monthNumbers.map(async (item: number, key: number) => {
            return (
              <>
                <div></div>
                <MonthRow
                  monthTitle={item}
                  yearTitle={yearTitle}
                  allHolidays={result_allHolidays}
                  //allHolidays={await dataFetch_Holidays()}
                  allStaffLeave={result_allStaffLeave}
                  //allStaffLeave={await dataFetch_StaffLeave()}
                />{" "}
              </>
            );
          })}
      </div>
      <div className="text-red-500 text-2xl w-full bg-white">color</div>
    </div>
  );
}
