import React from "react";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex h-12 items-center px-8 justify-end shadow-md bg-SurfaceDisabled">
      <Link href="/login">Нэвтрэх</Link>
    </nav>
  );
}
