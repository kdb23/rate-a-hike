import React from 'react'
import {Container, Row, Col, Button } from 'react-bootstrap'


function ParkCard({image,name}) {

  return (
    <Container>
      <Row>
        <div class="col-4">
    <div class="card">
        <img class="card-img-top" src={image} alt={name} />
        <div class="card-body">
            <p class="card-text">{name}</p>
        </div>
        <Button type="button" class="btn btn-primary">View More</Button>
    </div>
    </div>
    </Row>
   </Container> 
  )
}

export default ParkCard