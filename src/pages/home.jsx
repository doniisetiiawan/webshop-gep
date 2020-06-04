import React from 'react';
import {
  Button, Col, Container, Jumbotron, Row,
} from 'react-bootstrap';
import { Link } from 'react-router-dom';

function home() {
  return (
    <>
      <Container>
        <Row>
          <Col xs={12}>
            <Jumbotron>
              <h1>My webshop!</h1>
              <p>
                Welcome to my webshop. This is a simple
                information unit where you can showcase
                your best products or tell a little about
                your webshop.
              </p>
              <p>
                <Link to="/products">
                  <Button
                    variant="primary"
                    to="/products"
                  >
                    View products
                  </Button>
                </Link>
              </p>
            </Jumbotron>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default home;
