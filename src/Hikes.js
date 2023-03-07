import React from 'react';
import HikeData from './HikeData.js'

function Hikes ({parks, hikes }) {
    

    let hikeList = hikes.map((hike)=> {
        return <HikeData class='col' hike={hike}/>
    })

    return (
    <div class="row row-cols-2 ">
      {hikeList}
    </div>
    ) 
}

export default Hikes