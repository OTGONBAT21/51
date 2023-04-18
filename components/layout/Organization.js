import React from "react";
import CompanyList from "./CompanyList";

export default function Organization() {
  return (
    <div className="flex flex-col w-full h-screen bg-white rounded-xl text-black bold p-6 gap-6 shadow-xl overflow-auto ">
      <p className="font-bold my-6">Байгууллагууд</p>
      <CompanyList />
      <CompanyList />
      <CompanyList />
      <CompanyList />
      <CompanyList />
      <CompanyList />
      <CompanyList />
      <CompanyList />
      <CompanyList />
    </div>
  );
}
