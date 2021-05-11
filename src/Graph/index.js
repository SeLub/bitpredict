//import {useState, useEffect} from 'react'
import {Line} from 'react-chartjs-2'


const showGraph = (dataChart) => {

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

export default showGraph