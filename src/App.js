
import './App.css';
//import {useEffect, useState} from "react"
//import Parks from './Parks';
import Header from './Header';
import ParkForm from './ParkForm';
import NavBar from './NavBar';
import { Carousel } from 'react-bootstrap';
import { Route, Switch } from 'react-router-dom';
import Home from './Home'
import ParkCard from './ParkCard';

function App() {

  return (
    <div>
      
      <Header />
      <Carousel/>
      <NavBar></NavBar>
      <Switch>
        <Route exact path = "/"> 
          <Home />
        </Route>
        <Route exact path = "/about">
          <ParkCard />
          </Route>
        <Route exact path = "/parkForm"> 
          <ParkForm />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
