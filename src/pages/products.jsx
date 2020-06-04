import React from 'react';
import Reflux from 'reflux';
import { Container } from 'react-bootstrap';
import Offerings from './offerings';
import ProductStore from '../stores/products';
import Actions from '../actions/products';

class products extends Reflux.Component {
  constructor(props) {
    super(props);

    this.state = {
      products: JSON.stringify({
        products: { main_offering: [], sale_offerings: [] },
      }),
    };
    this.store = ProductStore;
  }

  componentDidMount = () => {
    Actions.FetchProducts();
  };

  render() {
    const json = JSON.parse(this.state.products);

    return (
      <>
        <Container>
          <Offerings
            productData={json.products.main_offering}
            type="main"
            maxProducts={1}
          />
          <Offerings
            productData={json.products.sale_offerings}
            type="ribbon"
            maxProducts={3}
          />
        </Container>
      </>
    );
  }
}

export default products;

products.defaultProps = {
  products: {
    main_offering: [],
    sale_offerings: [],
  },
};
