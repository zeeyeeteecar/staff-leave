import React from "react";

import TopNavBar from "../common/TopNavBar";
import MonthRowBlock from "./MonthRowBlock"

export default function Calendar() {

  return (
    <>
      <div className="bg-white w-screen h-screen flex  item-center justify-center text-sky-500">
        <div id="wrap" className=" w-[1600px] ">
          <TopNavBar />
          <></>
          <MonthRowBlock />
        </div>
      </div>
    </>
  );
}
