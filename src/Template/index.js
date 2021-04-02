import React from 'react';
//import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row'
//import Jumbotron from 'react-bootstrap/Jumbotron'
//import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
//import InputGroup from 'react-bootstrap/InputGroup'
//import FormControl from 'react-bootstrap/FormControl'

function Template(props){

    return ( 

      <Container>
        <Row>
          <Col xs={12} md={8}>

                <Card border="success">
                 <Card.Header>{props.panelHeader}</Card.Header>
                     <Card.Body>
                     <canvas id="myChart" width="400" height="400"></canvas>
                      </Card.Body>
                    <Card.Footer className="text-muted">{props.panelFooter}</Card.Footer>
                </Card>

          </Col>
          <Col xs={12} md={4}>
                <Card bg="success">
                      <Card.Body>
                       {props.panelSidebar}
                      </Card.Body>
                </Card>
          </Col>
</Row>


  </Container>


     );
}

export default Template;