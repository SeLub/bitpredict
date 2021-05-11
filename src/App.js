import React from 'react';
import './App.css';
import Template from './Template'
import useFetch from './API';
//import {GraphDraw} from './Graph'
//import SomeBusinessLogic from './BusinessLogic'
import {Line} from 'react-chartjs-2'


function App() {
  let [panelHeader, panelFooter, panelData, panelSidebar] = ['Bitcoin Price Analysis and Extrapolation predict', 'Data Updated ', 'Test Data', 'Test SideBar']
  let {loading, data, error} = useFetch('https://api.coindesk.com/v1/bpi/historical/close.json')
  console.log(data, loading, error)
  if (loading) return 'LOADING...'
  if (error) {console.log(error); return null;}
  panelSidebar = JSON.stringify(data)








  

  const dataChart = {
    labels: ['1', '2', '3', '4', '5', '6'],
    datasets: [
      {
        label: '# of Votes',
        data: [12, 19, 3, 5, 2, 3],
        fill: false,
        backgroundColor: 'rgb(255, 99, 132)',
        borderColor: 'rgba(255, 99, 132, 0.2)',
      },
    ],
  }
  

  
  const LineChart = () => {
    
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
    )
  }


  panelData = LineChart()







return (
    <div className="App">
      <header className="App-header">
          <Template 
          panelHeader={panelHeader}
          panelFooter={panelFooter}
          panelData={panelData}
          panelSidebar={panelSidebar}
          />
              
      </header>
    </div>
  );
}

export default App;