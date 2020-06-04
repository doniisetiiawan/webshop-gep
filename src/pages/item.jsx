import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Reflux from 'reflux';
import ProductInfo from './productInfo';
import ProductStore from '../stores/products';
import Actions from '../actions/products';

class item extends Reflux.Component {
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
    if (!this.state.products) return null;

    const json = JSON.parse(this.state.products);

    const products = json.products.main_offering.concat(
      json.products.sale_offerings,
    );
    const data = products.filter(
      (item) => item[Object.keys(item)].SKU
        === this.props.match.params.id,
    );
    console.log(data);

    if (!data.length) {
      return (
        <Container>
          <Row>
            <Col xs={12}>
              <h1>Product missing</h1>
              <p>
                I m sorry, but the product could not be
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

export default item;
