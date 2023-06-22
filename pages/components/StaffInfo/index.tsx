import React from "react";
import moment from "moment";
import TopNavBar from "../common/TopNavBar";

import StaffInfo_Row from "./StaffInfo_Row";

export default function Staff() {
  const [ArrayStaffInfoArray, setArrayStaffInfo] = React.useState([{}]);

  const dataFetch = async () => {
    setArrayStaffInfo([]);
    const body = {};
    //console.log("body: ", body);

    const data = await (
      await fetch("/api/StaffInfo/StaffInfo_find", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      })
    ).json();
    console.log(data);
    setArrayStaffInfo(data);
  };

  React.useEffect(() => {
    dataFetch();
  }, []);

  console.log(ArrayStaffInfoArray);
  // const staffInfo = StaffInfo_State()

  return (
    <div>
      <div className="bg-white w-screen h-screen flex  item-center justify-center text-sky-500">
        <div id="wrap" className=" w-[1600px] ">
          <TopNavBar />
          <div className=" w-full border-2 flex flex-1">
            <div className="w-[700px] border-2">
              {ArrayStaffInfoArray &&
                ArrayStaffInfoArray.map((staffInfo: any, key: number) => {
                  return (
                    <div key={key}>
                      <StaffInfo_Row
                        ini_staff_ID={staffInfo.staff_ID}
                        ini_userName={staffInfo.userName}
                        ini_firstName={staffInfo.firstName}
                        ini_lastName={staffInfo.lastName}
                      />
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// const StaffInfo_State=()=>{
//   const [staffInfo, setStaffInfo] = React.useState([{}]);

//   const dataFetch = async () => {
//     setStaffInfo([]);
//     const body = {};
//     //console.log("body: ", body);

//     const data = await (
//       await fetch("/api/StaffInfo/StaffInfo_find", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(body),
//       })
//     ).json();
//     console.log(data);
//     setStaffInfo(data);
//   };

//   React.useEffect(() => {
//     dataFetch();
//   }, []);

//   return staffInfo
// }
