import Link from "next/link";
import React from "react";

export default function Company({ companyName, img, id }) {
  return (
    <>
      <Link
        href={"/admin/organization/" + id}
        className="w-full h-full bg-white "
      >
        <div className="flex flex-col w-[180px] h-[250px] bg-white border rounded-xl drop-shadow-xl justify-between pb-4">
          <img className="p-8" src={img} />
          <h1 className="text-black text-center font-bold">{companyName}</h1>
        </div>
      </Link>
    </>
  );
}
