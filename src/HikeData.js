import React from 'react';
import {Card} from 'react-bootstrap'

function HikeData ({hike}) {

    let {id, park, name, length, description} = hike

    let justNum = length.replace(/\D/g, '')
    
    justNum /= Math.pow(10, 1)

    return (
        <div class="card text-center">
          <div class="card-header">
            {park}
          </div>
          <div class="card-body">
            <h5 class="card-title">{name}</h5>
            <p class="card-text">{description}</p>
            <p class="font-weight-bold">{length}</p>
          </div>
        </div>
    ) 
}

export default HikeData