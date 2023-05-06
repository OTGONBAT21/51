import React from "react";
import Link from "next/link";

export default function Button({ child, href }) {
  return (
    <Link href={href}>
      <div className="flex justify-center items-center w-64 h-12 text-white bg-Primary1 border border-red-600 rounded-xl ">
        {child}
      </div>
    </Link>
  );
}
