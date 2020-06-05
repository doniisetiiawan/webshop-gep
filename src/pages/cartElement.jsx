import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import Actions from '../actions/cart';

class CartElement extends Component {
  render() {
    const title = Object.keys(this.props.productData);
    return title ? (
      <tr>
        <td>{title}</td>
        <td>{this.props.productData[title].price}</td>
        <td>
          <Button
            size="xsmall"
            variant="danger"
            onClick={() => Actions.RemoveFromCart(this.props.productData)}
          >
            Remove
          </Button>
        </td>
      </tr>
    ) : null;
  }
}

export default CartElement;
