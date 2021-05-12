//import {useState, useEffect} from 'react'
import {Line} from 'react-chartjs-2'

const Graph = ({labelsShow, dataShow}) => {
  
  const dataChart = {
    labels: labelsShow,
    datasets: [
      {
        label: 'Bitcoin Price, USD',
        data: dataShow,
        fill: false,
        backgroundColor: 'rgb(255, 99, 132)',
        borderColor: 'rgba(255, 99, 132, 0.2)',
      },
    ],
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
    <Line data={dataChart} options={optionsChart} />
  )
}

export default Graph