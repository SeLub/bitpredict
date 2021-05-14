import { useState } from 'react'
import './App.css';
import LineDemo from './Graph'
import 'react-modern-calendar-datepicker/lib/DatePicker.css';
import { Calendar } from "react-modern-calendar-datepicker";
import * as SETTINGS from './SETTINGS'
import {getMinMaxDates} from './funcs/dates'
import newDateRange from './funcs/daterange'

function App() {

let [titleChart, lablesChart, dataChart] = [SETTINGS.TITLE,SETTINGS.LABELS,SETTINGS.DATA]
const [chart, setChart] = useState({titleChart, lablesChart, dataChart})
let [defaultFrom, defaultTo] = getMinMaxDates(lablesChart)
const defaultRange = {from: defaultFrom,to: defaultTo};
const [selectedDayRange, setSelectedDayRange] = useState(defaultRange);


  
  return (
    <div className="App">
      <div className="Graph">
        <LineDemo chart={chart} />
        <button onClick={
          ()=>{}} >Step</button>
      </div>
      <div className="Panel">
        <Calendar
      value={selectedDayRange}
      onChange={(selectedDayRange, cahrt) => {setSelectedDayRange(selectedDayRange);newDateRange(selectedDayRange,chart)}}
      shouldHighlightWeekends
    />
      </div>        
    </div>
  );
}

export default App;
