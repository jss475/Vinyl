import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import Search from './Search';
import Logout from './Logout';


function NavBar( { handleSearch, handleLogout }) {
    
    return (
    <>
    <Navbar variant="transparent">
        <Container>
        <Navbar.Brand href="/home">Test Name</Navbar.Brand>
        <Nav className="me-auto">
        <Nav.Link href="/">Home</Nav.Link>
        <Nav.Link href="/products">Products</Nav.Link>
        <Nav.Link href="/signin/buyer">Sign In</Nav.Link>
        <Nav.Link href="/signup/buyer">Sign Up</Nav.Link>
        </Nav>
        </Container>
        <Logout handleLogout={handleLogout} />
        <Search handleSearch={handleSearch} />
    </Navbar>
    </>     
    )
}

export default NavBar;