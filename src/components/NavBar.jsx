import React from 'react';
import Container from 'react-bootstrap/Container';
import { Link } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const NavBar = () => {
    return (
        <div>
            <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Ecommerce</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to= "/login" >Login</Nav.Link>
            <Nav.Link as={Link} to= "/purchases" >Purchases</Nav.Link>
            <Nav.Link as={Link} to= "/cart" >Cart</Nav.Link>
          </Nav>
        </Container>
      </Navbar>



            
        </div>
    );
};

export default NavBar;