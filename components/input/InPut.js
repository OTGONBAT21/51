import React from "react";

export default function InPut({ children, onChange, type }) {
  return (
    <div>
      <input
        type={type}
        onChange={onChange}
        className="h-12 w-full border-gray-400 border rounded-xl text-dark text-[16px] pl-4 focus:ring-Primary1 focus:outline-none
        focus:border-2 focus:border-Primary1 "
        placeholder={children}
      ></input>
    </div>
  );
}
