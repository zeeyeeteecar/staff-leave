import React from "react";
import { prisma } from "@/lib/prisma";
import moment from "moment-timezone";

export default async function staff() {
  const staffInforList = await prisma.tb_staff_info.findMany({
    select: {
      staff_ID: true,
      userName: true,
      firstName: true,
      lastName: true,
      staffO2B2_ID: true,

    },
  });

  return (
    <div>
      {staffInforList &&
        staffInforList.map((staffInfo: any, key: number) => {
          return (
            <div>
              <li key={key}>
                {JSON.stringify(staffInfo)}
                {staffInfo.tb_staff_leave &&
                  staffInfo.tb_staff_leave.map(
                    (staff_leave: any, key: number) => {
                      return <li>{JSON.stringify(staff_leave)}</li>;
                    }
                  )}
              </li>
              <div>=========</div>
            </div>
          );
        })}
    </div>
  );
}
