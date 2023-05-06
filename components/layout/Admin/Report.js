import React, { useEffect, useState } from "react";
import CompanyList from "./Comment";
import { useRouter } from "next/router";

export default function Organization() {
  const [data, setData] = useState([]);
  const router = useRouter();

  function getData() {
    console.log(localStorage.getItem("token"));
    fetch(`${process.env.API_URL}/api/report`, {
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
    <div className="flex flex-col w-full h-screen bg-white rounded-xl text-black bold p-6 gap-6 shadow-xl overflow-auto ">
      <p className="font-bold my-6">Байгууллагууд</p>
      {data.map((row, i) => (
        <CompanyList
          key={i}
          companyName={row.company_name}
          child={row.comment}
        />
      ))}
    </div>
  );
}
