import React from "react";

export default function StaffLeaveList({ array_StaffLeave }: any) {
  
  return (
    <>
      {array_StaffLeave &&
        array_StaffLeave.map((staffLeave: any, key: number) => {
          return (<>
          <div>{staffLeave.Leave_ID}</div>
          <div>{staffLeave.Leave_ID}</div>
          <div>{staffLeave.Leave_ID}</div>

          </>)
        })}
    </>
  );
}
