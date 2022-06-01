import React from 'react';
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
import Search from './Search';
import Logout from './Logout';
import {Link} from 'react-router-dom'


function NavBar( { handleSearch, handleLogout, signedInBuyer, signedInSeller }) {
    
    return (
    <>
    <Navbar variant="transparent">
        <Container>
        <Navbar.Brand as={Link} to="/home">Test Name</Navbar.Brand>
        <Nav className="me-auto">
        <Nav.Link as={Link} to="/">Home</Nav.Link>
        <Nav.Link as={Link} to="/products">Products</Nav.Link>
        {
            signedInBuyer.length > 0 || signedInSeller.length > 0 ? null :
        <>
            <NavDropdown title="Sign In" id="basic-nav-dropdown1">
                <Nav.Link as={Link} to="/signin/seller">Seller Sign In</Nav.Link>
                <Nav.Link as={Link} to="/signin/buyer">Buyer Sign In</Nav.Link>
            </NavDropdown>
            <NavDropdown title="Sign Up" id="basic-nav-dropdown2">
                <Nav.Link as={Link} to="/signup/seller">Seller Sign Up</Nav.Link>
                <Nav.Link as={Link} to="/signup/buyer">Buyer Sign Up</Nav.Link>
            </NavDropdown>
        </>
        }
        {
            signedInSeller.length > 0 ? <>
            <Nav.Link as={Link} to="/mylistings">My Listings</Nav.Link>
            <Nav.Link as={Link} to="/addlisting">Add Listing</Nav.Link>
            </> : null
        }
        </Nav>
        </Container>
        <Logout handleLogout={handleLogout} />
        <Search handleSearch={handleSearch} />
    </Navbar>
    </>     
    )
}

export default NavBar;