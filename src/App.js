import React, { useState, useEffect } from 'react'; 
import {getAPIdata, dataObj} from './API';
import Template from './Template'
import {GraphDraw} from './Graph'
import SomeBusinessLogic from './BusinessLogic'
import './App.css';


function App() {

  const [dataObject, setDataObj] = useState(null);
  let [panelHeader, panelFooter, panelData, panelSidebar] = ['Bitcoin Price Analysis and Extrapolation predict', 'Data Updated ', 'Test Data', 'Test SideBar']
  panelFooter += dataObj.dataTime;
console.log(dataObj)

  useEffect(() => {
    getAPIdata()
        .then(data => {
          let line1 = dataObj.dataArr ;
          let line2 = SomeBusinessLogic(dataObj.dataArr)
          setDataObj(data);
          GraphDraw(dataObj.titles,line1, line2);
        });
    }, []);
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