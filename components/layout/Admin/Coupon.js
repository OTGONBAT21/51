import React from "react";

export default function Coupon({ couponName, couponLimit, couponFree, img }) {
  return (
    <div>
      <div className="w-full aspect-square bg-white rounded-3xl broder-gray-200 border overflow-hidden shadow-xl">
        <div className="w-full h-full border-red-600 border-b-2 bg-white border-dashed ">
          <img className="p-6" src={img} />
        </div>
      </div>
      <div className="flex flex-col w-full bg-white rounded-3xl shadow-xl justify-around items-center p-4">
        <h1 className="text-center">{couponName}</h1>
        <h1>
          Buy {couponLimit}+{couponFree} free
        </h1>
      </div>
    </div>
  );
}
