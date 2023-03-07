import React from 'react'
import {Container, Row } from 'react-bootstrap'
import { Popover,OverlayTrigger, ButtonToolbar, Button } from 'react-bootstrap';


function ParkCard({image,name, peak, location, size, description}) {
  const popoverClick = (
    <Popover id="popover-trigger-click" title="Testing PopOver">
      <h4>{name}</h4>
      <p>Description:{description}</p>
      <p>Location:{location}</p>
      <p>Size:{size}</p>
      <p>Highest Peak:{peak}</p>
      </Popover>
  );

  return (
    <Container>
      <Row>
        <div class="col-4">
       <div class="card">
        <img class="card-img-top" src={image} alt={name} />
        <div class="card-body">
            <p class="card-text">{name}</p>
        </div>
      <ButtonToolbar>
      <OverlayTrigger trigger="click" placement="right" overlay={popoverClick}>
      <Button>View More</Button>
    </OverlayTrigger>
    </ButtonToolbar>
    </div>
    </div>
    </Row>
   </Container> 
  
  )
}

export default ParkCard