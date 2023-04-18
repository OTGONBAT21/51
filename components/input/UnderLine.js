import React from "react";

export default function button({ child, children }) {
  return (
    <>
      <button className="w-full h-[48px] focus:border-b-Primary1 border-b-4 text-text1 focus:text-dark justify-center items-center">
        {children}
      </button>
    </>
  );
}
7;
