import React from 'react'
import {useState, useEffect, useRef} from 'react'
import './App.css';
import SecondLine from './components/SecondLine'
import Header from './components/Header'
import Footer from './components/Footer'

function App() {
  
  let [dash, setDash] = useState('welcome')

  const setSettings =() =>{return(setDash('settings'))}

  const setGraph =() =>{return(setDash('graph'))}

const Dashboard = ({dash}) => {


  if (dash === 'graph') {
    return(
    <div class="p-2 mb-4 rounded-3" id="graph">
    <button class="btn btn-primary btn-lg" type="button">RESET</button>
    </div>
    )  }
    else if (dash === 'settings') { 
  return(
    <div class="p-2 mb-4 rounded-3" id="settings">
    <div class="container">


<div class="form-check form-switch">
  <input class="form-check-input" type="checkbox" id="flexSwitchCheckDefault" />
  <label class="form-check-label" for="flexSwitchCheckDefault">Default switch checkbox input</label>
</div>
<div class="form-check form-switch">
  <input class="form-check-input" type="checkbox" id="flexSwitchCheckChecked" checked />
  <label class="form-check-label" for="flexSwitchCheckChecked">Checked switch checkbox input</label>
</div>



  <div class="row">
    <div class="col-sm-8">col-sm-8</div>
    <div class="col-sm-4">col-sm-4</div>
  </div>
  <div class="row">
    <div class="col-sm">col-sm</div>
    <div class="col-sm">col-sm</div>
    <div class="col-sm">col-sm</div>
  </div>
</div>
<button onClick={setGraph} class="btn btn-primary btn-lg" type="button">APPLY</button>
    </div>
    ) 

    }
      else {
          return(
    <div class="p-5 mb-4 rounded-3" id="welcome">
      <div class="container-fluid py-5" style={{backgroundColor: 'white', opacity: 0.85}}>
        <h1 class="display-5 fw-bold">Predict of unpredictable</h1>
        <p class="col-md-8 fs-4">Using a series of methods, we try to predict Bitcoin price. This experemental project uses Coindesk API with bitcoin prices for the last month and math methods of extrapolation. Just hit the button to look at the future.</p>
        <button onClick={setGraph} class="btn btn-primary btn-lg" type="button">START</button>
      </div>
    </div>
    ) 
      }
    
  
}

const Panels = ({dash}) => {
  
  return SecondLine({dash})
} 



  return (

<div class="container px-4">
<Header setSettings={setSettings}/>
<Dashboard dash={dash} />
<Panels dash={dash} />
<Footer />
  
</div>

  );
}

export default App;
