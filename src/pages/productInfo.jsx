/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import { Button, Col } from 'react-bootstrap';

function ProductInfo(props) {
  const title = Object.keys(props.productData);
  if (props.productData[title]) {
    return (
      <Col xs={12}>
        <Col md={3} sm={4} xs={12}>
          <p>
            <img
              src={props.productData[
                title
              ].image.replace('{size}', '200x150')}
              alt="product"
            />
          </p>
        </Col>
        <Col md={9} sm={8} xs={12}>
          <h4>{title}</h4>

          <p>
            {props.productData[title].description}
          </p>

          <p>
            {props.productData[title].price} (
            {props.productData[title].savings})
          </p>

          <p>
            <Button size="sm">Add to cart!</Button>
          </p>
        </Col>
      </Col>
    );
  }
  return null;
}

export default ProductInfo;
