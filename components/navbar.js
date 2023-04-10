import React from "react";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex w-full h-[90px] justify-end items-center bg-white px-8  drop-shadow-md">
      <Link href="/login">Нэвтрэх</Link>
    </nav>
  );
}
