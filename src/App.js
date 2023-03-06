import logo from './logo.svg';
import './App.css';
import Button from 'react-bootstrap/Button';
import Parks from './Parks';
import Header from './Header';


function App() {
  return (
    <div>
      <Header></Header>
      <Parks />
    </div>
  );
}

export default App;
