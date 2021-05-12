import React from 'react';
import './App.css';
import Template from './Template'
import useFetch from './API';
import Graph from './Graph'
//import SomeBusinessLogic from './BusinessLogic'

let obj2 = {}

function App() {
  let [panelHeader, panelFooter, panelData, panelSidebar] = ['Bitcoin Price Analysis and Extrapolation predict', 'Data Updated ', 'Test Data', 'Test SideBar']
//  panelSidebar = JSON.stringify(data)
//  console.log(data.bpi)


  let {loading, data, error} = useFetch('https://api.coindesk.com/v1/bpi/historical/close.json')
  if (loading) return 'LOADING...'
  if (error) {console.log(error); return null;}
  
  console.log(data)
  panelData = <Graph labelsShow={['one','two']} dataShow={[1,2]} />

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