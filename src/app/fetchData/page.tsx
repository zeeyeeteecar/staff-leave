import React from "react";

async function getData() {
  const res = await fetch(
    "https://www.accessrichmond.org/o2b2/apiStaffInfo/memberInfo.aspx"
  );
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function Page() {
  const data = await getData();

  return (
    <div>
      {data &&
        data.map((item: any, key: number) => {
          return <li key={key}>{JSON.stringify(item)}</li>;
        })}
      {JSON.stringify(data)}
    </div>
  );
}
