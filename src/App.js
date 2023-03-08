
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


function App() {
  const [parks, setParks] = useState([])
  const [hikes, setHikes] = useState([])
  const [searchTerm, setSearchTerm] = useState("")
  const [searchCat, setSearchCat] = useState("")
  const [searchNum, setSearchNum] = useState(10000)


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

  const changeSearch = (newTerm) => {
    setSearchTerm(newTerm)
  }

  let hikesFiltered = hikes.filter((hike) => {
    if (!searchCat) {
      return true
    } else {
      if (hike.park === searchCat) {
        return true
      }
    }
  })

  let hikesSearched = hikesFiltered.filter((hike) => {
    if (hike.description.includes(searchTerm)) {
      return true
    }
  })

  let hikesShortEnough = hikesSearched.filter((hike)=> {
    if (searchNum){
      let justNum = parseInt(hike.length.replace(/\D/g, ''),10)
      justNum /= Math.pow(10, 1)
       console.log(justNum)
       let compareNum = parseInt(searchNum, 10)
       console.log(compareNum)
      if (justNum < compareNum) {
        return true
       } else {
        return false
      }
    } else {
      setSearchNum(10000)
    }
  })

  const changeSearchNum = (newNum) => {
    setSearchNum(newNum)
  }

  console.log(searchNum)

  const changeCat = (newCat) => {
    setSearchCat(newCat)
  }


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
          <Hikes parks={parks} hikes={hikesShortEnough} changeCat={changeCat} changeSearch={changeSearch} changeSearchNum={changeSearchNum}/>
          </Route>
        <Route exact path = "/parkForm"> 
          <ParkForm addProject={addProject}/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
