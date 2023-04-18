import React from "react";
import Layout from "@/components/layout/Temp";
import Sales from "@/components/layout/Sales";
import CouponRequest from "@/components/layout/CouponRequest";
import Organization from "@/components/layout/Organization";
import Coupon from "@/components/layout/Coupon";

export default function index() {
  return (
    <>
      <Layout>
        <div className=" min-h-screen w-full px-2 py-2 ">
          <div>
            <div className="grid grid-cols-4 gap-16 ">
              <Coupon />
              <Coupon />
              <Coupon />
              <Coupon />
              <Coupon />
              <Coupon />
              <Coupon />
              <Coupon />
              <Coupon />
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}
