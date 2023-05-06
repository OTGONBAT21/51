import React from "react";
import Layout from "@/components/layout/Admin/Layout";
import { useEffect, useState } from "react";
import Coupon from "@/components/layout/Admin/Coupon";

export default function index() {
  const [data, setData] = useState([]);
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
    <>
      <Layout>
        <div className="grid grid-cols-4 gap-16 ">
          {data.map((row, i) => (
            <Coupon
              key={i}
              couponName={row.description}
              couponLimit={row.coupon_limit}
              couponFree={row.free}
              img={row.img}
            />
          ))}
        </div>
      </Layout>
    </>
  );
}
