import { useRouter } from "next/router";
import Layout from "@/components/layout/Admin/Layout";
import { useEffect, useState } from "react";
import UnderLine from "@/components/input/UnderLine";
import React from "react";
import Border from "@/components/input/Border";
import Coupon from "@/components/layout/Admin/Coupon";

const CompanyScreen = () => {
  const { query } = useRouter();
  const { id } = query;
  const [data, setData] = useState([]);
  const [coupon, setCoupon] = useState([]);
  const router = useRouter();

  function getData() {
    if (!id) return;
    localStorage.getItem("token");
    fetch(`${process.env.API_URL}/api/company/${id}`, {
      headers: {
        Authorization: localStorage.getItem("token"),
      },
    })
      .then((response) => {
        if (response.status == 401) router.push("/login");

        return response.json();
      })
      .then((result) => {
        setData(result.company);
        setCoupon(result.coupons);
        localStorage.setItem("token", result.token);
      });
  }

  useEffect(() => {
    getData();
  }, [id]);

  return (
    <Layout>
      <div className=" min-h-screen w-full px-2 py-2 ">
        <div className="flex flex-col w-full bg-white m-4 p-12 rounded-xl shadow-xl gap-8">
          <div className="flex flex-row gap-8">
            <div className="w-[250px] h-[250px] text-center rounded-xl ">
              <img className="" src={data.img} />
            </div>
            <div className="flex flex-col gap-8">
              <h1 className="text-3xl font-bold ">{data.company_name}</h1>
              <div className="flex flex-row gap-8">
                <Border child={data.phone_number}></Border>
                <Border child={data.register}></Border>
              </div>
              <div className="flex flex-col w-full h-40 border border-black rounded-xl justify-between p-4">
                <p>{data.description}</p>
                <p className="font-bold">address: {data.address}</p>
              </div>
            </div>
          </div>
          <div className=" w-full h-full">
            <div className="flex flex-row w-[400px]">
              <div className="flex justify-center items-center w-48 h-[48px] border-b-4 border-red-600 mb-4 text-red-600 font-bold text-xl">
                Coupon
              </div>
            </div>
            <div className="grid grid-cols-4 gap-16 ">
              {coupon.map((row, i) => (
                <Coupon
                  key={i}
                  couponName={row.description}
                  couponLimit={row.coupon_limit}
                  couponFree={row.free}
                  img={row.img}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default CompanyScreen;
