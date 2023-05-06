import React from "react";
import Layout from "@/components/layout/Corprate/Layout";
import Link from "next/link";
import Coupon from "@/components/layout/Admin/Coupon";
import Add_coupon from "@/components/input/Add_coupon";

export default function index() {
  return (
    <>
      <Layout>
        <div className=" min-h-screen w-full px-2 py-2 ">
          <div>
            <div className="grid grid-cols-4 gap-16 ">
              <Link href={"/corprate/couponD"}>
                <Add_coupon />
              </Link>
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
