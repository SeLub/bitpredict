import { useState } from 'react'
import './App.css';
import LineDemo from './Graph'
import 'react-modern-calendar-datepicker/lib/DatePicker.css';
import DatePicker from 'react-modern-calendar-datepicker';
import * as SETTINGS from './SETTINGS'

function App() {

let [titleChart, lablesChart, dataChart] = [SETTINGS.TITLE,SETTINGS.LABELS,SETTINGS.DATA]
const [chart, setChart] = useState({titleChart, lablesChart, dataChart})
console.log(chart)
  return (
    <div className="App">
      <div className="Graph">
        <LineDemo chart={chart} />
        <button onClick={()=>{}} >Step</button>
      </div>
      <div className="Panel">
        <p>Text Panel</p>
      </div>        
    </div>
  );
}

export default App;
