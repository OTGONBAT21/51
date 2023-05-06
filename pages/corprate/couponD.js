import React from "react";
import Layout from "@/components/layout/Corprate/Layout";
import InPut from "@/components/input/InPut";
import Button from "@/components/input/Button";

export default function index() {
  return (
    <>
      <Layout>
        <div className="flex min-h-[70vh] w-full px-2 py-2 justify-center ">
          <div className="flex flex-row h-full w-[50%] mx-24 mt-12 drop-shadow-xl bg-red-300 relative justify-center rounded-2xl">
            <div className="flex w-[140px] h-[140px] rounded-full drop-shadow-xl bg-white justify-center items-center z-20 absolute m-[-65px]">
              <img className="" src="/img/logo.jpg" width={86.75} />
            </div>
            <div className="flex flex-col w-full h-full bg-white p-8 px-8 gap-4 justify-center rounded-xl ">
              <InPut> img </InPut>
              <InPut>coupon name </InPut>
              <div className="flex flex-row justify-between ">
                <InPut type={"number"}>coupon limit </InPut>
                <InPut type={"number"}>free </InPut>
              </div>
              <div className="flex justify-between">
                <div>
                  <p>Start date</p>
                  <InPut type={"date"}> start date </InPut>
                </div>
                <div>
                  <p>End Date</p>
                  <InPut type={"date"}> end date </InPut>
                </div>
              </div>
              <InPut> description </InPut>
              <Button child={"gal bainu"} href={"./coupon"}></Button>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}
