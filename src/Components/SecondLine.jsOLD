import React from 'react'
import SecondLineBox from './SecondLineBox'

export default function SeconLine({dash}){

	let cols = 6 
	function createSecondLine({dash}){
		if (dash === 'graph') { 
			cols = 4
			return (
				<>
				<SecondLineBox cols={cols} header="Text header 1" text="Text1" button="" theme = {'dark'}/>
				<SecondLineBox cols={cols} header="Text header 2" text="Text2" button=""  theme = {'light'}/>
				<SecondLineBox cols={cols} header="Text header 3" text="Text3" button="" theme = {'dark'}/>
				</>
					)
		} else {
			cols = 6
			return	(<><SecondLineBox cols={cols} header={'Text header 4'} text='Jast text' button="Button 4" theme = 'dark' mod="#exampleModal"/>
					<SecondLineBox cols={cols} header={"Text header 5"} text="Text 5" button="Button 5" theme = 'light' mod="#exModalTwo"/></>)
		}

	}
    
    return(
    <div className="row align-items-md-stretch">
    {createSecondLine({dash})}
    </div>
    )
  }
