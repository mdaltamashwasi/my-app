import React, { Component } from "react";
import { Image } from "react-bootstrap";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

let headerStyle = {
    'background-color': '#f1f1f1',
    'padding': '20px',
    'max-width':'100%',
    'height':'100px'
}

const Header = () => {
 return(
      <div class="header" style={headerStyle} > 
        
        <div className="headerlogo">
          <Image src="./images/logo.jpg"/>
        </div>
        <div className="headerlogo">
           <div className="notication-content">
            <div class="notication-content-item">
                Student Registration Started
            </div>
           </div>
            
        </div>
        <div className="headerlogo">
          <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                  <Nav.Link href="#link">Notification</Nav.Link>
                  <NavDropdown title="Sign In" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#action/3.4">New User ?  Sign UP</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="login">Login</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">Profile</NavDropdown.Item>           
                  </NavDropdown>
                </Nav>
              </Navbar.Collapse>
            </Container>
         </Navbar>
        </div>
       
      </div>
      
 )
};
export default Header;

/*class Header extends Component {

  constructor(){
      super();
     
  }
  render() {
      return(
        <div>
          Header Logo
        </div>
      );
  }
}
export default Header;*/
