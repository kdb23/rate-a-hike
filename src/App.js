
import './App.css';
import {useEffect, useState} from "react"
import Parks from './Parks';
import Header from './Header';
import ParkForm from './ParkForm';
import NavBar from './NavBar';
import { Carousel } from 'react-bootstrap';


function App() {
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
      <Header></Header>
      <Carousel></Carousel>
      <NavBar></NavBar>
      <ParkForm addProject={addProject}/>
      <Parks parks={parks}/>
    </div>
  );
}

export default App;
