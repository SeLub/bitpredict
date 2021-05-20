import React from 'react'
import {useState} from 'react'
import './App.css';
import Template from './Template'
import Footer from './Components/Footer'
import Header from './Components/Header'
import MainPanel from './Components/MainPanel'
import SecondLine from './Components/SecondLine'
import useTheme from './hooks/useTheme'
import { LanguageContext } from './context'

function App() {

  //* Define props for Template with inintial settings
  let [panelHeader, panelFooter, panelMain, panelSecondLine] = ['Bitcoin Price Analysis and Extrapolation predict', 'Data Updated ', 'Main Panel', 'panelSecondLine']
  
  //* Fix Main Panel State: Initial = 'welcome', for Graph = 'graph', for Settings = 'settings'
  let [dash, setDash] = useState('welcome')
  const showSettingsPanel =() =>{ dash === 'graph' ? setDash('settings') : setDash('graph') }

  //Get 'theme' from local storage or set default
  const [theme, toggleTheme] = useTheme()

  //Set initial state for 'language'
  const [langContext, setLangContext] = useState(localStorage.getItem('language') || 'ENG')


   
  //* Set props for Template. Props are our Components
  panelHeader = <Header showSettingsPanel={showSettingsPanel}/>
  panelMain = <MainPanel dash={dash} toggleTheme={toggleTheme}/>
  panelSecondLine = <SecondLine dash={dash} theme={theme}/>
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