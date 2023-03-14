import React from "react";
import Button from "@/components/Button";
import InPut from "@/components/InPut";

export default function login() {
  return (
    <div className="flex flex-col w-full h-screen bg-[#FFFFFF] items-center justify-center px-4">
      <img
        src="/img/logo.jpg"
        width={86.75}
        height={93}
        className="mb-[50px]"
      />

      <InPut>Name or address</InPut>
      <InPut>Password</InPut>

      <div className="flex w-[440px] justify-start mb-[18px]">
        <input className="mr-4" type={"checkbox"}></input>Remember me
      </div>
      <Button>LOG IN</Button>
    </div>
  );
}
