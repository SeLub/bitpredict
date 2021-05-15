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
          ()=>{
            [titleChart, lablesChart, dataChart] = [SETTINGS.TITLE,SETTINGS.LABELS,SETTINGS.DATA]
            setChart({titleChart, lablesChart, dataChart})
            setSelectedDayRange(defaultRange)
          }} >RESET</button>
      </div>
      <div className="Panel">
        <Calendar
      value={selectedDayRange}
      onChange={(selectedDayRange, chart) => selectRange(selectedDayRange, chart)}
      shouldHighlightWeekends
    />
      </div>        
    </div>
  );

function selectRange(selectedDayRange){
        setSelectedDayRange(selectedDayRange);
        if (newDateRange(selectedDayRange,chart) !== undefined ){
        [titleChart, lablesChart, dataChart] = newDateRange(selectedDayRange,chart)
        setChart({titleChart, lablesChart, dataChart})
        console.log(newDateRange(selectedDayRange,chart))}
      }

}

export default App;
