import React from 'react';
import {
  Card, Col, Container, Row, Table,
} from 'react-bootstrap';
import OrderElement from './orderElement';

function Receipt(props) {
  console.log(props);
  let total = 0;
  props.cart.forEach((data) => {
    total += parseFloat(
      data[Object.keys(data)].price.replace('$', ''),
    );
  });
  const orderData = props.cart.map((data, idx) => (
    <OrderElement productData={data} key={idx} />
  ));

  return (
    <Container>
      <Row>
        <Col xs={12}>
          <h3 className="text-center">
            Invoice for your purchase
          </h3>
        </Col>
      </Row>
      <Row>
        <Col xs={12} md={12}>
          <Card>
            <Card.Body>
              <Card.Title>Billing details</Card.Title>
              {props.customer.name}
              <br />
              {props.customer.address}
              <br />
              {props.customer.zipCode}
              <br />
              {props.customer.city}
            </Card.Body>
          </Card>
        </Col>
        <Col xs={12} md={12}>
          <Card header="Order summary">
            <Table>
              <thead>
                <tr>
                  <th>Item Name</th>
                  <th>Item Price</th>
                </tr>
              </thead>
              <tbody>{orderData}</tbody>
              <tfoot>
                <tr>
                  <td>
                    <strong>Total</strong>
                  </td>
                  <td>${total.toFixed(2)}</td>
                </tr>
              </tfoot>
            </Table>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Receipt;

Receipt.defaultProps = {
  cart: [],
  customer: {
    validAddress: false,
  },
};
