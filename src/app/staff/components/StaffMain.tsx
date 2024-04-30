"use client";
import React from "react";

import StaffLeave_StaffList from "./StaffLeave_StaffList";
import StaffLeave_StaffLeave from "./StaffLeave_StaffLeave";

let globe_selectLeaveDate = "";

export default function StaffMain({
  _staffList,
  _staffLeaveList,
  fetchData_IndividualStaffLeave,
  handle_StaffLeave_Save,
}: any) {
  const [
    individualStaffLeaveList,
    setIndividualStaffLeaveList,
  ] = React.useState([]);

  const [staffID, setStaffID] = React.useState("");

  const [selectLeaveDate, setSelectLeaveDate] = React.useState("");

  return (
    <div className="w-full h-full flex flex-row border-blue-300 bg-white border-0 space-x-3 ">
      <div className="w-[400px] h-full">
        <StaffLeave_StaffList
          staffID={staffID}
          setStaffID={setStaffID}
          _staffList={_staffList}
          _staffLeaveList={_staffLeaveList}
          individualStaffLeaveList={individualStaffLeaveList}
          setIndividualStaffLeaveList={setIndividualStaffLeaveList}
          fetchData_IndividualStaffLeave={fetchData_IndividualStaffLeave}
        />
      </div>

      <div
        id="staff-leave-block"
        className="w-[800px] border-0 border-yellow-100 text-slate-600"
      >
        <StaffLeave_StaffLeave
          individualStaffLeaveList={individualStaffLeaveList}
          handle_StaffLeave_Save={handle_StaffLeave_Save}
          staffID={staffID}
          setStaffID={setStaffID}
          selectLeaveDate={selectLeaveDate}
          setSelectLeaveDate={setSelectLeaveDate}
          globe_selectLeaveDate={globe_selectLeaveDate}
        />
      </div>

      {/* <div className="w-1/3">
        <div className="w-[500px] h-full border-4 border-purple-300">
          <StaffLeave_StaffLeave_Month
            staffID={staffID}
            individualStaffLeaveList={individualStaffLeaveList}

            selectLeaveDate = {selectLeaveDate}
                     setSelectLeaveDate = {setSelectLeaveDate}

                     globe_selectLeaveDate={globe_selectLeaveDate}

          />
        </div>
      </div> */}
    </div>
  );
}
