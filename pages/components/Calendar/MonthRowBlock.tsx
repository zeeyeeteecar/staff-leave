import React, { useEffect, useState, useRef } from "react";
import moment from "moment";

import MonthRow from "./MonthRow";

export default function YearBlock() {
  const yearTitle = 2023;

  const array_monthNumbers = Array(12)
    .fill(0)
    .map((e, i) => i + 1);

  ///////////// get the Holiday array///////////
  const [allHolidays, setAllHolidays] = useState([{}]);

  const dataFetch_Holiday = async () => {
    setAllHolidays([]);
    const body = {};
    //console.log("body: ", body);

    const data = await (
      await fetch("/api/StateHoliday/StateHoliday_find", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      })
    ).json();
    console.log("allHolidays==", data);
    setAllHolidays(data);
  };

  useEffect(() => {
    dataFetch_Holiday();
  }, []);
  //////////////////////////////////////

  ///////////// get the Staff vacation Date array///////////
  const [allStaffLeave, setAllStaffLeave] = useState([{}]);

  const dataFetch_StaffLeave = async () => {
    setAllStaffLeave([]);
    const body = {};
    //console.log("body: ", body);

    const data = await (
      await fetch("/api/StaffLeave/StaffLeave_find", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      })
    ).json();
    console.log(data);
    setAllStaffLeave(data);
  };

  useEffect(() => {
    dataFetch_StaffLeave();
  }, []);
  //console.log("allStaffLeave", allStaffLeave)
  //////////////////////////////////////

  return (
    <>
      {array_monthNumbers &&
        array_monthNumbers.map((item: number, key: number) => {
          return (
            <>
              <MonthRow
                monthTitle={item}
                yearTitle={yearTitle}
                allHolidays={allHolidays}
                allStaffLeave={allStaffLeave}
              />
            </>
          );
        })}
    </>
  );
}
