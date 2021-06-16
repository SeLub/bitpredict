import React, {useContext} from 'react'
import { LanguageContext } from '../context'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import {DICT} from '../lang'

const Joombatron = ({setDash}) =>{
	const [langContext] = useContext(LanguageContext);
	return(
<Card className="text-center">

  <Card.Body>
    <Card.Title><h1>{DICT[`TitleJoombatron.${langContext}`]}</h1></Card.Title>
      <h5>{DICT[`TextJoombatron.${langContext}`]}</h5>
      <Button variant="primary" onClick={()=>{setDash('graph')}}>{DICT[`TextButtonJoombatron.${langContext}`]}</Button>
  </Card.Body>

</Card>
		)
}

export default Joombatron