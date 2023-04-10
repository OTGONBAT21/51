import React from "react";
import Navbar from "@/components/Navbar";
import Button from "./Button";

export default function LayOut() {
  return (
    <>
      <header className="z-10">
        <Navbar />
      </header>
      <main className="bg-[#f5f5f5]">
        <div className="flex h-full gap-24">
          <div className="flex flex-col w-[260px] h-screen justify-between items-center mt-[-90px] bg-white shadow-md p-4 z-20">
            <div className="mt-[90px]">
              <img className="" src="/img/logo.jpg" width={86.75} />
            </div>
            <div>
              <Button>Хянах самбар</Button>
              <Button>Байгууллагууд</Button>
              <Button>Купонууд</Button>
            </div>
            <div>log out</div>
          </div>
          <div>
            <div className="w-[500px] h-[250px] my-12 bg-white shadow-md rounded-xl"></div>
            <div className="w-[500px] h-[250px] bg-white shadow-md rounded-xl"></div>
          </div>
          <div className="w-[500px] my-12 bg-white shadow-md rounded-xl"></div>
        </div>
      </main>
      <footer></footer>
    </>
  );
}
