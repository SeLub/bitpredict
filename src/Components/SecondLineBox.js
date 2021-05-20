import React, {useContext} from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import { Context } from '../context'

const SecondLineBox = (props) => {
		const [context, setContext] = useContext(Context);
	return (
<Card border={props.border} bg={props.bg} text={props.text}>
  <Card.Header>Featured</Card.Header>
  <Card.Body>
    <Card.Title>Special title treatment</Card.Title>
    <Card.Text>
    {context}
      With supporting text below as a natural lead-in to additional content.
    }
    </Card.Text>
    <Button onClick={() => setContext('RU')} variant="primary">Go somewhere</Button>
  </Card.Body>
</Card>
)
}

export default SecondLineBox