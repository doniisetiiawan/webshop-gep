import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

function company() {
  return (
    <>
      <Container>
        <Row>
          <Col xs={12}>
            <h1>The company</h1>
            <p>Contact information</p>
            <p>Phone number</p>
            <p>History of our company</p>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default company;
