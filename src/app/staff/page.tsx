import React from "react";
import { prisma } from "@/lib/prisma";
import moment from "moment-timezone";

import { fetchData_StaffList } from "@/lib/lib";

export default async function staff() {
  const staffList = await fetchData_StaffList();
  console.log(staffList);

  return (
    <div>
      {/* {JSON.stringify(staffList)} */}
      {staffList &&
        staffList.map((staff: any, key: number) => {
          return (
            <div>
              <li key={key}>
                {staff.userID} - {staff.Fname} - {staff.Lname}
                {/* {staff.tb_staff_leave &&
                  staff.tb_staff_leave.map(
                    (staff_leave: any, key: number) => {
                      return <li>{JSON.stringify(staff_leave)}</li>;
                    }
                  )} */}
              </li>

            </div>
          );
        })}
    </div>
  );
}
