import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Button } from "semantic-ui-react";



function Header() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="light" variant="light" className="myHeader">
      <Container>
        <Navbar.Brand href="#home">Home</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
          <Nav.Link href="#features">About Us</Nav.Link>
            <Nav.Link href="#features">Latest Oklahoma Headlines</Nav.Link>
            <Nav.Link href="#pricing">Campaign Finance</Nav.Link>
            
          </Nav>
          <Nav>
            <Button>Support Us</Button>
          </Nav>
          
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;