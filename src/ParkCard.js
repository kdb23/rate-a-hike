import React from 'react'

function ParkCard({image,name}) {

  return (
    <div>
    <h1> Hi </h1>
    <div class="container">
      <div class="row">
        <div class="col-4">
    <div class="card">
        <img class="card-img-top" src={image} alt={name} />
        <div class="card-body">
            <p class="card-text">{name}</p>
        </div>
        <button type="button" class="btn btn-primary">View More</button>
    </div>
    </div>
    </div>
    </div>
    </div>
  )
}

export default ParkCard