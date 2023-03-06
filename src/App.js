
import './App.css';
import {useEffect, useState} from "react"
import Parks from './Parks';
import Header from './Header';


function App() {
  const [parks, setParks] = useState([])

  useEffect(() => {
    fetch("http://localhost:3002/parks")
      .then(r => r.json())
      .then(setParks)
  }, [])

  return (
    <div>
      <Header></Header>
      <Parks parks={parks}/>
    </div>
  );
}

export default App;
