import React from 'react'

function ParkCard({image,name}) {

  return (
    <div class="card"> 
        <img class="card-img-top" src={image} alt={name} />
        <div calss="card-body">
            <p class="card-text">{name}</p>
        </div>
        <button>View More</button>
    </div>
  )
}

export default ParkCard