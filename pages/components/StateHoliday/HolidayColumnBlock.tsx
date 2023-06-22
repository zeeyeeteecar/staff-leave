import React, { useEffect, useState, useRef } from "react";
import Datepicker from "react-tailwindcss-datepicker";

import { IconButton } from "@material-tailwind/react";
import lodash from "lodash";

export default function HolidayColumnBlock({
  stateHoliday,
  setStateHoliday,
}: any) {
  console.log(stateHoliday);

  const array_groupBy_stateholiday = lodash(stateHoliday)
    .groupBy((item: any) => item.holidayYear)
    .sortBy((holidayYear) => stateHoliday.indexOf(holidayYear[0]))
    .value();

  const array_groupBy_sorted_stateholiday = Object.values(
    array_groupBy_stateholiday
  );

  console.log(array_groupBy_sorted_stateholiday);

  return (
    <>
      <div className=" w-full  border-1 flex flex-1 space-x-3 px-3 py-3 ">
        {array_groupBy_sorted_stateholiday &&
          array_groupBy_sorted_stateholiday.map(
            (EachGroupHolidayColumn: any, key: number) => {
              return (
                <div key={key}>
                  <HolidayColumnByYear
                    EachGroupHolidayColumn={EachGroupHolidayColumn}
                    stateHoliday={stateHoliday}
                    setStateHoliday={setStateHoliday}
                  />
                </div>
              );
            }
          )}
      </div>
    </>
  );
}

const HolidayColumnByYear = ({
  EachGroupHolidayColumn,
  stateHoliday,
  setStateHoliday,
}: any) => {
  return (
    <div className="w-[500px] border-2 border-gray-50">
      {EachGroupHolidayColumn &&
        EachGroupHolidayColumn.map((eachHoliday: any, key: number) => {
          return (
            <div
              key={key}
              className=" w-full h-[50px] flex items-center  px-1 py-0 hover:bg-white border-0 "
            >
              <div className="w-[30px]">{eachHoliday.holiday_ID}</div>
              <div className="w-[100px] border-0">
                {eachHoliday.holidayDate}
              </div>
              <div className="flex-1 border-0">{eachHoliday.holidayTitle}</div>

              <IconButton_Delete holiday_ID={eachHoliday.holiday_ID} />
              <IconButton_Update holiday_ID={eachHoliday.holiday_ID} />
              <Update_modal
                eachHoliday={eachHoliday}
                stateHoliday={stateHoliday}
                setStateHoliday={setStateHoliday}
              />
            </div>
          );
        })}
    </div>
  );
};

const IconButton_Delete = ({ holiday_ID }: any) => {
  return (
    <button
      type="button"
      className=" border-0 text-blue-700 border-blue-700 hover:bg-blue-700 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-1 text-center inline-flex items-center dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:focus:ring-blue-800 dark:hover:bg-blue-500"
      onClick={() => {
        alert(holiday_ID);
      }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        className="w-5 h-5"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5m6 4.125l2.25 2.25m0 0l2.25 2.25M12 13.875l2.25-2.25M12 13.875l-2.25 2.25M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z"
        />
      </svg>

      <span className="sr-only">Icon description</span>
    </button>
  );
};

const IconButton_Update = ({ holiday_ID }: any) => {
  return (
    <button
      type="button"
      className=" border-0 text-blue-700 border-blue-700 hover:bg-blue-700 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-1 text-center inline-flex items-center dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:focus:ring-blue-800 dark:hover:bg-blue-500"
      onClick={() => {
        alert(holiday_ID);
      }}
    >
      <svg
        className="h-5 w-5 text-red-500"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
        />
      </svg>

      <span className="sr-only">Icon description</span>
    </button>
  );
};

const Update_modal = ({ eachHoliday, stateHoliday, setStateHoliday }: any) => {
  const [holiday_ID, setHoliday_ID] = useState(eachHoliday.holiday_ID);
  const [holidayTitle, setHolidayTitle] = useState(eachHoliday.holidayTitle);

  //////// Date Picker
  let date = new Date(eachHoliday.holidayDate);
  date = new Date(date.getTime() + date.getTimezoneOffset() * 60000);
  const [holidayDate, setHolidayDate] = useState<any>({
    // startDate: new Date(),
    startDate: new Date(date),
    endDate: new Date().setMonth(11),
  });
  ////////////////// Date Picker===========

  const onChange_HolidayDate = (newValue: any) => {
    console.log("newValue:", newValue);
    setHolidayDate(newValue);
  };

  const onClick_UpdateStateHoliday = async () => {
    try {
      const body = {
        holiday_ID: holiday_ID,
        holidayTitle: holidayTitle,
        holidayDate: holidayDate.startDate,
        holidayYear: "2000",
      };
      console.log(body);
      const response = await fetch("/api/StateHoliday/StateHoliday_update", {
        method: "POST", // or 'PUT'
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
    } catch (error) {
      console.log(error);
    }

    const body = {};
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

  const [showModal, setShowModal] = React.useState(false);
  return (
    <>
      <button
        type="button"
        className=" border-0 text-blue-700 border-blue-700 hover:bg-blue-700 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-1 text-center inline-flex items-center dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:focus:ring-blue-800 dark:hover:bg-blue-500"
        onClick={() => setShowModal(true)}
      >
        <svg
          className="h-5 w-5 text-red-500"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
          />
        </svg>

        <span className="sr-only">Icon description</span>
      </button>
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-sm">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-3xl font-semibold">Modal Title</h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto space-y-4 ">
                  <div>
                    <label className="block text-gray-700 text-sm font-bold mb-2">
                      Holiday ID
                    </label>
                    <input
                      type="text"
                      id="holidayID"
                      className="bg-gray-100 border border-gray-300 text-gray-100 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Holiday Title"
                      value={holiday_ID}
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 text-sm font-bold mb-2">
                      Holiday Title
                    </label>
                    <input
                      type="text"
                      id="holidayTitle"
                      className="bg-gray-100 border border-gray-300 text-gray-100 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Holiday Title"
                      defaultValue={eachHoliday.holidayTitle}
                      onChange={(event) => {
                        setHolidayTitle(event.target.value);
                      }}
                      required
                    />
                  </div>
                  <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">
                      Holiday Date
                    </label>

                    <Datepicker
                      primaryColor={"fuchsia"}
                      placeholder={"yyyy-mm-dd"}
                      asSingle={true}
                      value={holidayDate}
                      onChange={onChange_HolidayDate}
                    />
                  </div>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                  <button
                    className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => onClick_UpdateStateHoliday()}
                  >
                    Save Changes
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div
            className="opacity-50 fixed inset-0 z-40 bg-black"
            onClick={() => setShowModal(false)}
          ></div>
        </>
      ) : null}
    </>
  );
};
