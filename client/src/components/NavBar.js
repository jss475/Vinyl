import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import Search from './Search';


function NavBar( { handleSearch }) {
    
    return (
    <>
    <Navbar variant="transparent">
        <Container>
        <Navbar.Brand href="/home">Test Name</Navbar.Brand>
        <Nav className="me-auto">
        <Nav.Link href="/home">Home</Nav.Link>
        <Nav.Link href="/products">Products</Nav.Link>
        <Nav.Link href="/sign-in">Sign-In</Nav.Link>
        </Nav>
        </Container>
        <Search handleSearch={handleSearch} />
    </Navbar>
    </>     
    )
}

export default NavBar;