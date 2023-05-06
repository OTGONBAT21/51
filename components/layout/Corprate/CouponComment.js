import React from "react";
import Comment from "./Comment";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

export default function CouponComment() {
  const [data, setData] = useState([]);
  const router = useRouter();
  function getData() {
    console.log(localStorage.getItem("token"));
    fetch(`${process.env.API_URL}/api/company`, {
      headers: {
        Authorization: localStorage.getItem("token"),
      },
    })
      .then((response) => {
        if (response.status == 401) router.push("/login");
        return response.json();
      })
      .then((result) => {
        setData(result.data);
        localStorage.setItem("token", result.token);
      });
  }

  useEffect(() => {
    getData();
  }, []);
  return (
    <div className="flex flex-col w-full h-screen bg-white p-8 gap-4 rounded-xl shadow-xl overflow-auto">
      <h1>Comment</h1>
      {data &&
        data.map((row, i) => (
          <Comment
            couponName={row.description}
            Description={row.description}
            couponFree={row.free}
            couponLimit={row.coupon_limit}
            companyName={row.company_name}
            couponStartDate={row.start_date.slice(0, 9)}
          />
        ))}
    </div>
  );
}
