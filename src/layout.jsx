import React from 'react';
import Reflux from 'reflux';
import Menu from './components/menu';
import Footer from './components/footer';
import Actions from './actions/products';
import ProductStore from './stores/products';

class layout extends Reflux.Component {
  constructor(props) {
    super(props);

    this.state = {};
    this.store = ProductStore;
  }

  componentDidMount = () => {
    Actions.FetchProducts();
  };

  onFetchProducts = (data) => {
    this.setState({ products: data.products });
  };

  render() {
    return (
      <>
        <Menu />

        {this.props.children}

        <Footer />
      </>
    );
  }
}

export default layout;
