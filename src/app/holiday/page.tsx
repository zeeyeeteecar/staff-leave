import React from "react";
import { prisma } from "@/lib/prisma";
import moment from "moment";
import { revalidatePath } from "next/cache";

import HolidayRow from "./components/HolidayRow";
import AddHoliday from "./components/AddHoliday";

///----------------------------------------------------------------
const dataFetch_Holidays = async () => {
  const result = await prisma.tb_state_holiday.findMany({
    orderBy: {
      holidayDate: "desc",
    },
  });
  await prisma.$disconnect();
  return await result;
};

///----------------------------------------------------------------

async function handle_AddHoliday(data: FormData) {
  "use server";
  const holidayDate = data.get("holidayDate")?.toString();
  const holidayTitle = data.get("holidayTitle")?.toString();

  console.log(data.get("holidayDate"));
  console.log(data.get("holidayTitle"));

  const result = await prisma.tb_state_holiday.create({
    data: {
      holidayDate: holidayDate as string,
      holidayTitle: holidayTitle as string,
      holidayYear: moment(holidayDate).format("YYYY"),
    },
  });
  await prisma.$disconnect();
  revalidatePath("/holiday");
}

///----------------------------------------------------------------

async function handle_DeleteHoliday(holidayID: string) {
  "use server";

  const result = await prisma.tb_state_holiday.delete({
    where: {
      holiday_ID: Number(holidayID),
    },
  });

  await prisma.$disconnect();
  revalidatePath("/holiday");

  return result;
}

///----------------------------------------------------------------

export default async function page() {
  return (
    <div className="w-screen h-screen bg-slate-400 grid  place-items-center ">
      <div className="w-[1200px] h-[800px] flex flex-col p-2 bg-white">
        <div>
          <AddHoliday handle_AddHoliday={handle_AddHoliday} />
        </div>
        <div className="w-full overflow-y-auto space-y-2">
          {(await dataFetch_Holidays()) &&
            (await dataFetch_Holidays()).map((holiday: any, key: number) => {
              return (
                <>
                  <HolidayRow
                    holiday={holiday}
                    handle_AddHoliday={handle_AddHoliday}
                    handle_DeleteHoliday={handle_DeleteHoliday}
                  />
                </>
              );
            })}
        </div>
      </div>
    </div>
  );
}
