import React from 'react'
import {useState} from 'react'
import './App.css';
import SecondLine from './components/SecondLine'
import Header from './components/Header'
import Footer from './components/Footer'

function App() {
  
  let [dash, setDash] = useState('welcome')

  const showSettingsPanel =() =>{ dash === 'graph' ? setDash('settings') : setDash('graph') }

  //const setGraph =() =>{return(setDash('graph'))}

  const MainPanel = ({dash}) => {
    return (<><div className="p-2 mb-4 rounded-3" id={dash}></div></>)}

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
