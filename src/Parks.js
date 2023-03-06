import React from 'react';
import ParkCard from './ParkCard';

function Parks({parks}) {
  const parkCard = parks.map((parkObj => {
    return <ParkCard 
        key={parkObj.id}
        name={parkObj.name}
        image={parkObj.image}
      />
  }))
  return (
    <div>{parkCard}</div>

  )
}

export default Parks