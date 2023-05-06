import React, { useState } from "react";
import UnderLine from "@/components/input/UnderLine";
import InPut from "@/components/input/InPut";
import Link from "next/link";
import { useRouter } from "next/router";

export default function login() {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const [error, setError] = useState();
  const router = useRouter();

  function login() {
    console.log(username, password);
    fetch(process.env.API_URL + "/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username,
        password,
      }),
    })
      .then((res) => {
        if (res.status == 401) {
          setError("username password buruu baina");
          return {};
        } else if (res.status == 200) {
          router.push("/admin");
          return res.json();
        }
      })
      .then((result) => {
        console.log("token shuu", result.token);
        localStorage.setItem("token", result.token);
      });
  }

  return (
    <div className="flex flex-col w-full h-screen items-center justify-center bg-[#F5F5F5]">
      <div className="flex w-[140px] h-[140px] rounded-full shadow-2xl bg-white justify-center items-center mb-[-65px] z-20">
        <img className="" src="/img/logo.jpg" width={86.75} />
      </div>
      <div className="flex flex-col w-[400px] h-[540px] gap-[24px] items-center bg-white rounded-[24px] p-[25px] pt-[90px]">
        <div className="flex golden-box">
          <UnderLine>Хэрэглэгч</UnderLine>
          <UnderLine>Байгууллага</UnderLine>
        </div>
        <div className="flex flex-col w-[350px] gap-4">
          <InPut type="text" onChange={(e) => setUsername(e.target.value)}>
            Бүртгэлтэй И-мэйл хаяг/Утас
          </InPut>
          <InPut type="password" onChange={(e) => setPassword(e.target.value)}>
            Нууц үг
          </InPut>
        </div>
        <div className="text-red-500 text-xm">{error}</div>
        <div className="flex golden-box items-center gap-2">
          <input type={"checkbox"} className="w-4 h-4"></input>
          <p>Намайг сана</p>
        </div>
        <div className="w-[238px] h-[44px]">
          <button
            onClick={login}
            className="w-full h-full rounded-xl bg-Primary1 text-white font-bold shadow-xl shadow-red-300 justify-center"
          >
            Нэвтрэх
          </button>
        </div>
        <Link href={"/"} className="text-Primary1 font-bold m-[30px]">
          БҮРТГҮҮЛЭХ
        </Link>
      </div>
    </div>
  );
}
