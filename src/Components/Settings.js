import React from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

const SettingsPanel = ({toggleTheme, toggleLanguage}) =>{
	return(
<Card>
  <Card.Header>Settings Panel</Card.Header>
  <Card.Body>
    <Card.Title>Settings Panel</Card.Title>

      	<div className="form-check form-switch">
  			<input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault" onChange={() => {toggleTheme()}} />
  			<label className="form-check-label" htmlFor="flexSwitchCheckDefault">Select Language (ENG - RU)</label>
		</div>
		<div className="form-check form-switch">
  			<input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault" onChange={() => {toggleLanguage()}}/>
  			<label className="form-check-label" htmlFor="flexSwitchCheckDefault">Select Theme (Light - Dark)</label>
		</div>


    <Button variant="primary">Apply</Button>
  </Card.Body>
</Card>
		)
}

export default SettingsPanel