import React from 'react';
import '../MenuBar.css';

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
  DropdownItem
} from 'reactstrap';

class MenuBar extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div>
        <Navbar
          color="faded"
          light
          expand="md"
          style={this.style}
          id="navbarDaniel"
        >
          <NavbarBrand href="/">Daniel's Website</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <UncontrolledDropdown nav inNavbar id="dropFood">
                <DropdownToggle nav caret>
                  Food
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem id="dropWestern">Western</DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem id="dropAsian">Asian</DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem id="dropOther">Other</DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
              <UncontrolledDropdown nav inNavbar id="dropTech">
                <DropdownToggle nav caret>
                  Technology
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem id="dropSoftware">Software</DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem id="dropHardware">Hardware</DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem id="dropML">Machine Learning</DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
              <NavItem>
                <NavLink> Misc </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="https://github.com/reactstrap/reactstrap">
                  GitHub
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

export default MenuBar;
