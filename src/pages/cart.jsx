/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react';
import { Button, Table } from 'react-bootstrap';
import CartElement from './cartElement';
import Actions from '../actions/cart';

function Cart(props) {
  let total = 0;
  props.cart.forEach((data) => {
    total += Number(
      data[Object.keys(data)].price.replace('$', ''),
    );
  });

  let tableData = props.cart.map((data, idx) => (
    <CartElement productData={data} key={idx} />
  ));

  if (!tableData.length) {
    tableData = (
      <tr>
        <td colSpan="3">Your cart is empty</td>
      </tr>
    );
  }
  return (
    <Table striped>
      <thead>
        <tr>
          <th width="40%">Name</th>
          <th width="30%">Price</th>
          <th width="30%" />
        </tr>
      </thead>
      <tbody>
        {tableData}
        <tr className="summary">
          <td>
            <strong>Order total:</strong>
          </td>
          <td>
            <strong>${total.toFixed(2)}</strong>
          </td>
          <td>
            {tableData.length ? (
              <Button
                size="sm"
                variant="danger"
                onClick={() => Actions.ClearCart()}
              >
                Clear Cart
              </Button>
            ) : null}
          </td>
        </tr>
      </tbody>
    </Table>
  );
}

export default Cart;
