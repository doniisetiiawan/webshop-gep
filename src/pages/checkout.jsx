import React, { Component } from 'react';
import { Alert, Button, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Cart from './cart';
import CustomerData from '../components/customerdata';

class checkout extends Component {
  render() {
    // console.log(this.props);
    const CheckoutEnabled = this.props.validAddress
      && this.props.cart.length > 0;
    return (
      <Container>
        <Alert>
          <p>
            Please confirm your order and checkout your cart
          </p>
        </Alert>

        <Cart {...this.props} />
        <CustomerData {...this.props} />
        <Link to="/receipt">
          <Button
            disabled={!CheckoutEnabled}
            variant={
              CheckoutEnabled ? 'success' : 'default'
            }
          >
            Proceed to checkout
          </Button>
        </Link>
      </Container>
    );
  }
}

export default checkout;

checkout.defaultProps = {
  cart: [],
  customer: {
    address: {},
    validAddress: false,
  },
};
