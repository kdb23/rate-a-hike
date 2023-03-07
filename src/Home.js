//import './App.css';
import {useEffect, useState} from "react"
import Parks from './Parks';
import Header from './Header';
import ParkForm from './ParkForm';
import NavBar from './NavBar';
import { Carousel } from 'react-bootstrap';
//import { Route } from 'react-router-dom';

function Home ({parks, addProject}) {



  
    return (
        <div>
        
        <Carousel></Carousel>
        <Parks parks={parks}/>
      </div>  
    )

  }

  export default Home;