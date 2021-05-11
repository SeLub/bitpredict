import React from 'react';
import './App.css';
import Template from './Template'
import useFetch from './API';
import showGraph from './Graph'
//import SomeBusinessLogic from './BusinessLogic'



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
  
  panelData = showGraph(dataChart)







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