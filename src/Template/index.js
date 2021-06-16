import React from 'react';
import Row from 'react-bootstrap/Row'
//import Jumbotron from 'react-bootstrap/Jumbotron'
//import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'

const Template = (props) => {

    return ( 

<Container>
  <Row>
    <Col sm={12}>{props.panelHeader}</Col>
  </Row>
  <Row>
    <Col sm={12}>{props.panelMain}</Col>
  </Row>
  <Row className="gy-2">
    {props.panelSecondLine}
  </Row>
  <Row>
    <Col sm={12}>{props.panelFooter}</Col>
  </Row>
</Container>
)
}

export default Template