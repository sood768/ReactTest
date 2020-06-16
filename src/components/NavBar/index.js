import React, { Component } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText
} from 'reactstrap';

class Header extends Component {

  render() { 
    return (
      <div>
        <Navbar color="light" light expand="md" style={{display:'flex',justifyContent:'space-between'}}>
          <NavbarBrand href="/list">Refixd Test</NavbarBrand>
          <NavbarText onClick={this.props.logout}>Logout</NavbarText>
         </Navbar>
      </div>
    );
  }
}

export default Header;
