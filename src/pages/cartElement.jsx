import React from 'react';
import { Button } from 'react-bootstrap';
import Actions from '../actions/cart';

function CartElement(props) {
  const title = Object.keys(props.productData);
  return title ? (
    <tr>
      <td>{title}</td>
      <td>{props.productData[title].price}</td>
      <td>
        <Button
          size="xsmall"
          variant="danger"
          onClick={() => Actions.RemoveFromCart(props.productData)}
        >
          Remove
        </Button>
      </td>
    </tr>
  ) : null;
}

export default CartElement;
