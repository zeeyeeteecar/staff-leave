"use client";
import React from "react";
import moment from "moment";
import { stringify } from "querystring";

export default function StaffLeave_StaffLeave_Modal_SelectDate({
  handleOnClose,
  visible,
  staffID,
  individualStaffLeaveList,
  selectLeaveDate,
  setSelectLeaveDate,
}: any) {
  if (!visible) return null;

  const [selectedYearMonth, setSelectedYearMonth] = React.useState({
    selectedYear: new Date().getFullYear(),
    selectedMonth: new Date().getMonth()+1,
  });

  const [
    staffLeave_CalendarMonth,
    setStaffLeave_CalendarMonth,
  ] = React.useState();

  const totalDaysInMonth = new Date(
    selectedYearMonth.selectedYear,
    selectedYearMonth.selectedMonth,
    0
  ).getDate();

  

  function handle_selectLeaveDate(selectedDate: string) {
    console.log("selectedDate:;;;", selectedDate);

    setSelectLeaveDate(selectedDate);
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-20 backdrop-blur-none flex items-center justify-center">
      <div className="w-[1000px] h-[800px] border bg-white">
        <button onClick={handleOnClose} className="h-[30px] w-[50px]">
          X
        </button>
        <div className="w-full h-[50px] border">
          {selectedYearMonth.selectedYear.toString()} - 
          {moment(selectedYearMonth.selectedMonth.toString()).format("MMM")} == 
          total days {totalDaysInMonth}
          -- staffID {staffID} 
        </div>
        <div className="grid grid-cols-14">
          {[...Array(totalDaysInMonth)].map((e, i) => {
            const eachDate =
              selectedYearMonth.selectedYear.toString() +
              "-" +
              selectedYearMonth.selectedMonth.toString() +
              "-" +
              (i + 1).toString();

            return (
              <div className="p-3">
                <DateCell
                  _eachDate={eachDate}
                  _individualStaffLeaveList={individualStaffLeaveList}
                  handle_selectLeaveDate={handle_selectLeaveDate}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

function DateCell({
  _eachDate,
  _individualStaffLeaveList,
  handle_selectLeaveDate,
}: any) {
  let bgcolor = "";
  let rounded = "";

  var date = new Date(_eachDate);

  if (date.getDay() == 6 || date.getDay() == 0) {
    bgcolor = "bg-blue-100";
  }

  //================================

  const found_vacation = _individualStaffLeaveList.some(
    (el: any) =>
      moment(el.staffLeaveDate).utcOffset(0).format("YYYY-MM-DD") ===
        moment(_eachDate).utcOffset(0).format("YYYY-MM-DD") &&
      el.staffLeaveType === "Vacation"
  );

  if (found_vacation) {
    bgcolor = "bg-yellow-100";
    rounded = "rounded-full";
  }

  //===================================

  const found_sick = _individualStaffLeaveList.some(
    (el: any) =>
      moment(el.staffLeaveDate).utcOffset(0).format("YYYY-MM-DD") ===
        moment(_eachDate).utcOffset(0).format("YYYY-MM-DD") &&
      el.staffLeaveType === "Sick"
  );

  if (found_sick) {
    bgcolor = "bg-red-100";
    rounded = "rounded-full";
  }

  //===================================

  return (
    <div>
      {/* <div>{JSON.stringify(found)}</div> */}

      <span
        className={
          " border h-[50px] w-[50px] grid justify-center place-content-center " +
          bgcolor +
          " " +
          rounded
        }
      >
        <button
          type="button"
          value={moment(_eachDate).format("YYYY-MM-DD")}
          onClick={(e) => handle_selectLeaveDate(e.currentTarget.value)}
        >
          {moment(_eachDate).format("DD")}
        </button>
      </span>
    </div>
  );
}
