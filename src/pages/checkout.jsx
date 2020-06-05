import React from 'react';
import { Alert, Button, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Reflux from 'reflux';
import Cart from './cart';
import CartStore from '../stores/cart';
import Actions from '../actions/cart';
import CustomerData from '../components/customerdata';

class checkout extends Reflux.Component {
  constructor(props) {
    super(props);

    this.state = {
      cart: [],
      customer: {
        address: {},
        validAddress: false,
      },
    };
    this.store = CartStore;
  }

  componentDidMount = () => {
    Actions.FetchCart();
  }

  render() {
    const CheckoutEnabled = this.state.customer.validAddress
      && this.state.cart.length > 0;
    console.log(this.state.cart.length);

    console.log(this.state);
    return (
      <Container>
        <Alert>
          <p>
            Please confirm your order and checkout your cart
          </p>
        </Alert>

        <Cart {...this.state} />
        <CustomerData {...this.state} />
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
