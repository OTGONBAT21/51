import React from "react";

export default function InPut({ children }) {
  return (
    <div>
      <input className="my-input w-full" placeholder={children}></input>
    </div>
  );
}
