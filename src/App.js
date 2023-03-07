
import './App.css';
import Header from './Header';
import ParkForm from './ParkForm';
import NavBar from './NavBar';
import {useEffect, useState} from "react"
import { Carousel } from 'react-bootstrap';
import { Route, Switch } from 'react-router-dom';
import Home from './Home'
import ParkCard from './ParkCard';
import Parks from './Parks'
import Hikes from './Hikes'
import Location from './Location'

function App() {
  const [parks, setParks] = useState([])
  const [hikes, setHikes] = useState([])

  console.log(parks)

  useEffect(() => {
    fetch("http://localhost:3002/parks")
      .then(r => r.json())
      .then(setParks)
  }, [])

  useEffect(() => {
    fetch("http://localhost:3002/hikes")
      .then(r => r.json())
      .then(setHikes)
  }, [])

  const addProject = (newPark) => {
    setParks([...parks, newPark])
  }


  return (
    <div>
      
      <Header />
      <Carousel/>
      <NavBar></NavBar>
      <Switch>
        <Route exact path = "/"> 
          <Home parks={parks} addProject={addProject}/>
        </Route>
        <Route exact path = "/hikes">
          <Hikes parks={parks} hikes={hikes}/>
          </Route>
        <Route exact path = "/parkForm"> 
          <ParkForm addProject={addProject}/>
        </Route>
        <Route exact path="/location">
          <Location />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
