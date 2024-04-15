"use client";
import React from "react";
import moment from "moment";

export default function StaffLeave_StaffLeave_Month({ staffID }: any) {
  const [selectedYearMonth, setSelectedYearMonth] = React.useState({
    selectedYear: 2024,
    selectMonth: 4,
  });

  const daysInMonth = new Date(
    selectedYearMonth.selectedYear,
    selectedYearMonth.selectMonth,
    0
  ).getDate();

  return (
    <div className="w-full h-full border-4 border-orange-400 flex flex-col text-teal-400">
      <div className="w-full h-[50px] border">
        {moment("7").format("MMM")}
        {daysInMonth}
        --{staffID}
      </div>
      <div className="grid grid-cols-7">
        {[...Array(daysInMonth)].map((e, i) => {

          const eachDate =
            selectedYearMonth.selectedYear.toString() +
            "-" +
            selectedYearMonth.selectMonth.toString() +
            "-" +
            (i+1).toString();
          return (
            <>
              <DateCell _eachDate={eachDate} />
            </>
          );
        })}
      </div>
    </div>
  );
}

function DateCell({ _eachDate }: any) {
  let bgcolor = "";
  var date = new Date(_eachDate);
  if (date.getDay() == 6 || date.getDay() == 0) {
    bgcolor = "bg-blue-100";
  }
  
  return (
    <span className={" border h-[50px] grid justify-center place-content-center " + bgcolor}>
      {moment(_eachDate).format("DD")}
    </span>
  );
}
