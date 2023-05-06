import React from "react";
import Request from "./Request";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

export default function CouponRequest() {
  const [data, setData] = useState([]);
  const router = useRouter();
  function getData() {
    console.log(localStorage.getItem("token"));
    fetch(`${process.env.API_URL}/api/coupon`, {
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
      {data.map((row, i) => (
        <Request
          img={row.img}
          id={row.id}
          company_img={row.company_img}
          Description={row.description}
          couponFree={row.free}
          couponLimit={row.coupon_limit}
          companyName={row.company_name}
          couponStartDate={row.start_date.slice(0, 10)}
        />
      ))}
    </div>
  );
}
