"use client";
import React from "react";
import moment from "moment-timezone";
import toast, { Toaster } from "react-hot-toast";

import { data_Staff_Leave_Type } from "@/lib/data";

const notify = (toastMsg: string) => toast.success(toastMsg);

export default function StaffLeave_StaffLeave({
  individualStaffLeaveList,
  handle_StaffLeave_Save,
}: any) {
  // const [leaveInfo, setLeaveInfo] = React.useState({
  //   Leave_ID: individualStaffLeave.Leave_ID || undefined,
  //   staff_o2b2_ID: individualStaffLeave.staff_o2b2_ID,
  //   staffLeaveType: individualStaffLeave.staffLeaveType,
  //   staffLeaveDate: individualStaffLeave.staffLeaveDate,
  // });

  //console.log("_leave--", individualStaffLeaveList);

  async function handle_SaveLeave(data: FormData) {
    // console.log(data.get("leaveType"));
    // console.log(data.get("LeaveDate"));
    // console.log(data.get("leaveNote"));
    // console.log(data.get("Leave_ID"));
    const Leave_ID: string | undefined = data.get("Leave_ID")?.toString();
    const leaveType: string | undefined = data.get("leaveType")?.toString();
    const LeaveDate: string | undefined = data.get("LeaveDate")?.toString();
    const leaveNote: string | undefined = data.get("leaveNote")?.toString();

    if (!leaveType) {
      alert("Leave Type cannot be blank");
    }

    const leaveInfo = {
      Leave_ID: Leave_ID,
      leaveType: leaveType,
      LeaveDate: LeaveDate,
      leaveNote: leaveNote,
    };

    const res = await handle_StaffLeave_Save(leaveInfo);

    if (res) {
      notify("updated successfully");
    }
  }

  return (
    <div className="h-full flex flex-col space-y-2 border-8">
      <div>
        <Toaster />
      </div>

      {individualStaffLeaveList &&
        individualStaffLeaveList.map((leaveInfo: any, key: number) => {
          return (
            <div className="flex flex-row space-x-2">
              <form action={handle_SaveLeave} method="POST">
                <div className="border-0 space-x-2 h-[50px] flex flex-row">
                  <Dropdown_StaffLeave
                    data_Staff_Leave_Type={data_Staff_Leave_Type}
                    leaveInfo={leaveInfo}
                    // setLeaveInfo={setLeaveInfo}
                  />

                  <input
                    type="date"
                    name="LeaveDate"
                    id="LeaveDate"
                    defaultValue={
                      leaveInfo.staffLeaveDate &&
                      moment(leaveInfo.staffLeaveDate)
                        .utcOffset(0)
                        .format("YYYY-MM-DD")
                    }
                    // onChange={(e) =>
                    //   setLeaveInfo((prevState) => ({
                    //     ...prevState,
                    //     staffLeaveDate: e.target.value,
                    //   }))
                    //}
                    className="w-[200px] rounded-md border border-slate-300 bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none placeholder-gray-300 focus:border-[#6A64F1] focus:shadow-md
                                 enabled:text-red-300 "
                  />

                  <input
                    type="text"
                    name="leaveNote"
                    id="leaveNote"
                    defaultValue={leaveInfo && leaveInfo.staffLeaveNote}
                    // onChange={(e) =>
                    //   setLeaveInfo((prevState) => ({
                    //     ...prevState,
                    //     staffLeaveType: e.target.value,
                    //   }))
                    // }
                    className="w-[200px] rounded-md border border-slate-300 bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none placeholder-gray-300 focus:border-[#6A64F1] focus:shadow-md         enabled:text-red-300 "
                  />

                  <button
                    id="Leave_ID"
                    name="Leave_ID"
                    type="submit"
                    value={leaveInfo.Leave_ID}
                    className=" bg-slate-50 text-slate-100 py-2 px-4 rounded inline-flex items-center hover:border-slate-400 hover:border"
                  >
                    <svg
                      className="w-5 h-5  fill-slate-300 hover:fill-slate-500"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" />
                    </svg>
                  </button>
                </div>
              </form>
            </div>
          );
        })}
    </div>
  );
}

function Dropdown_StaffLeave({
  data_Staff_Leave_Type,
  leaveInfo,
}: // setLeaveInfo,
any) {
  return (
    <div className="relative line-flex w-[200px] h-[50px] border-0">
      <svg
        className="w-4 h-4 absolute top-0 right-0 m-4 pointer-events-none"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 412 232"
      >
        <path
          d="M206 171.144L42.678 7.822c-9.763-9.763-25.592-9.763-35.355 0-9.763 9.764-9.763 25.592 0 35.355l181 181c4.88 4.882 11.279 7.323 17.677 7.323s12.796-2.441 17.678-7.322l181-181c9.763-9.764 9.763-25.592 0-35.355-9.763-9.763-25.592-9.763-35.355 0L206 171.144z"
          fill="#648299"
          fill-rule="nonzero"
        />
      </svg>
      <select
        id="leaveType"
        name="leaveType"
        defaultValue={leaveInfo.staffLeaveType}
        className="h-[50px] w-full border border-gray-300 rounded-lg text-gray-600 pl-5 pr-10 bg-white hover:border-gray-400 focus:outline-none appearance-none"
        // onChange={(e) =>
        //   setLeaveInfo((prevState: any) => ({
        //     ...prevState,
        //     staffLeaveType: e.target.value,
        //   }))
        // }
      >
        <option disabled className="h-[50px]  w-full">
          Choose a color
        </option>
        {data_Staff_Leave_Type.map((typeItem: any, key: number) => {
          const itemOption = typeItem.leaveTypeTitle;
          // const ifSelected = itemOptionType === selectedType ? true : false;
          return (
            <>
              <option
                className="h-[50px] bg-blue-100  w-full"
                value={itemOption}
              >
                {itemOption}
              </option>
            </>
          );
        })}
      </select>
    </div>
  );
}
