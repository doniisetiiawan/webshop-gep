/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import { Button, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function RibbonOffering(props) {
  const title = Object.keys(props.productData);
  return props.productData[title] ? (
    <Col md={4} sm={4} xs={12}>
      <Col xs={12}>
        <p>
          <img
            src={props.productData[
              title
            ].image.replace('{size}', '170x80')}
            alt="product"
          />
        </p>
      </Col>
      <Col xs={12}>
        <Link
          to={`/item/${props.productData[title].SKU}`}
        >
          <h4>{title}</h4>
        </Link>

        <p>{props.productData[title].description}</p>

        <p>
          {props.productData[title].price} (
          {props.productData[title].savings})
        </p>

        <p>
          <Button size="sm">Add to cart</Button>
        </p>
      </Col>
    </Col>
  ) : null;
}

export default RibbonOffering;
