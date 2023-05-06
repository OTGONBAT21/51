import React from "react";
import Navbar from "../Corprate/Navbar";
import SideBar from "./SideBar";

export default function Temp({ children }) {
  return (
    <>
      <Navbar />
      <div className="flex">
        <SideBar />
        <div className="flex bg-[#F5F5F5] flex-col overflow-auto w-full h-screen pt-28 pb-10 px-8">
          {children}
        </div>
      </div>
    </>
  );
}
