import React, { useEffect, useState, useRef } from "react";
import moment from "moment";
import TopNavBar from "../common/TopNavBar";
import HolidayColumnBlock from "./HolidayColumnBlock";


export default function Index() {
  const [stateHoliday, setStateHoliday] = useState([{}]);

  const dataFetch = async () => {
    setStateHoliday([]);
    const body = {};
    //console.log("body: ", body);

    const data = await (
      await fetch("/api/StateHoliday/StateHoliday_find", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      })
    ).json();
    //console.log(data)
    setStateHoliday(data);
  };

  useEffect(() => {
    dataFetch();
  }, []);

  //console.log(stateHoliday);

  const selectYears = Array(20)
    .fill(0)
    .map((e, i) => 2023 - i);

  return (
    <>
      <div className="bg-gray-100 w-screen h-screen border-2 flex item-center justify-center text-sky-500" >
        <div id="wrap" className=" w-[1600px] h-full border-2 ">
          <TopNavBar />
          <HolidayColumnBlock stateHoliday={stateHoliday} setStateHoliday={setStateHoliday}/>
        </div>
      </div>
    </>
  );
}
