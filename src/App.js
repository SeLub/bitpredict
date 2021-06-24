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
   let dateTo = new Date(), d = new Date(), dateFrom = new Date(d.setMonth(d.getMonth() - 1))
   const defaultFrom = { year: dateFrom.getUTCFullYear(), month: dateFrom.getUTCMonth() + 1, day: dateFrom.getUTCDate(), };
   const defaultTo = { year: dateTo.getUTCFullYear(), month: dateTo.getUTCMonth() + 1, day: dateTo.getUTCDate(), };
   const defaultRange = { from: defaultFrom, to: defaultTo, };

const [selectedDayRange, setSelectedDayRange] = useState({from:null, to:null});
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
  
  useEffect(() => {
    if (window.localStorage.getItem('currentRange')) {
    setSelectedDayRange(JSON.parse(window.localStorage.getItem('currentRange')));
  } else {
    setSelectedDayRange(defaultRange)
  }
  }, []);

    useEffect(() => {
    if (selectedDayRange.to !== null) {
    window.localStorage.setItem('currentRange', JSON.stringify(selectedDayRange));
    fetchAPIdata(selectedDayRange)
    }}, [selectedDayRange]);

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

    const fetchAPIdata = async(selectedDayRange) => {
      let start = selectedDayRange.from.year + '-' + fillZerro(selectedDayRange.from.month) + '-' + fillZerro(selectedDayRange.from.day),
          end = selectedDayRange.to.year + '-' +fillZerro(selectedDayRange.to.month) + '-' + fillZerro(selectedDayRange.to.day)

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
  panelSecondLine = <SecondLine dash={dash} theme={theme} selectedDayRange={selectedDayRange} setSelectedDayRange={setSelectedDayRange}/>
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