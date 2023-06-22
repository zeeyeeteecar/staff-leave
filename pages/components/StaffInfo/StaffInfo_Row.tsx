import React from "react";
import { BeakerIcon } from "@heroicons/react/24/solid";

//export default function StaffInfo_Row({ staffInfo }: any) {
// const [staff_ID, setStaff_ID] = React.useState(staffInfo.staff_ID);
// const [userName, setUserName] = React.useState(staffInfo.userName);
// const [firstName, setFirstName] = React.useState(staffInfo.firstName);
// const [lastName, setLastName] = React.useState(staffInfo.lastName);

export default function StaffInfo_Row({
  ini_staff_ID,
  ini_userName,
  ini_firstName,
  ini_lastName,
}: any) {
  const [staff_ID, setStaff_ID] = React.useState(ini_staff_ID);
  const [userName, setUserName] = React.useState(ini_userName);
  const [firstName, setFirstName] = React.useState(ini_firstName);
  const [lastName, setLastName] = React.useState(ini_lastName);

  const onClick_SelectStaff = () => {
    alert(
      staff_ID + "===" + userName + "===" + firstName + "===" + lastName + "==="
    );
    //console.log(staffInfo);
   // return <>{JSON.stringify(staffInfo)}</>;
  };

  return (
    <>
      <div className=" flex items-center   hover:bg-yellow-50 space-x-3  ">
        <input
          className="border-[1px] h-[50px]  w-[50px]"
          value={staff_ID ? staff_ID : ""}
        />
        <input
          className="border-[1px] h-[50px]  w-[100px]"
          defaultValue={userName}
          onChange={(e) => setUserName(e.target.value)}
        />
        <input
          className="border-[1px] h-[50px]  w-[100px]"
          defaultValue={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
        <input
          className="border-[1px] h-[50px]  w-[100px]"
          defaultValue={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
        <BeakerIcon
          className="h-8 w-8 text-gray-300 hover:text-blue-300 cursor-pointer"
          onClick={onClick_SelectStaff}
        />
      </div>
    </>
  );
}
