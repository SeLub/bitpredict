import {useState, useEffect} from 'react'
import {Line} from 'react-chartjs-2'

const Graph = ({labelsShow, dataShow}) => {

  const [dataChart, setDataChart] = useState(
                                                {
                                                  labels: ['loading..','loading..'],
                                                  datasets: [
                                                    {
                                                      label: 'Bitcoin Price, USD',
                                                      data: [1,2],
                                                      fill: false,
                                                      backgroundColor: 'rgb(255, 99, 132)',
                                                      borderColor: 'rgba(255, 99, 132, 0.2)',
                                                    },
                                                  ],
                                                }
                                            )
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

  function drawChart(dataChart, optionsChart) {
      return <Line data={dataChart} options={optionsChart} />

  }


  return (
    drawChart(dataChart, optionsChart)
  )
}

export default Graph

