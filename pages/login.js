import React from "react";
import Button from "@/components/Button";
import InPut from "@/components/InPut";
import Link from "next/link";

export default function login() {
  return (
    <div className="flex flex-col w-full h-screen items-center justify-center bg-[#F5F5F5]">
      <div className="flex w-[140px] h-[140px] rounded-full shadow-2xl bg-white justify-center items-center mb-[-65px] z-20">
        <img className="" src="/img/logo.jpg" width={86.75} />
      </div>
      <div className="flex flex-col w-[400px] h-[540px] gap-[24px] items-center bg-white rounded-[24px] p-[25px] pt-[90px]">
        <div className="flex golden-box">
          <Button>Хэрэглэгч</Button>
          <Button>Байгууллага</Button>
        </div>
        <InPut>Бүртгэлтэй И-мэйл хаяг/Утас</InPut>
        <InPut>Нууц үг</InPut>
        <div className="flex golden-box items-center gap-2">
          <input type={"checkbox"} className="w-4 h-4"></input>
          <p>Намайг сана</p>
        </div>
        <Link href={"/"}>
          <div className="w-[238px] h-[44px]">
            <button className="w-full h-full rounded-xl bg-Primary1 text-white font-bold shadow-xl shadow-red-300">
              Нэвтрэх
            </button>
          </div>
        </Link>
        <Link href={"/"} className="text-Primary1 font-bold m-[30px]">
          БҮРТГҮҮЛЭХ
        </Link>
      </div>
    </div>
  );
}
