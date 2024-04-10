"use client";
import React from "react";


export default function AddHoliday({ handle_AddHoliday }: any) {
  function handle_AddHoliday_local(data: FormData) {
    const holidayDate = data.get("holidayDate");
    const holidayTitle = data.get("holidayTitle");

    if (!holidayDate) {
      alert("input holidayDate");
      return;
    }

    if (!holidayTitle) {
      alert("input holidayTitle");
      return;
    }

    handle_AddHoliday(data);

  }

  return (
    <div className="w-full">
      <form action={handle_AddHoliday_local} method="POST" className="w-full">
        <div className="w-full bg-slate-50 border-b  space-x-4">
          <input
            type="date"
            name="holidayDate"
            id="holidayDate"
            className="w-[200px] rounded-md border-[#ffffff] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none placeholder-gray-300 focus:border-[#6A64F1] focus:shadow-md
          enabled:text-red-300 "

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
            className="w-[300px] rounded-md border border-[#ffffff] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none placeholder-gray-300 focus:border-[#6A64F1] focus:shadow-md
          enabled:text-red-300 "
          />

          <button
            type="submit"
            className="w-[200px] h-[50px] text-blue-200  bg-blue-50 enabled:text-red-600"
          >
            Add New Holiday
          </button>
        </div>
      </form>
    </div>
  );
}
