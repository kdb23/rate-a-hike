
import './App.css';
import {useEffect, useState} from "react"
import Button from 'react-bootstrap/Button';
import Parks from './Parks';
import Header from './Header';


function App() {
  const [parks, setParks] = useState([])

  useEffect(() => {
    fetch("")
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
