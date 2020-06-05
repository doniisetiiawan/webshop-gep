import React from 'react';
import { Button, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import CartActions from '../actions/cart';

function MainOffering(props) {
  const title = Object.keys(props.productData);

  if (props.productData) {
    return (
      <>
        <Col xs={12}>
          <Col md={3} sm={4} xs={12}>
            <p>
              <img
                src={props.productData[title].image.replace(
                  '{size}',
                  '200x150',
                )}
                alt="product"
              />
            </p>
          </Col>
          <Col md={9} sm={8} xs={12}>
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
              <Button
                size="lg"
                onClick={() => CartActions.AddToCart(
                  props.productData,
                )}
              >
                Add to cart
              </Button>
            </p>
          </Col>
        </Col>
      </>
    );
  }
  return null;
}

export default MainOffering;
