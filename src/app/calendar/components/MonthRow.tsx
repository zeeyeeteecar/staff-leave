import React, { useEffect, useState, useRef } from "react";
import moment from "moment-timezone"

export default function DayOvMonth_Row({
  monthTitle,
  yearTitle,
  allHolidays,
  allStaffLeave,
}: any) {
  console.log("allHolidays", allHolidays);

  const listSpecificMonthDate = (month: number, year: number) =>
    new Array(31)
      .fill("")
      .map((v, i) => new Date(year, month - 1, i + 1))
      .filter((v) => v.getMonth() === month - 1);

  console.log("allHolidays", allHolidays);
  // console.log(
  //   "listSpecificMonthDate, ",
  //   listSpecificMonthDate(monthTitle, yearTitle)
  // );

  return (
    <>
      <div className=" flex flex-1  justify-start  h-[50px] border-0 border-gray-100 m-2 hover:bg-yellow-50 ">
        <div className="w-[50px] border-2 flex items-center justify-center text-blue-600 ">
          {moment(monthTitle, "M").format("MMM")}
        </div>
        {listSpecificMonthDate(monthTitle, yearTitle) &&
          listSpecificMonthDate(monthTitle, yearTitle).map(
            (item: any, key: number) => {
              return (
                <>
                  <div
                    key={key}
                    className={
                      "w-[40px] border border-red-100 m-2 flex items-center justify-center text-slate-400 " +
                      dayCellBgColor(item, allHolidays, allStaffLeave)
                    }
                  >
                    {moment(item).format("DD")}
                  </div>
                </>
              );
            }
          )}
      </div>
    </>
  );
}

////////////////////////////////////////////////////////////////////////////////////////////////

function dayCellBgColor(
  yyyyMMDD: string,
  allHolidays: any,
  allStaffLeave: any
) {
  const formated_yyyyMMDD = moment(yyyyMMDD).utcOffset(0).format("YYYY-MM-DD");

  const if_weekend = () => {
    return moment(yyyyMMDD).day() === 0 || moment(yyyyMMDD).day() === 6;
  };

  const if_holiday = (date: string, arrayObj: any) => {
    return arrayObj.some(function (el: any) {
      return el.holidayDate === date;
    });
  };

  const if_staffleave = (date: string, arrayObj: any) => {
    return arrayObj.some(function (el: any) {
      //console.log("el.staffLeaveDate----",el.staffLeaveDate)
      //doo.getTime() - doo.getTimezoneOffset() * -60000 )
      let el_staffLeaveDate = new Date(el.staffLeaveDate);
      el_staffLeaveDate = new Date(
        el_staffLeaveDate.getTime() +
          Math.abs(el_staffLeaveDate.getTimezoneOffset() * 60000)
      );
      const formated_staffLeaveDate = moment(el_staffLeaveDate).format(
        "YYYY-MM-DD"
      );
      return formated_staffLeaveDate === date;
    });
  };

  let returnValue = "bg-slate-50";

  if (if_weekend()) {
    returnValue = "bg-sky-100";
  }

  if (if_holiday(formated_yyyyMMDD, allHolidays)) {
    returnValue = "bg-red-100";
  }

  if (if_holiday(formated_yyyyMMDD, allHolidays) && if_weekend()) {
    returnValue = "bg-purple-200";
  }

  if (if_staffleave(formated_yyyyMMDD, allStaffLeave)) {
    returnValue = "bg-yellow-300";
  }

  return returnValue;
}
