import React, { useState, useEffect } from 'react'; 
import {getAPIdata} from './API';
import Template from './Template'
import {GraphDraw, LineChart} from './Graph'
import SomeBusinessLogic from './BusinessLogic'
import './App.css';
import Form from 'react-bootstrap/Form';


function App() {
  let [panelHeader, panelFooter, panelData, panelSidebar] = ['Bitcoin Price Analysis and Extrapolation predict', 'Data Updated ', 'Test Data', 'Test SideBar']
  let dataObj ={dataTime:'',dataDates:[], dataPrice:[], dataBusiness:[]}
const [dataObject, setDataObj] = useState(null);
const [select, setSelect] = useState(31);

getAPIdata(dataObj)
.then(data => {
    setDataObj(dataObject);
    dataObj.dataBusiness = SomeBusinessLogic(dataObj.dataPrice)
    GraphDraw(dataObj);
  });

   

//  useEffect(() => {    }, []);
    return (
      <div className="App">
      <header className="App-header">
          <Template 
          panelHeader={panelHeader}
          panelFooter={panelFooter}
          panelData={panelData}
          panelSidebar={panelSidebar}
          />
            <Form.Control as="select" className="my-1 mr-sm-2" onChange={setSelect(select-16)} id="inlineFormCustomSelectPref" custom>
            <option value="0">Select...</option>
            <option value="31">Month</option>
            <option value="15">Decade</option>
            <option value="7">Week</option>
            </Form.Control>
      </header>
    </div>
    );
  }

   
export default App;  