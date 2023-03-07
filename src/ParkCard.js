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
    <div class="card text-center">
      <img class="card-img-top" style={{ width: '100%', height: '100%' }} src={image} alt={name} />
      <div class="card-body">
          <p class="card-text">{name}</p>
      </div>
      <ButtonToolbar>
      <OverlayTrigger trigger="click" placement="right" overlay={popoverClick}>
      <Button>View More</Button>
    </OverlayTrigger>
    </ButtonToolbar>
   </div> 
  
  )
}

export default ParkCard