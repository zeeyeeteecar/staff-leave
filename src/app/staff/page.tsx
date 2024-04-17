import React from "react";
import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";

import StaffMain from "./components/StaffMain";

import {
  fetchData_StaffList,
  fetchData_staffLeave,
  fetchData_IndividualStaffLeave,
} from "@/lib/lib";

export default async function page() {
  const staffList = await fetchData_StaffList();
  const staffLeave = await fetchData_staffLeave();

  console.log(staffList);

  async function handle_StaffLeave_Save(leaveInfo: any) {
    "use server";
    console.log(leaveInfo);
    const res = await prisma.tb_staff_leave.update({
      where: {
        Leave_ID: Number(leaveInfo.leave_ID),
      },
      data: {
        staffLeaveType: leaveInfo.leaveType,
        staffLeaveDate: new Date(leaveInfo.leaveDate),
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
    <div className="w-screen h-screen bg-white p-6">
      <StaffMain
        _staffList={staffList}
        _staffLeaveList={staffLeave}
        handle_StaffLeave_Save={handle_StaffLeave_Save}
        fetchData_IndividualStaffLeave={fetchData_IndividualStaffLeave}
      />
    </div>
  );
}
