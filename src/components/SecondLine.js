import React from 'react'
import SecondLine1 from './SecondLine1'
import SecondLine2 from './SecondLine2'
import SecondLine3 from './SecondLine3'

export default function SeconLine({dash}){
	let cols = 6 
//	if (dash === 'graph') { cols = 4}
		// else {cols = 6}
	function createSecondLine({dash}){
		if (dash === 'graph') { 
			cols = 4
			return (<><SecondLine1 cols={cols}/>
					<SecondLine2 cols={cols}/>
					<SecondLine3 cols={cols}/></>
					)
		} else {
			cols = 6
			return	(<><SecondLine1 cols={cols}/>
					<SecondLine3 cols={cols}/></>)
		}

	}
    
    return(
    <div class="row align-items-md-stretch">
    {createSecondLine({dash})}
    </div>
    )
  }
