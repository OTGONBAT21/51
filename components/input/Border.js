import React from "react";

export default function Border({ child }) {
  return (
    <div className="flex items-center justify-center w-80 h-12 border-gray-200 shadow-xl border rounded-xl text-Primary1 font-bold">
      {child}
    </div>
  );
}
