import React, { useEffect } from 'react'; 
import {getAPIdata, dataObj} from './API';
import Template from './Template'
import Chart from 'chart.js';
import './App.css';


function App() {

  const [dataObject, setDataObj] = useState(null);
  let [panelHeader, panelFooter, panelData, panelSidebar] = ['Bitcoin Price Analysis and Extrapolation predict', 'Data Updated ', 'Test Data', 'Test SideBar']
  panelFooter += dataObj.dataTime;


    useEffect(() => {
      const ctx = document.getElementById("myChart");
      new Chart(ctx, {
        type: 'line',
        data: {
            labels: titles,
            datasets: [{
                label: 'Bitcoin Price USD',
                data: data,
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        }
    });
    });
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