import React, { useEffect, useState } from 'react';
import './App.css';
import Template from './Template'
import dataObj from './API';
import {GraphDraw} from './Graph'
import { getData } from './Services';
import SomeBusinessLogic from './BusinessLogic'


function App() {
  const [dataObject, setDataObj] = useState(null);
  let [panelHeader, panelFooter, panelData, panelSidebar] = ['Bitcoin Price Analysis and Extrapolation predict', 'Data Updated ', 'Test Data', 'Test SideBar']
      panelFooter += dataObj.dataTime;
      
      useEffect(() => {
  getData()
      .then(data => {
        let line1 = dataObj.dataArr ;
        let line2 = SomeBusinessLogic(dataObj.dataArr)
        setDataObj(data.bpi);
        GraphDraw(dataObj.titles,line1, line2)
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