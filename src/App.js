import React, { useEffect } from 'react'; 
import {getAPIdata, dataObj} from './API';
import Template from './Template'
import {GraphDraw} from './Graph'
import './App.css';


function App() {

  const [dataObject, setDataObj] = useState(null);
  let [panelHeader, panelFooter, panelData, panelSidebar] = ['Bitcoin Price Analysis and Extrapolation predict', 'Data Updated ', 'Test Data', 'Test SideBar']
  panelFooter += dataObj.dataTime;


  useEffect(() => {
    getAPIdata()
        .then(data => {
          let line1 = dataObj.dataArr ;
          let line2 = dataObj.dataArr);
          setDataObj(data.bpi);
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