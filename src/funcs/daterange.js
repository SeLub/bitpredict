import {dateWithZero} from './dates'
function newDateRange(selectedDayRange, chart){
  let [titleChart, lablesChart, dataChart] = Object.values(chart)
  
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
//console.log(lablesChart.slice(indexFrom,indexTo+1))
//console.log(dataChart.slice(indexFrom,indexTo+1))
let newTitleChart =`${titleChart} From: ${dateFrom} To: ${dateTo}`
let newLabelsChart = lablesChart.slice(indexFrom,indexTo+1)
let newDataChart = dataChart.slice(indexFrom,indexTo+1)
let newChart = [
    newTitleChart, 
    newLabelsChart, 
    newDataChart
]
console.log(newChart)
return newChart
      } 
      else {
        console.error('Not selected Date TO',selectedDayRange.to)
      }

//console.log('From: ',dateFrom, indexFrom, 'To: ', dateTo, indexTo)
}

export default newDateRange