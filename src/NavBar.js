import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function NavBar() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">"Git-Away Hikes"</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">About Page</Nav.Link>
            <Nav.Link href="#pricing">Reviews</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <br />
    
      <br />
      
    </>
  );
}

export default NavBar;