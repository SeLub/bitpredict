import React from 'react'
import SecondLineBox from './SecondLineBox'

export default function SeconLine({dash}){

	let cols = 6 
	function createSecondLine({dash}){
		if (dash === 'graph') { 
			cols = 4
			return (
				<>
				<SecondLineBox cols={cols} header="h1" text="Text1" button="" style = "dark"/>
				<SecondLineBox cols={cols} header="h2" text="Text2" button=""  style = "light"/>
				<SecondLineBox cols={cols} header="h3" text="Text3" button="" style = "dark"/>
				</>
					)
		} else {
			cols = 6
			return	(<><SecondLineBox cols={cols} header="h4" text="Text4" button="Button 4" style = "dark"/>
					<SecondLineBox cols={cols} header="h5" text="Text5" button="Button 5" style = "light" /></>)
		}

	}
    
    return(
    <div class="row align-items-md-stretch">
    {createSecondLine({dash})}
    </div>
    )
  }
