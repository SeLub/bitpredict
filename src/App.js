import React from 'react'
import {useState} from 'react'
import './App.css';
import Template from './Template'
import Footer from './Components/Footer'
import Header from './Components/Header'
import MainPanel from './Components/MainPanel'
import SecondLine from './Components/SecondLine'
import useTheme from './hooks/useTheme'
import useLanguage from './hooks/useLanguage'
import { Context } from './context'

function App() {

  //* Define props for Template with inintial settings
  let [panelHeader, panelFooter, panelMain, panelSecondLine] = ['Bitcoin Price Analysis and Extrapolation predict', 'Data Updated ', 'Main Panel', 'panelSecondLine']
  
  //* Fix Main Panel State: Initial = 'welcome', for Graph = 'graph', for Setting = 'settings'
  let [dash, setDash] = useState('welcome')
  const showSettingsPanel =() =>{ dash === 'graph' ? setDash('settings') : setDash('graph') }

  //Get 'theme' from local storage or set default
  const [theme, toggleTheme] = useTheme()

  //Get 'language' from local storage or set default
  const [language, toggleLanguage] = useLanguage()

const [context, setContext] = useState('ENG');


   
  //* Set props for Template. Props are our Components
  panelHeader = <Header showSettingsPanel={showSettingsPanel}/>
  panelMain = <MainPanel dash={dash} toggleTheme={toggleTheme} toggleLanguage={toggleLanguage}/>
  panelSecondLine = <SecondLine dash={dash} />
  panelFooter = <Footer />

  return (
<Context.Provider value={[context, setContext]}>
  <Template 
          panelHeader={panelHeader}
          panelMain={panelMain}
          panelSecondLine={panelSecondLine}
          panelFooter={panelFooter}
    />
  </Context.Provider>


  );
}

export default App;