/* eslint-disable react/forbid-prop-types */
import React from 'react';
import Reflux from 'reflux';
import { Nav, Navbar } from 'react-bootstrap';
import CartStore from '../stores/cart';
import Actions from '../actions/cart';

class menu extends Reflux.Component {
  constructor(props) {
    super(props);

    this.state = { cart: [] };
    this.store = CartStore;
  }

  componentDidMount = () => {
    Actions.FetchCart();
  }

  render() {
    return (
      <Navbar bg="dark" fixed="top" variant="dark">
        <Navbar.Brand>Webshop</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link eventKey={1} href="/">
              Home
            </Nav.Link>
            <Nav.Link eventKey={2} href="/products">
              Products
            </Nav.Link>
            <Nav.Link eventKey={3} href="/company">
              Company
            </Nav.Link>
            <Nav.Link eventKey={4} href="/checkout">
              Checkout
            </Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link eventKey={5} href="/checkout">
              Your cart: {this.state.cart.length} items
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default menu;

menu.defaultProps = {
  cart: [],
};
