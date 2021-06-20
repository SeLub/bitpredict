import React from 'react'
import {useEffect, useState} from 'react'
import './App.css';
import Template from './Template'
import Footer from './Components/Footer'
import Header from './Components/Header'
import MainPanel from './Components/MainPanel'
import SecondLine from './Components/SecondLine'
import useTheme from './hooks/useTheme'
import { LanguageContext } from './context'
//import * as SETTINGS from './SETTINGS'

function App() {
  let currentDate = new Date()
  let fromDefaultDate = new Date(); fromDefaultDate.setMonth(fromDefaultDate.getMonth());
  const defaultFrom = {year: currentDate.getFullYear(), month: currentDate.getMonth(), day:currentDate.getDate()}
  const defaultTo = {year:fromDefaultDate.getFullYear(),month:fromDefaultDate.getMonth()+1, day:fromDefaultDate.getDate()}
  const defaultRange = {from: defaultFrom, to:defaultTo}

  const [currentRange, setCurrentRange] = useState(defaultRange)
  //Возможно оставть данные по умолчанию, чтобы их использовать для работы без интернета оф-лайн
  // Load data for Graph from './SETTINGS' anf fix the state
  // let [titleChart, lablesChart, dataChart] = [SETTINGS.TITLE,SETTINGS.LABELS,SETTINGS.DATA]
  //const [chart, setChart] = useState({titleChart, lablesChart, dataChart})
  const [chart, setChart] = useState({})
  //* Define props for Template with inintial settings
  let [panelHeader, panelFooter, panelMain, panelSecondLine] = ['Bitcoin Price Analysis and Extrapolation predict', 'Data Updated ', 'Main Panel', 'panelSecondLine']
  
  //* Fix Main Panel State: Initial = 'welcome', for Graph = 'graph', for Settings = 'settings'
  let [dash, setDash] = useState('welcome')
  const showSettingsPanel =() =>{ dash === 'graph' ? setDash('settings') : setDash('graph') }

  //Get 'theme' from local storage or set default
  const [theme, toggleTheme] = useTheme()

  //Set initial state for 'language'
  const [langContext, setLangContext] = useState(localStorage.getItem('language') || 'ENG')
  
  useEffect(()=>{
    console.log(currentRange)
    if (currentRange.to !== null){
      setCurrentRange(currentRange)
      localStorage.setItem('currentRange', JSON.stringify(currentRange))
      fetchAPIdata(currentRange)

    }
  }
   ,[currentRange])

  console.log(localStorage.getItem('currentRange'))

  useEffect(()=>{

//console.log(defaultRange, currentRange)
localStorage.getItem('currentRange') ? setCurrentRange(JSON.parse(localStorage.getItem('currentRange'))) : setCurrentRange(defaultRange)

    fetchAPIdata(currentRange)
  }
    ,[])


  const getActualData = (obj) =>{   
    let dataObj = {
        titleChart:`Bicoin Prices, USD\n`,
        lablesChart:[],
        dataChart:[]
        }

    for (let [key, value] of Object.entries(obj.bpi)) {
        dataObj.lablesChart.push(key)
        dataObj.dataChart.push(value)
    }
    return dataObj
  }

    const fetchAPIdata = async(currentRange) => {
      let start = currentRange.from.year + '-' + fillZerro(currentRange.from.month) + '-' + fillZerro(currentRange.from.day),
          end = currentRange.to.year + '-' +fillZerro(currentRange.to.month) + '-' + fillZerro(currentRange.to.day)

      let url = `https://api.coindesk.com/v1/bpi/historical/close.json?start=${start}&end=${end}`
      //console.log(url)
      const response = await fetch(url)
      const APIdata = await response.json()
      const API = await getActualData(APIdata) 
      setChart(API)
    }

    const fillZerro = (num) => { return num<9 ? '0'+ num : num} 



  //* Set props for Template. Props are our Components
  panelHeader = <Header showSettingsPanel={showSettingsPanel}/>
  panelMain = <MainPanel dash={dash} toggleTheme={toggleTheme} chart={chart} setDash={setDash}/>
  panelSecondLine = <SecondLine dash={dash} theme={theme} currentRange={currentRange} setCurrentRange={setCurrentRange}/>
  panelFooter = <Footer />

  return (
<LanguageContext.Provider value={[langContext, setLangContext]}>
  <Template 
          panelHeader={panelHeader}
          panelMain={panelMain}
          panelSecondLine={panelSecondLine}
          panelFooter={panelFooter}
    />
  </LanguageContext.Provider>


  );
}

export default App;