import React, { useEffect, useState } from "react";
import Layout from "@/components/layout/Admin/Layout";
import Company from "@/components/layout/Admin/Company";
import { useRouter } from "next/router";

export default function index() {
  const [data, setData] = useState([]);
  const router = useRouter();

  function getData() {
    console.log(localStorage.getItem("token"));
    fetch(`${process.env.API_URL}/api/company`, {
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
        <div className=" min-h-screen w-full">
          <div className="w-full bg-white m-4 p-12 rounded-xl grid grid-cols-5 gap-10 shadow-xl">
            {data.map((row, i) => (
              <Company
                key={i}
                companyName={row.company_name}
                id={row.id}
                img={row.img}
              />
            ))}
          </div>
        </div>
      </Layout>
    </>
  );
}
