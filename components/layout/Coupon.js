import React from "react";

export default function Coupon() {
  return (
    <div>
      <div className="w-full aspect-square bg-white rounded-3xl broder overflow-hidden shadow-xl">
        <div className="w-full h-full border-red-600 border-b-2 bg-black border-dashed ">
          <img className="p-6" src="./img/nestlogo.png" />
        </div>
      </div>
      <div className="flex flex-col w-full h-1/4 bg-white rounded-3xl shadow-xl justify-around items-center pt-6">
        <h1>Buy 2+1 free</h1>
        <p>Date</p>
      </div>
    </div>
  );
}
