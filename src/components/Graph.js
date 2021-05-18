import React from 'react'
import { Line } from 'react-chartjs-2'

  const LineDemo = ({chart}) =>{
        
      const dataChart = {
          labels: chart.lablesChart, 
            datasets: [{
            label: chart.titleChart,
            data: chart.dataChart,
            fill: false,
            borderColor: 'darkred',
            backgroundColor: 'white',
            tension: 0.1
            }]
      };

      const optionsChart = {
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
    return(
      <>
     <Line data={dataChart} options={optionsChart} />
     </>
    )}

export default LineDemo