import React from 'react';
import { Alert, Button, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Cart from './cart';
import CustomerData from '../components/customerdata';

function checkout(props) {
  // console.log(this.props);
  const CheckoutEnabled = props.validAddress && props.cart.length > 0;
  return (
    <Container>
      <Alert>
        <p>
          Please confirm your order and checkout your cart
        </p>
      </Alert>

      <Cart {...props} />
      <CustomerData {...props} />
      <Link to="/receipt">
        <Button
          disabled={!CheckoutEnabled}
          variant={CheckoutEnabled ? 'success' : 'default'}
        >
          Proceed to checkout
        </Button>
      </Link>
    </Container>
  );
}

export default checkout;

checkout.defaultProps = {
  cart: [],
  customer: {
    address: {},
    validAddress: false,
  },
};
