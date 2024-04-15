"use client";
import React from "react";
import { prisma } from "@/lib/prisma";
import moment from "moment-timezone";
import { IoAddCircleOutline } from "react-icons/io5";
import StaffLeave_StaffLeave from "./StaffLeave_StaffLeave";
import StaffLeave_StaffLeave_Month from "./StaffLeave_StaffLeave_Month";

export default function staff({
  _staffList,
  _staffLeaveList,
  fetchData_IndividualStaffLeave,
  handle_StaffLeave_Save,
  fetchData_StaffLeave_CalendarMonth,
}: any) {
  const [
    individualStaffLeaveList,
    setIndividualStaffLeaveList,
  ] = React.useState([]);

  const [staffID, setStaffID] = React.useState("");

  const [disableAddLeave, setDisableAddLeave] = React.useState(true);
  //const staffLeave_List = await fetchData_staffLeave();

  async function handleClick_Select_Staff(e: any) {
    setIndividualStaffLeaveList([]);
    setStaffID("");
    setDisableAddLeave(true);
    const userID: string = e.target.value.toString();
    const fetch_individualStaffLeave = await fetchData_IndividualStaffLeave(
      userID
    );

    setIndividualStaffLeaveList(fetch_individualStaffLeave);
    //console.log(fetch_individualStaffLeave);
    //console.log("userID--", userID);
    // const individual_StaffLeave = _staffLeaveList.filter(
    //   (staff: any) =>
    //     (staff.staff_o2b2_ID && staff.staff_o2b2_ID.toString()) === userID
    // );
    //setIndividualStaffLeave(individual_StaffLeave);
  }

  // const [staffID, setStaffID] = React.useState("");
  // function handleClick_Select_Staff(e: any) {
  //   setStaffID(e.target.value.toString());
  // }

  return (
    <div className="w-full h-full flex flex-row flex-1 border-4 border-red-300 p-2 space-x-2">
      <div
        id="staff-list-block"
        className="w-[400px] h-full overflow-y-auto border-2 border-blue-300 "
      >
        {/* {JSON.stringify(staffLeave_List)} */}
        {_staffList &&
          _staffList.map((staff: any, key: number) => {
            // const filter_StaffLeave = staffLeave_List.filter(
            //   (staffLeave) => staffLeave.staff_o2b2_ID.toString() === staff.userID
            // );

            return (
              <div key={key} className="flex flex-col gap-0 p-2">
                <label>
                  <input
                    type="radio"
                    value={staff.userID}
                    className="peer hidden"
                    name="framework"
                    onClick={(e) => handleClick_Select_Staff(e)}
                  />

                  <div
                    className="flex flex-row h-full  hover:bg-red-50 px-4  space-x-2 py-2 border-2 bg-slate-100 
                  rounded-lg cursor-pointer text-sm border-gray-200 group peer-checked:border-red-500 peer-checked:bg-red-100"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="w-9 h-9 float-left text-red-600 invisible group-[.peer:checked+&]:visible"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>

                    <div className=" h-full float-left m-auto font-medium text-gray-700 border-0 border-red-300">
                      {staff.userID} - {staff.Fname} - {staff.Lname} -{}
                    </div>

                    <div className="border-0 border-red-300 grow flow-root justify-center  ">
                      <button
                        type="button"
                        value={staff.userID.toString()}
                        className="w-[30px] h-[30px] float-end  text-red-600 invisible group-[.peer:checked+&]:visible "
                        onClick={(e) =>
                          alert("add new" + e.currentTarget.value)
                        }
                      >
                        <IoAddCircleOutline className="w-8 h-8" />
                      </button>
                    </div>
                  </div>
                </label>
              </div>
            );
          })}
      </div>

      <div
        id="staff-leave-block"
        className="w-[500px] border-4 border-yellow-100 text-slate-600  "
      >
        <StaffLeave_StaffLeave
          individualStaffLeaveList={individualStaffLeaveList}
          handle_StaffLeave_Save={handle_StaffLeave_Save}
          staffID={staffID}
          setStaffID={setStaffID}
        />
      </div>
      <div className="w-[500px] h-full border-4 border-purple-300">
        <StaffLeave_StaffLeave_Month
          staffID={staffID}
          individualStaffLeaveList={individualStaffLeaveList}
        />
      </div>
    </div>
  );
}
