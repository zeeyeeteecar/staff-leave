"use client";
import React from "react";
import moment from "moment";
import { stringify } from "querystring";

export default function StaffLeave_StaffLeave_Month({
  staffID,
  individualStaffLeaveList,
}: any) {
  const [selectedYearMonth, setSelectedYearMonth] = React.useState({
    selectedYear: 2023,
    selectedMonth: 4,
  });

  const [
    staffLeave_CalendarMonth,
    setStaffLeave_CalendarMonth,
  ] = React.useState();

  const daysInMonth = new Date(
    selectedYearMonth.selectedYear,
    selectedYearMonth.selectedMonth,
    0
  ).getDate();

  return (
    <div className="w-full h-full border-4 border-orange-400 flex flex-col text-teal-400">
      <div className="w-full h-[50px] border">
        {moment(selectedYearMonth.selectedMonth.toString()).format("MMM")}
        {daysInMonth}
        --{staffID}
      </div>
      <div className="grid grid-cols-7">
        {[...Array(daysInMonth)].map((e, i) => {
          const eachDate =
            selectedYearMonth.selectedYear.toString() +
            "-" +
            selectedYearMonth.selectedMonth.toString() +
            "-" +
            (i + 1).toString();
          return (
            <>
              <DateCell
                _eachDate={eachDate}
                _individualStaffLeaveList={individualStaffLeaveList}
              />
            </>
          );
        })}
      </div>
    </div>
  );
}

function DateCell({ _eachDate, _individualStaffLeaveList }: any) {
  let bgcolor = "";
  var date = new Date(_eachDate);

  if (date.getDay() == 6 || date.getDay() == 0) {
    bgcolor = "bg-blue-100";
  }

  const found = _individualStaffLeaveList.some(
    (el: any) =>
      moment(el.staffLeaveDate).utcOffset(0).format("YYYY-MM-DD") ===
      moment(_eachDate).utcOffset(0).format("YYYY-MM-DD")
  );
  if (found) {
    bgcolor = "bg-yellow-100";
  }

  return (
    <div>
      <div>{JSON.stringify(found)}</div>

      <span
        className={
          " border h-[50px] grid justify-center place-content-center " + bgcolor
        }
      >
        {moment(_eachDate).format("DD")}
      </span>
    </div>
  );
}
