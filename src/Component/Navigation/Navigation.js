import React from 'react';
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

import useAuth from '../../Hooks/useAuth';
import './Navigation.css'


const Navigation = () => {
  const { user, logOut } = useAuth();
    return (
      <>
      <Navbar bg="dark" variant="dark" sticky="top" collapseOnSelect expand="lg" >
          <Container>
              <Navbar.Brand href="#home"> Travel Area </Navbar.Brand>
              <Navbar.Toggle />
              <Navbar.Collapse className="justify-content-end">
              <Nav.Link as={Link} to="/home" className="home"> Home </Nav.Link>
              <Nav.Link as={Link} to="/services" className="services"> services </Nav.Link>
              <Nav.Link as={Link} to="/addservice" className="services"> add service </Nav.Link>
              <Nav.Link as={Link} to="/myorder" className="services"> my order </Nav.Link>
              <Nav.Link as={Link} to="/allorder" className="services"> All Order </Nav.Link>
              {/* <Nav.Link as={Link} to="/allorder" className="services">All Order </Nav.Link> */}
                  
                 
                 
                  {user?.email ?
                      <Button onClick={logOut} variant="light">Logout</Button> :
                      <Nav.Link as={Link} to="/login">Login</Nav.Link>}
                  <Navbar.Text>
                      Signed in as: <a href="#login">{user?.displayName}</a>
                  </Navbar.Text>
              </Navbar.Collapse>
          </Container>
      </Navbar>
  </>
    );
};

export default Navigation;