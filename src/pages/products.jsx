import React from 'react';
import { Container } from 'react-bootstrap';
import Offerings from './offerings';

function Products(props) {
  return (
    <Container>
      <Offerings
        productData={props.products.main_offering}
        type="main"
        maxProducts={1}
      />
      <Offerings
        productData={props.products.sale_offerings}
        type="ribbon"
        maxProducts={3}
      />
    </Container>
  );
}

export default Products;

Products.defaultProps = {
  products: {
    main_offering: [],
    sale_offerings: [],
  },
};
