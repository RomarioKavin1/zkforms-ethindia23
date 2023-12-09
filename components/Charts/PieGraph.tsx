import React from "react";
import ReactECharts from "echarts-for-react";

const Charts = () => {
//   if (!data) {
//     return null;
//   }

//   console.log(data);

//   const names = ["Filled", "Failed Verification"];

//   const ChartData = data?.map((item, index) => {
//     return { value: item.value, name: names[index] };
//   });

  return (
    <ReactECharts
      style={{
        height: "100%",
        width: "100%",
      }}
      option={{
        color: [
            
            "#c4b5fd",
            "#f472b6",
            "#67e8f9"
          ],
        tooltip: {
          trigger: "item",
        },
        legend: {
          textStyle: {
            fontSize: 15,
          },
          top: "left",
          // top: 'middle'
        },
        series: [
          {
            name: "Form Responses",
            type: "pie",
            avoidLabelOverlap: true,
            radius: [25, 125],
            center: ["50%", "50%"],
            itemStyle: {
              borderRadius: 10,
              borderColor: "#fff",
              borderWidth: 2,
            },
            label: {
              textStyle: {
                fontSize: 10,
              },
            },
            emphasis: {
              label: {
                show: true,
                fontSize: 10,
                fontWeight: "bold",
              },
            },
            labelLine: {
              show: false,
            },
            data: [
                { value: 484, name: 'Filled' },
                { value: 300, name: 'Failed Verification' }
              ]
          },
        ],
      }}
    />
  );
};

export default Charts;
