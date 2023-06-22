import React from "react";
import Link from 'next/link'

const TopNavBar_Menu = [
  {
    title: "Calendar",
    link: "/components/Calendar",
  },
  { title: "Holiday", link: "/components/StateHoliday" },
  { title: "Staff", link: "/components/StaffInfo" },
  { title: "Menu4", link: "/components/Calendar" },
];

export default function TopNavBar() {
  return (
    <div className="border-2 h-[40px] flex flex-1 mx-3 my-3">
      {TopNavBar_Menu &&
        TopNavBar_Menu.map((item: any, key: number) => {
          return (

              <div key={key} className="w-[400px]  border-2 flex items-center justify-center text-2xl hover:bg-sky-100  ">
              <Link href={item.link}>{item.title}</Link>
              </div>

          );
        })}
    </div>
  );
}
