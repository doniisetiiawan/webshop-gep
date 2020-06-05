import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import Offerings from './offerings';

class Products extends Component {
  render() {
    return (
      <Container>
        <Offerings
          productData={this.props.products.main_offering}
          type="main"
          maxProducts={1}
        />
        <Offerings
          productData={this.props.products.sale_offerings}
          type="ribbon"
          maxProducts={3}
        />
      </Container>
    );
  }
}

export default Products;

Products.defaultProps = {
  products: {
    main_offering: [],
    sale_offerings: [],
  },
};
