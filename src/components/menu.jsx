/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import { Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function menu(props) {
  return (
    <Navbar bg="light" fixed="top">
      <Navbar.Brand>
        <Link to="/">Webshop</Link>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link eventKey={1} href="/company">
            About
          </Nav.Link>
          <Nav.Link eventKey={2} href="/products">
            Products
          </Nav.Link>
        </Nav>
        <Nav>
          <Nav.Link eventKey={2} href="/products">
            Your cart: {props.cart.length} items
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default menu;

menu.propTypes = {
  cart: PropTypes.any,
};

menu.defaultProps = {
  cart: [],
};
