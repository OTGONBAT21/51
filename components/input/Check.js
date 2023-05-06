import React from "react";

export default function check({ check }) {
  return (
    <>
      {Array(5)
        .fill(0)
        .map((row, i) =>
          i < check ? (
            <div key={i} className="w-full h-2 bg-Primary1 rounded-xl"></div>
          ) : (
            <div key={i} className="w-full h-2 bg-blue-600 rounded-xl"></div>
          )
        )}
    </>
  );
}
