"use client";
import React, { useState } from "react";

export default function HolidayRow({ holiday, handle_AddHoliday }: any) {
  const [elementDisable, setElementDisable] = useState(true);
  return (
    <div className="w-full">
      <form action={handle_AddHoliday} method="POST" className="w-full">
        <div className="w-full bg-slate-50 border-b  space-x-4">
          <input
            type="date"
            name="holidayDate"
            id="holidayDate"
            defaultValue={holiday.holidayDate}
            className="w-[200px] rounded-md border-[#ffffff] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none placeholder-gray-300 focus:border-[#6A64F1] focus:shadow-md
          enabled:text-red-300 "
            disabled={elementDisable}
            //   onChange={(e) =>
            //     setEventAddInfo((eventAddInfo: any) => ({
            //       ...eventAddInfo,
            //       End_Date: e.target.value,
            //     }))
            //  }
          />

          <input
            type="text"
            name="holidayTitle"
            id="holidayTitle"
            defaultValue={holiday.holidayTitle}
            className="w-[300px] rounded-md border border-[#ffffff] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none placeholder-gray-300 focus:border-[#6A64F1] focus:shadow-md
          enabled:text-red-300 "
            disabled={elementDisable}
          />

          <button
            type="submit"
            className="w-[200px] h-[50px] text-blue-200  bg-blue-50 enabled:text-red-600
            enabled:hover:bg-red-200"
            disabled={elementDisable}
          >
            Save
          </button>
          <button
            type="button"
            onClick={() => setElementDisable(!elementDisable)}
            className="w-[200px] h-[50px]  text-blue-200 bg-blue-50  "
          >
            {elementDisable ? "Unlock" : "Lock"}
          </button>
        </div>
      </form>
    </div>
  );
}
