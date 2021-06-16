import React,{useState} from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import ShowModal from './Modal'

const SecondLineBox = (props) => {
	    const [showModal, setShowModal] = useState(false);
	return (
<Card border={props.border} bg={props.bg} text={props.text}>
  <Card.Header>{props.title}</Card.Header>
  <Card.Body>
    <Card.Title>{props.slogan}</Card.Title>
    <Card.Text>
    {props.fullText}
    </Card.Text>

    {props.textButton ? 
    	props.modal ? 
    	<Button onClick={() => setShowModal(true)} variant="primary">{props.textButton}</Button> : 
    	<Button onClick={()=>{}} variant="primary">{props.textButton}</Button> : ''}
    
  </Card.Body>
  <ShowModal modal={props.modal} showModal={showModal} setShowModal={setShowModal}/>
</Card>

)
}

export default SecondLineBox