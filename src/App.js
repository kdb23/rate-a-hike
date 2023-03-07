
import './App.css';
//import {useEffect, useState} from "react"
//import Parks from './Parks';
import Header from './Header';
import ParkForm from './ParkForm';
import NavBar from './NavBar';
import {useEffect, useState} from "react"
import { Carousel } from 'react-bootstrap';
import { Route, Switch } from 'react-router-dom';
import Home from './Home'
import ParkCard from './ParkCard';
import Parks from './Parks'

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
      
      <Header />
      <Carousel/>
      <NavBar></NavBar>
      <Switch>
        <Route exact path = "/"> 
          <Home parks={parks} addProject={addProject}/>
        </Route>
        <Route exact path = "/about">
          <Parks parks={parks}/>
          </Route>
        <Route exact path = "/parkForm"> 
          <ParkForm />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
