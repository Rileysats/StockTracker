import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Nav, Navbar, Form, FormControl } from 'react-bootstrap';

const styles = {
  brand: {
    fontSize: "2.2vmax",
    margin:"auto",
    fontFamily: "Helvetica Neue"
  },
  navbar: {
    width:'100%',
    fontSize: "1.2vmax"
  },
  rightNav: {
    marginRight: "1rem",
    
  },
  navButton:{
    borderRight: "2px solid rgb(255,255,255,0.55)",
    paddingRight: "10px",
    paddingLeft: "10px",
    height:"10%",
  },
  search: {
    width: "50%",
    paddingLeft: "1rem"
  }
}

class NavBar extends React.Component{
  render() {
    return (
        <Navbar bg="dark" variant="dark" sticky="top" expand="sm" collapseOnSelect style={styles.navbar}>  
        <div style={{width:"33.3%"}}>
          <Form style={styles.search}>
            <FormControl
            type="search"
            placeholder="Stock code"
            className="mr-2"
            aria-label="Search"
            />
          </Form>
        </div>
        
        <div style={{width:"33.3%"}}>
          <Navbar.Collapse id="basic-navbar-nav">
          <Navbar.Brand style={styles.brand} href="/">
          stonks.
          </Navbar.Brand>
          </Navbar.Collapse>
        </div>  
      
        <Navbar.Toggle/>  

        <div style={{width:"33%"}}>
          <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto" style={styles.rightNav}>  
            <Nav.Link style={styles.navButton} href="about-me">Markets</Nav.Link>
            <Nav.Link style={styles.navButton} href="about-me">Portfolio</Nav.Link>
            <Nav.Link  href="about-me">Watchlists</Nav.Link>
          </Nav>
          </Navbar.Collapse>
        </div>
        </Navbar>
  );
}}

export default NavBar;
