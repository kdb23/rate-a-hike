import React from 'react';
import HikeData from './HikeData.js'
import {Dropdown, button} from "react-bootstrap";

function Hikes ({parks, hikes, changeSearch, changeCat, changeSearchNum }) {

  let parkList = parks.map((park) => {
    return <option value={park.name}>{park.name}</option>
  })


    let hikeList = hikes.map((hike)=> {
        return <HikeData key={hike.id} class='col' hike={hike}/>
    })

  const handleChange = (e) => {
    changeSearch(e.target.value)
  }

  const handleSelect = (e) => {
    changeCat(e.target.value)
  }

  const handleNumber = (e) => {
    changeSearchNum(e.target.value)
  }

    return (
    <div>
        <div class="p-5 text-center bg-light">
          <h2 class="mb-3">Find The Perfect Hike For You!</h2>
          <select class="form-select" onChange={handleSelect} aria-label="Default select example">
            <option selected value="" >Select Park</option>
            {parkList}
          </select>
          <div class="input-group">
            <input type="search" class="form-control rounded" placeholder="Search" aria-label="Search" onChange={handleChange} aria-describedby="search-addon" />
          </div>
          <div class="form-outline">
              <input type="number" id="typeNumber" class="form-control" placeholder="Maximum Number of Miles?" onChange={handleNumber}/>
              <label class="form-label" for="typeNumber">Number input</label>
          </div>
        </div>
      <div class="row row-cols-2 ">
        {hikeList}
      </div>
    </div>
    ) 
}

export default Hikes