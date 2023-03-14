import React from "react";

export default function button({ children }) {
  return (
    <>
      <button className="w-[250px] h-[50px] rounded-full bg-Primary1 text-white font-bold">
        {children}
      </button>
    </>
  );
}
