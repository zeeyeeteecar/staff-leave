import React from "react";
import { prisma } from "@/lib/prisma";



export async function fetchData_IndividualStaffLeave(staffID: string) {
  "use server";
  const res = await prisma.tb_staff_leave.findMany({
    where: {
      staff_o2b2_ID: Number(staffID),
    },
  });
  if (!res) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res;
}

export async function fetchData_staffLeave() {
  "use server";
  const res = await prisma.tb_staff_leave.findMany({});
  if (!res) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }
  return res;
}

//-----------------------------------------------------------------------------------------

export async function fetchData_StaffList() {
  "use server";
  const res = await fetch(
    "https://www.accessrichmond.org/o2b2/apiStaffInfo/memberInfo.aspx"
  );
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}


//-----------------------------------------------------------------------------------------

export async function fetchData_HolidayList() {
  "use server";
  const res = await prisma.tb_state_holiday.findMany({});

  
  if (!res) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }
  return res;
}



