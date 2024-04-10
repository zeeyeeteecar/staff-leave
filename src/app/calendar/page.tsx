import React from "react";
import YearBlock from "./components/YearBlock";

const globe_StaffID = 0;

export default function calendar() {
  return (
    <div className="h-screen w-screen bg-slate-300 grid place-items-center">
      <YearBlock />
    </div>
  );
}
