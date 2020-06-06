import React, { Component } from 'react';
import {
  Card,
  Col,
  Container,
  Row,
  Table,
} from 'react-bootstrap';
import OrderElement from './orderElement';

class Receipt extends Component {
  render() {
    console.log(this.props);
    let total = 0;
    this.props.cart.forEach((data) => {
      total += parseFloat(
        data[Object.keys(data)].price.replace('$', ''),
      );
    });
    const orderData = this.props.cart.map((data, idx) => (
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
                {this.props.customer.name}
                <br />
                {this.props.customer.address}
                <br />
                {this.props.customer.zipCode}
                <br />
                {this.props.customer.city}
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
}

export default Receipt;

Receipt.defaultProps = {
  cart: [],
  customer: {
    validAddress: false,
  },
};
