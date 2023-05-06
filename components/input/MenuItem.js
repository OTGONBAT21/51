import React from "react";
import Link from "next/link";

export default function MenuItem({ gal, children, href, active }) {
  return (
    <>
      <Link
        href={href}
        className={`button w-full  border-b-2 ${
          active ? "text-Primary1 border-b-Primary1" : "text-dark"
        }  flex items-center`}
      >
        {gal}
        {children}
      </Link>
    </>
  );
}
