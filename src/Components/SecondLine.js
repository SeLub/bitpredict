import React, {useContext} from 'react'
import Col from 'react-bootstrap/Col'
import SecondLineBox from './SecondLineBox'
import { LanguageContext } from '../context'
import {DICT} from '../lang'

const SecondLine = ({dash}) =>{

	const [langContext] = useContext(LanguageContext);

	let res = dash === 'graph' ? (
		<>
		<Col xs={12} md={4}><SecondLineBox border='primary'/></Col>
		<Col xs={12} md={4}><SecondLineBox border='success'/></Col>
		<Col xs={12} md={4}><SecondLineBox border='warning'/></Col></>) : (
		<>
		<Col xs={12} md={6}><SecondLineBox 

			 bg='light'
			 text='dark'
			 title={DICT[`TitleHowItWorks.${langContext}`]}
			 slogan={DICT[`SloganHowItWorks.${langContext}`]}
			 fullText ={DICT[`TextHowItWorks.${langContext}`]}
			 textButton ={DICT[`TextButtonHowItWorks.${langContext}`]}
			 
		/></Col>
		<Col xs={12} md={6}><SecondLineBox 

			 bg='light' 
			 text='dark'
			 title={DICT[`TitleStepsToDo.${langContext}`]}
			 slogan={DICT[`SloganStepsToDo.${langContext}`]}
			 fullText ={DICT[`TextStepsToDo.${langContext}`]}
			 textButton ={DICT[`TextButtonStepsToDo.${langContext}`]}

		/></Col></>)

	return(
	<>
		{res}
	</>	
		)
}
export default SecondLine