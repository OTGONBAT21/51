import React from "react";
import Layout from "@/components/layout/Temp";
import Sales from "@/components/layout/Sales";
import CouponRequest from "@/components/layout/CouponRequest";
import Organization from "@/components/layout/Organization";
import Company from "@/components/layout/Company";

export default function index() {
  return (
    <>
      <Layout>
        <div className=" min-h-screen w-full px-2 py-2 ">
          <div className="w-full bg-white m-4 p-12 rounded-xl grid grid-cols-5 gap-10 shadow-xl">
            <Company />
            <Company />
            <Company />
            <Company />
            <Company />
            <Company />
            <Company />
            <Company />
            <Company />
          </div>
        </div>
      </Layout>
    </>
  );
}
