import React, { Component } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { withRouter } from 'react-router-dom';
import ProductInfo from './productInfo';

class item extends Component {
  render() {
    console.log(this.props);
    if (!this.props.products) return null;

    const products = this.props.products.main_offering.concat(
      this.props.products.sale_offerings,
    );
    const data = products.filter(
      (item) => item[Object.keys(item)].SKU
        === this.props.match.params.id,
    );

    if (!data.length) {
      return (
        <Container>
          <Row>
            <Col xs={12}>
              <h1>Product missing</h1>
              <p>
                I'm sorry, but the product could not be
                found.
              </p>
            </Col>
          </Row>
        </Container>
      );
    }
    return (
      <Container>
        <Row>
          <Col xs={12}>
            <ProductInfo productData={data[0]} />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default withRouter(item);
