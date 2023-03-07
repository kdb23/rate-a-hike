import React from 'react';
import ParkCard from './ParkCard';

function Parks({parks}) {
  const parkCard = parks.map((parkObj => {
    return <ParkCard 
        key={parkObj.id}
        name={parkObj.name}
        image={parkObj.image}
        description={parkObj.description}
        location={parkObj.location}
        size={parkObj.size}
        peak={parkObj["highest-point"]}
      />
  }))
  return (
    <div>{parkCard}</div>

  )
}

export default Parks