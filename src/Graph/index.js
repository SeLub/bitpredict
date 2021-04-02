//import React from 'react'
//import {Line} from 'react-chartjs-2'
import Chart from 'chart.js';
let LineChart ='';

function GraphDraw(dataArr,line1, line2){
    const ctx = document.getElementById("myChart");
    
 //   const dataArr2 = titles.map(d=>d-20000)

    const  dataTwoLines = {
      labels: dataArr,
      datasets:  [{
        label: "Bitcoin Price Rate",
        data: line1,
        borderWidth: 2,
        backgroundColor: "rgba(6, 167, 125, 0.1)",
        borderColor: "rgba(6, 167, 125, 1)",
        pointBackgroundColor: "rgba(225, 225, 225, 1)",
        pointBorderColor: "rgba(6, 167, 125, 1)",
        pointHoverBackgroundColor: "rgba(6, 167, 125, 1)",
        pointHoverBorderColor: "#fff"
     }, {
        label: "Bank",
        data: line2,
        borderWidth: 2,
        backgroundColor: "rgba(246, 71, 64, 0.1)",
        borderColor: "rgba(246, 71, 64, 1)",
        pointBackgroundColor: "rgba(225, 225, 225, 1)",
        pointBorderColor: "rgba(246, 71, 64, 1)",
        pointHoverBackgroundColor: "rgba(246, 71, 64, 1)",
        pointHoverBorderColor: "#fff"
     }]
  }
  const options = {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
  }
    new Chart(ctx, {
        type: 'line',
        data: dataTwoLines,
        options: options
    });

 //   LineChart = () => (
 //       <>
 //         <Line data={data} options={options} />
 //       </>
 //     )
      
}

export  {GraphDraw,LineChart}