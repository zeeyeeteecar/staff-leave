import React from "react";
import Calendar from "./components/Calendar";
import TopNavBar from "./components/common/TopNavBar";

export default function index() {
  return (
    <>
      <div
        id="body"
        className="bg-gray-500 w-screen h-screen flex  item-center justify-center"
      >
        <div id="wrap" className=" w-[1600px] ">
          <TopNavBar />
        </div>
      </div>
    </>
  );
}
