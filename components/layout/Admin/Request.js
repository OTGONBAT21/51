import React from "react";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function Request({
  Description,
  couponFree,
  couponLimit,
  companyName,
  couponStartDate,
  company_img,
  img,
  id,
}) {
  const router = useRouter();

  function statusTrue() {
    fetch(process.env.API_URL + `/api/coupon/`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: localStorage.getItem("token"),
      },
      body: JSON.stringify({ status: true, id }),
    });
  }
  function statusFalse() {
    fetch(process.env.API_URL + `/api/coupon/`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: localStorage.getItem("token"),
      },
      body: JSON.stringify({ status: false, id }),
    });
  }

  useEffect(() => {}, []);

  return (
    <>
      <div className="flex flex-row w-250 h-[170px] drop-shadow-md">
        <div className="flex w-full h-full bg-white rounded-2xl border border-gray-200 ">
          <img className="px-6 py-4 h-full" src={img} />
          <div className="flex flex-col w-full h-full p-4 justify-around">
            <div>
              <div className="flex justify-start gap-4">
                <img
                  className="bg-black rounded-full"
                  src={company_img}
                  width={24}
                />
                <h1 className="">{companyName}</h1>
              </div>
              <p>{Description}</p>
            </div>

            <div>
              <div className="flex justify-between">
                <h1 className=" text-Primary1">{couponStartDate}</h1>
                <h1></h1>
              </div>
              <div className="flex flex-row gap-1">
                <p>Buy itmes number : {couponLimit}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex  w-16 h-full bg-red-600 rounded-xl justify-center items-center">
          <h1 className="-rotate-90">+{couponFree} free</h1>
        </div>
      </div>
      <div className="flex gap-4">
        <button
          onClick={() => statusFalse()}
          className="w-full h-[50px] rounded-xl  border-Primary1 border-2 flex justify-center items-center text-Primary1"
        >
          Цуцлах
        </button>
        <button
          onClick={() => statusTrue()}
          className="flex justify-center items-center w-full h-[50px] rounded-xl bg-[#00E8A2] text-center bg-balck1"
        >
          Батлах
        </button>
      </div>
    </>
  );
}
