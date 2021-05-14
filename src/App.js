import { useState } from 'react'
import './App.css';
import LineDemo from './Graph'
import 'react-modern-calendar-datepicker/lib/DatePicker.css';
import { Calendar } from "react-modern-calendar-datepicker";
import * as SETTINGS from './SETTINGS'
import {getMinMaxDates, dateWithZero} from './funcs/dates'

function App() {

let [titleChart, lablesChart, dataChart] = [SETTINGS.TITLE,SETTINGS.LABELS,SETTINGS.DATA]
const [chart, setChart] = useState({titleChart, lablesChart, dataChart})
let [defaultFrom, defaultTo] = getMinMaxDates(lablesChart)
const defaultRange = {from: defaultFrom,to: defaultTo};
const [selectedDayRange, setSelectedDayRange] = useState(defaultRange);

function newDateRange(selectedDayRange){
  setSelectedDayRange(selectedDayRange)
  let dateFrom = 
  String(Object.values(selectedDayRange.from)[2])+'-'+
  dateWithZero(Object.values(selectedDayRange.from)[1]+1)+'-'+
  dateWithZero(Object.values(selectedDayRange.from)[0])
  
  let indexFrom = '', indexTo ='', dateTo = ''
 
  if (selectedDayRange.to !== null){
        
        dateTo = 
        String(Object.values(selectedDayRange.to)[2])+'-'+
        dateWithZero(Object.values(selectedDayRange.to)[1]+1)+'-'+
        dateWithZero(Object.values(selectedDayRange.to)[0])
        
        indexFrom = lablesChart.findIndex( el => { return el === dateFrom })
        indexTo = lablesChart.findIndex( el => { return el === dateTo })
        if (indexTo === -1) { indexTo = lablesChart.length-1}
        if (indexFrom === -1) { indexFrom = 0}
console.log(lablesChart.slice(indexFrom,indexTo+1))
console.log(dataChart.slice(indexFrom,indexTo+1))
      } 
      else {
        console.error('Not selected Date TO',selectedDayRange.to)
      }

console.log('From: ',dateFrom, indexFrom, 'To: ', dateTo, indexTo)

}
  
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
      onChange={newDateRange}
      shouldHighlightWeekends
    />
      </div>        
    </div>
  );
}

export default App;
