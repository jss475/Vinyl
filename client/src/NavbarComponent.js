import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Navbar, Nav } from "react-bootstrap";
import Logout from './Logout'


function NavbarComponent ({handleLogout}){
    
    return (
        <Navbar bg="dark" variant="dark">
        <Container className="nav">
          <Navbar.Brand href="/"><img alt="logo"/></Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>  
            <Nav.Link href="/signin/buyer">Sign In</Nav.Link>
            <Nav.Link href="/signup/buyer">Sign Up</Nav.Link>
          </Nav>
 
          <Logout handleLogout={handleLogout}/>
        </Container>
      </Navbar>
    )
}

export default NavbarComponent