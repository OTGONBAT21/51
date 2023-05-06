import React, { useEffect } from "react";
import Layout from "@/components/layout/Corprate/Layout";
import Statuses from "@/components/layout/Corprate/Satuses";
import CouponComment from "@/components/layout/Corprate/CouponComment";
import BarChart from "@/components/layout/Corprate/CouponComment";

export default function index() {
  return (
    <>
      <Layout>
        <div className=" min-h-screen w-full px-2 py-2 flex gap-12">
          <div className="flex w-1/2 flex-col gap-12">
            <Statuses />
            <BarChart />
          </div>
          <div className="w-1/2">
            <CouponComment />
          </div>
        </div>
      </Layout>
    </>
  );
}
