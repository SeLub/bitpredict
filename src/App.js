import React, { useEffect } from 'react'; 
import {getAPIdata, dataObj} from './API';
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
            <Headline value = {dataTime} />
            <div className="row"><div className="col-sm-8">
            <canvas id="myChart" width="400" height="400"></canvas>
            </div><div className="col-sm-4">SideBar</div></div>
            <Footerline value = {'Bitcoin Board'}/>
      </div>
    );
  }

   
function Headline(props) {
    return <div className="row"><div className="col-sm-12"><h1>Bitcoin Board</h1><br /><h2>{props.value}</h2></div></div>;
  }

function Footerline(props){
  return <div className="row"><div className="col-sm-12"><p>{props.value}</p></div></div>;
}


export default App;
  