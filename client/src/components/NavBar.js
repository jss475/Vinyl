import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import Search from './Search';
import Logout from './Logout';
import {Link} from 'react-router-dom'


function NavBar( { handleSearch, handleLogout }) {
    
    return (
    <>
    <Navbar variant="transparent">
        <Container>
        <Navbar.Brand as={Link} to="/home">Test Name</Navbar.Brand>
        <Nav className="me-auto">
        <Nav.Link as={Link} to="/">Home</Nav.Link>
        <Nav.Link as={Link} to="/products">Products</Nav.Link>
        <Nav.Link as={Link} to="/signin/buyer">Sign In</Nav.Link>
        <Nav.Link as={Link} to="/signup/buyer">Sign Up</Nav.Link>
        </Nav>
        </Container>
        <Logout handleLogout={handleLogout} />
        <Search handleSearch={handleSearch} />
    </Navbar>
    </>     
    )
}

export default NavBar;