import React from "react";
import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";

import StaffLeave_StaffList from "./components/StaffLeave_StaffList";

import {
  fetchData_StaffList,
  fetchData_staffLeave,
  fetchData_IndividualStaffLeave,
} from "@/lib/lib";

export default async function page() {
  const staffList = await fetchData_StaffList();
  const staffLeave = await fetchData_staffLeave();

  async function handle_StaffLeave_Save(leaveInfo: any) {

    "use server";
    //console.log(leaveInfo)
    const res = await prisma.tb_staff_leave.update({
      where: {
        Leave_ID: Number(leaveInfo.Leave_ID),
      },
      data: {
        staffLeaveType: leaveInfo.leaveType,
        staffLeaveDate: new Date(leaveInfo.LeaveDate),
        staffLeaveNote: leaveInfo.leaveNote,
      },
    });
    if (!res) {
      // This will activate the closest `error.js` Error Boundary
      throw new Error("Failed to update data");
    }
    revalidatePath("/staff");

    return res;
  }

  return (
    <div className="w-screen h-screen flex flex-row p-3 space-x-3 bg-slate-200 ">
      <div className="w-full border-blue-300 bg-white border-0 ">
        <StaffLeave_StaffList
          _staffList={staffList}
          _staffLeaveList={staffLeave}
          fetchData_IndividualStaffLeave={fetchData_IndividualStaffLeave}
          handle_StaffLeave_Save={handle_StaffLeave_Save}
        />
      </div>
      {/* <div className="w-1/3 border-2 "></div> */}
    </div>
  );
}
