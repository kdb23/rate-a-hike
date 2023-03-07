//import './App.css';
import {useEffect, useState} from "react"
import Parks from './Parks';
import Header from './Header';
import ParkForm from './ParkForm';
import NavBar from './NavBar';
import { Carousel } from 'react-bootstrap';
//import { Route } from 'react-router-dom';

function Home () {
const [parks, setParks] = useState([])

useEffect(() => {
    fetch("http://localhost:3002/parks")
      .then(r => r.json())
      .then(setParks)
  }, [])

  const addProject = (newPark) => {
    setParks([...parks, newPark])
  }

  
    return (
        <div>
        
        <Carousel></Carousel>
        <ParkForm addProject={addProject}/>
        <Parks parks={parks}/>
      </div>  
    )

  }

  export default Home;