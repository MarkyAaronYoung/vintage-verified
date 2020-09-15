import React from 'react';
import PropTypes from 'prop-types';
import { NavLink as RRNavLink } from 'react-router-dom';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';
import firebase from 'firebase/app';
// import Auth from '../Auth/Auth';
import 'firebase/auth';

class MyNavbar extends React.Component {
  static propTypes = {
    authed: PropTypes.bool.isRequired,
  }

  state = {
    isOpen: false,
  }

  logoutClickEvent = (e) => {
    e.preventDefault();
    firebase.auth().signOut();
  }

  toggle = () => {
    const { isOpen } = this.state;
    this.setState({ isOpen: !isOpen });
  }

  render() {
    const { isOpen } = this.state;

    const buildNavbar = () => {
      const { authed } = this.props;

      if (authed) {
        return (
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink tag={RRNavLink} to="/home">Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={RRNavLink} to="/pants">Pants</NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={RRNavLink} to="/jeans">Jeans</NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={RRNavLink} to="/shirts">Shirts</NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={RRNavLink} to="/dresses">Dresses</NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={RRNavLink} to="/verifiedvintage">Verified Vintage</NavLink>
            </NavItem>
            <NavItem>
              <NavLink onClick={this.logMeOut}>Log Me Out</NavLink>
          </NavItem>
        </Nav>
        );
      }

      return <Nav className="ml-auto" navbar></Nav>;
    };

    return (
      <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/vintageverified">Vintage Verified</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={isOpen} navbar>
            {buildNavbar()}
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

export default MyNavbar;
