import React from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

const SecondLineBox = (props) => {
	return (
<Card border={props.border} bg={props.bg} text={props.text}>
  <Card.Header>{props.title}</Card.Header>
  <Card.Body>
    <Card.Title>{props.slogan}</Card.Title>
    <Card.Text>
    {props.fullText}
    </Card.Text>
    {props.textButton ? <Button onClick={()=>{}} variant="primary">{props.textButton}</Button> : ''}
    
  </Card.Body>
</Card>
)
}

export default SecondLineBox