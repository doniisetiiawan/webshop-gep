import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { withRouter } from 'react-router-dom';
import ProductInfo from './productInfo';

function item(props) {
  console.log(props);
  if (!props.products) return null;

  const products = props.products.main_offering.concat(
    props.products.sale_offerings,
  );
  const data = products.filter(
    (item) => item[Object.keys(item)].SKU === props.match.params.id,
  );

  if (!data.length) {
    return (
      <Container>
        <Row>
          <Col xs={12}>
            <h1>Product missing</h1>
            <p>
              I m sorry, but the product could not be found.
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

export default withRouter(item);
