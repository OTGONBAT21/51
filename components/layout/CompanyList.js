import React from "react";

export default function CompanyList() {
  return (
    <div>
      <div className="flex w-full h-40 bg-gray-100 p-4 gap-4 rounded-xl">
        <img className="h-28" src="./img/nestlogo.png" />
        <div className="text-black">
          <h1 className="font-bold">Company Name</h1>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum
          </p>
        </div>
        <div className="flex flex-col w-2/3  text-Primary1 ">
          <div className="flex gap-2 p-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M16.5 6v.75m0 3v.75m0 3v.75m0 3V18m-9-5.25h5.25M7.5 15h3M3.375 5.25c-.621 0-1.125.504-1.125 1.125v3.026a2.999 2.999 0 010 5.198v3.026c0 .621.504 1.125 1.125 1.125h17.25c.621 0 1.125-.504 1.125-1.125v-3.026a2.999 2.999 0 010-5.198V6.375c0-.621-.504-1.125-1.125-1.125H3.375z"
              />
            </svg>
            Купонууд
          </div>
          <div className="flex justify-between">
            <p className="text-black">Идэхтэй</p>
            <p>24</p>
          </div>
          <div className="flex justify-between">
            <p className="text-black">Идэхгүй</p>
            <p>24</p>
          </div>
        </div>
      </div>
    </div>
  );
}
