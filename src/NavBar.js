import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {NavLink} from "react-router-dom";

function NavBar() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container class="nav flex-column">
          <Navbar.Brand>
            <NavLink style={{color: 'white', textDecoration: 'none'}} to='/'> Git Away Hikes</NavLink>
          </Navbar.Brand>
          <Nav className="me-auto">
            <NavLink style={{color: 'white', textDecoration: 'none'}}to="/hikes">Hikes</NavLink>
            <div> ""  </div>
            <NavLink style={{color: 'white', textDecoration: 'none'}}to="/parkform">Submit A Hike</NavLink>
          </Nav>
        </Container>
      </Navbar>
      <br />
    
      <br />
      
    </>
  );
}

export default NavBar;