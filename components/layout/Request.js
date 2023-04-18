import React from "react";
import Check from "../input/Check";
import Button from "../input/Button";

export default function Request() {
  return (
    <>
      <div className="flex flex-row w-250 h-[170px] drop-shadow-md">
        <div className="flex w-full h-full bg-gray-100 rounded-xl ">
          <img className="px-6 py-4 h-full" src="./img/nestlogo.png" />
          <div className="flex flex-col w-full h-full p-4 justify-around">
            <div>
              <div className="flex justify-start gap-4">
                <img
                  className="bg-black rounded-full"
                  src="./img/nestlogo.png"
                  width={24}
                />
                <h1 className="">Company Name</h1>
              </div>
              <p>
                sain bainu gal bainu yu hiij bauna mognolg hun bainu sad shaasan
                hohhh
              </p>
            </div>

            <div>
              <div className="flex justify-between">
                <h1 className=" text-Primary1">precent</h1>
                <h1>Date</h1>
              </div>
              <div className=" w-full grid grid-cols-5 gap-1">
                <Check check={8}></Check>
              </div>
            </div>
          </div>
        </div>
        <div className="flex  w-16 h-full bg-red-600 rounded-xl justify-center items-center">
          <h1 className="-rotate-90">+1 free</h1>
        </div>
      </div>
      <div className="flex gap-4">
        <button className="w-full h-[50px] rounded-xl  border-Primary1 border-2 flex justify-center items-center text-Primary1">
          Цуцлах
        </button>
        <button className="flex justify-center items-center w-full h-[50px] rounded-xl bg-[#00E8A2] text-center bg-balck1">
          Батлах
        </button>
      </div>
    </>
  );
}
