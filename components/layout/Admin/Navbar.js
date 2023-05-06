import React from "react";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed flex top-0 left-0 z-10 w-full h-[90px] bg-white drop-shadow-md justify-end items-center p-12">
      <Link href="/login">Нэвтрэх</Link>
    </nav>
  );
}
