import React from 'react'
import {useState} from 'react'
import * as SETTINGS from './SETTINGS'
import './App.css';
import SecondLine from './components/SecondLine'
import Header from './components/Header'
import Footer from './components/Footer'
import LineDemo from './components/Graph'

function App() {
  let [titleChart, lablesChart, dataChart] = [SETTINGS.TITLE,SETTINGS.LABELS,SETTINGS.DATA]
  const [chart, setChart] = useState({titleChart, lablesChart, dataChart})

  console.log(chart)
  
  let [dash, setDash] = useState('welcome')

  const showSettingsPanel =() =>{ dash === 'graph' ? setDash('settings') : setDash('graph') }

  //const setGraph =() =>{return(setDash('graph'))}

  const MainPanel = ({dash}) => {

    const wr = (dash === 'graph') ? <LineDemo chart={chart}  /> : (dash === 'settings') ? '...Settings' : ''
    
        return (
          
          <div className="p-2 mb-4 rounded-3" id={dash}>
                {wr}
          </div>
          )}

  const Panels = ({dash}) => {return SecondLine({dash})} 

  return (

  <div className="container px-4">
    <Header showSettingsPanel={showSettingsPanel}/>
    <MainPanel dash={dash} />
    
    <Panels dash={dash} />
    <Footer />
  
  </div>

  );
}

export default App;
