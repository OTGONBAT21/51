import React, { useEffect } from "react";
import Layout from "@/components/layout/Admin/Layout";
import Sales from "@/components/layout/Admin/Sales";
import CouponRequest from "@/components/layout/Admin/CouponRequest";
import Organization from "@/components/layout/Admin/Report";

export default function index() {
  useEffect(
    () => console.log("avsan token", localStorage.getItem("token")),
    []
  );
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
