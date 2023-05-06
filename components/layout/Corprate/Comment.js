import React from "react";

export default function Request({ child, name }) {
  return (
    <>
      <div className="flex flex-row w-250 drop-shadow-md bg-gray-100 rounded-xl p-4">
        <div className="flex flex-col w-full h-full p-4 justify-around">
          <div>
            <div className="flex justify-start gap-4">
              <h1 className="">{name}</h1>
            </div>
            <p className="py-2">{child}</p>
          </div>
        </div>
      </div>
    </>
  );
}
