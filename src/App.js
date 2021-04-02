import React, { useEffect, useState } from 'react';
import './App.css';
import Template from './Template'
import dataObj from './API';
import {GraphDraw} from './Graph'
import { getData } from './Services';


function App() {
  const [dataObject, setDataObj] = useState(null);
  let [panelHeader, panelFooter, panelData, panelSidebar] = 
      ['Bitcoin Price Analysis and Extrapolation predict', 'Data Updated ', 'Test Data', 'Test SideBar']
      let line1 = dataObj.dataArr ;
      let line2 = Bank(dataObj.dataArr)
useEffect(() => {
  getData()
      .then(data => {
        setDataObj(data.bpi);
        GraphDraw(dataObj.titles,line1, line2)
      });
  }, []);


          panelFooter += dataObj.dataTime;

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


function Bank(dataArr){
  let dataArr2 = Array.from(dataArr)
  let bankDayRate = 1+((500/365)/100);
  let startBank = dataArr2[0];
  
  // console.log(startBank)

  let dataArrNew =[];
  for (let i = 0; i < dataArr2.length ; i++ ){
      dataArrNew.push(startBank*bankDayRate);
      startBank = startBank*bankDayRate;
      console.log(startBank)
  }

  console.log(dataArrNew,bankDayRate)
  return dataArrNew;
}

export default App;