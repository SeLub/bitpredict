import React from 'react'
import { Line } from 'react-chartjs-2'

  const LineDemo = ({chart}) =>{

  const LABELS = ['2021-05-14','2021-05-15','2021-05-16','2021-05-17','2021-05-18','2021-05-19','2021-05-20','2021-05-21','2021-05-22','2021-05-23','2021-05-24','2021-05-25','2021-05-26','2021-05-27']
  const TITLE = `Bicoin Prices, USD\n`
  const DATA = [50000, 51000, 52000, 49500, 48000, 47000, 48000,50000, 51000, 52000, 49500, 48000, 47000, 46000]

const colorLine = (ctx, valueUp, valueDown) => 
{
  if (ctx.p0.parsed.y < ctx.p1.parsed.y) { console.log(ctx.p1.parsed); return valueUp} else {return valueDown}
}

      const dataChart = {
          labels: LABELS, 
            datasets: [{
            label: TITLE,
            data: DATA,
            fill: false,
            borderColor: 'red',
            backgroundColor: 'white',
            tension: 0.1,
            segment: {
        borderColor: ctx => colorLine(ctx, 'green', 'red')

      }
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