import React, { useEffect, useState } from 'react';
import './App.css';
import Template from './Template'
import useFetch from './API';
//import {GraphDraw} from './Graph'
//import SomeBusinessLogic from './BusinessLogic'


function App() {
  let [panelHeader, panelFooter, panelData, panelSidebar] = ['Bitcoin Price Analysis and Extrapolation predict', 'Data Updated ', 'Test Data', 'Test SideBar']

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