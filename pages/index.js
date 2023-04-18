import React from "react";
import Layout from "@/components/layout/Temp";
import Sales from "@/components/layout/Sales";
import CouponRequest from "@/components/layout/CouponRequest";
import Organization from "@/components/layout/Organization";

export default function index() {
  return (
    <>
      <Layout>
        <div className=" min-h-screen w-full px-2 py-2 flex gap-12">
          <div className="flex w-1/2 flex-col gap-12">
            <Sales />
            <Organization />
          </div>
          <div className="w-1/2">
            <CouponRequest />
          </div>
        </div>
      </Layout>
    </>
  );
}
