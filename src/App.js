import React, { useEffect } from 'react'; 
import axios from 'axios';
import Chart from 'chart.js';
import './App.css';

let dataTime ='';
let titles = [];
let data =[];

axios.get('https://api.coindesk.com/v1/bpi/historical/close.json')
  .then((response) => {
    dataTime = response.data.time.updated;

    for (let [key, value] of Object.entries(response.data.bpi)) {
        titles.push(key); 
        data.push(value)
}

  });

  console.log(titles);
  console.log(data);


function App() {
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
  