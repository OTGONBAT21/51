import { useEffect } from "react";
import { Chart } from "chart.js";
function Sales() {
  useEffect(() => {
    var ctx = document.getElementById("myChart").getContext("2d");
    var myChart = new Chart(ctx, {
      type: "line",
      data: {
        labels: ["Sunday", "Monday", "Tuesday"],
      },
    });
  }, []);
  return (
    <>
      <div className="w-full flex justify-center items-center ">
        <div className="flex border bg-white rounded-xl  w-full h-fit my-auto  shadow-xl p-8 justify-center items-center ">
          <canvas id="myChart"></canvas>
        </div>
      </div>
    </>
  );
}

export default Sales;
