import React, {useContext} from 'react'
import Card from 'react-bootstrap/Card'
import { LanguageContext } from '../context'
import {DICT} from '../lang'

const SettingsPanel = ({toggleTheme}) =>{

const [langContext, setLangContext] = useContext(LanguageContext);

	return(
<Card>
  <Card.Header>{DICT[`SettingsPanelTitle.${langContext}`]}</Card.Header>
  <Card.Body>
    <Card.Title>{DICT[`SettingsGlobalTitle.${langContext}`]}</Card.Title>

    <div className="form-check form-switch">
  			<input className="form-check-input" type="checkbox" id="themeSwitch" 
        onChange={() => {toggleTheme()}} />
  			<label className="form-check-label" htmlFor="themeSwitch">
        {DICT[`SettingsSelectTheme.${langContext}`]}</label>
		</div>
		<div className="form-check form-switch">
  			<input className="form-check-input" type="checkbox" id="langSwitch" 
          onChange={() => {
            
           if (langContext === 'ENG'){ 
                      localStorage.setItem('language', 'RU')
                      setLangContext('RU') }
          else{
                      localStorage.setItem('language', 'ENG')
                      setLangContext('ENG')}
            }}/>
  			<label className="form-check-label" htmlFor="langSwitch">
        {DICT[`SettingsSelectLang.${langContext}`]}</label>
		</div>

  </Card.Body>
</Card>
		)
}

export default SettingsPanel