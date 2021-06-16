import React from 'react'
import { Line } from 'react-chartjs-2'

  const LineDemo = ({chart}) =>{

  const colorLine = (ctx, valueUp, valueDown) => { if (ctx.p0.parsed.y < ctx.p1.parsed.y) {return valueUp} else {return valueDown}}

  const dataChart = {
            labels: chart.lablesChart, 
            datasets: 
              [{
              label: chart.titleChart,
              data: chart.dataChart,
              fill: false,
              borderColor: 'red',
              backgroundColor: 'white',
              tension: 0.1,
              segment: { borderColor: ctx => colorLine(ctx, 'green', 'red')}
              }]
  }

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