import React from 'react'
import Col from 'react-bootstrap/Col'
import SecondLineBox from './SecondLineBox'

const SecondLine = ({dash}) =>{

	let res = dash === 'graph' ? (
		<>
		<Col xs={12} md={4}><SecondLineBox border='primary'/></Col>
		<Col xs={12} md={4}><SecondLineBox border='success'/></Col>
		<Col xs={12} md={4}><SecondLineBox border='warning'/></Col></>) : (
		<>
		<Col xs={12} md={6}><SecondLineBox bg='dark' text='light'/></Col>
		<Col xs={12} md={6}><SecondLineBox bg='light'text='dark'/></Col></>)

	return(
	<>
		{res}
	</>	
		)
}
export default SecondLine