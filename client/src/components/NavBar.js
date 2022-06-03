import React from 'react';
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
import Search from './Search';
import Logout from './Logout';
import {Link} from 'react-router-dom'


function NavBar( { handleSearch, handleLogout, signedInBuyer, signedInSeller, sellerState, buyerState, buyerName, sellerName }) {

    return (
    <>
    <Navbar variant="dark" bg="dark" >
        <Container>
            {
            buyerName.length > 0 ?
        <Navbar.Brand as={Link} to="/">Welcome {buyerName}!</Navbar.Brand>
            :
            sellerName.length > 0 ?
        <Navbar.Brand as={Link} to="/">Welcome {sellerName}!</Navbar.Brand>
            :
        <Navbar.Brand as={Link} to="/"></Navbar.Brand>
            }
        <Nav className="me-auto">
        <Nav.Link as={Link} to="/">Home</Nav.Link>
        <Nav.Link as={Link} to="/products">Products</Nav.Link>
        {
            buyerState === true || sellerState === true  ? null :
        <>
            <NavDropdown title="Sign In" id='sign_in_nav'>
                <NavDropdown.Item as={Link} to="/signin/seller">Seller Sign In</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/signin/buyer">Buyer Sign In</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Sign Up" id='sign_up_nav'>
                <NavDropdown.Item as={Link} to="/signup/seller">Seller Sign Up</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/signup/buyer">Buyer Sign Up</NavDropdown.Item>
            </NavDropdown>
        </>
        }
        {
            // signedInSeller.length > 0
            sellerState === true ? <>
            <Nav.Link as={Link} to="/mylistings">My Listings</Nav.Link>
            <Nav.Link as={Link} to="/addlisting">Add Listing</Nav.Link>
            </> : null
        }
        {
            // update NavBar with buyer functionality if signed in 
            buyerState === true? 
            <>
                <Nav.Link as={Link} to="/mypurchases">My Purchases</Nav.Link>
            </>
            : null
        }
        </Nav>
        </Container>
        <Search handleSearch={handleSearch} />
        <Logout handleLogout={handleLogout} />
    </Navbar>
    </>     
    )
}

export default NavBar;