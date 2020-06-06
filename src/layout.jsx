import React from 'react';
import Reflux from 'reflux';
import { Route, Router, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import Actions from './actions/products';
import CartActions from './actions/cart';
import Menu from './components/menu';
import Footer from './components/footer';
import ProductStore from './stores/products';
import Products from './pages/products';
import Home from './pages/home';
import Company from './pages/company';
import Item from './pages/item';
import Checkout from './pages/checkout';
import CartStore from './stores/cart';
import CustStore from './stores/customer';
import Receipt from './pages/receipt';

const history = createBrowserHistory();

class Layout extends Reflux.Component {
  constructor(props) {
    super(props);
    this.stores = [ProductStore, CartStore, CustStore];
  }

  componentDidMount = () => {
    Actions.FetchProducts();
    CartActions.FetchCart();
  };

  render() {
    return (
      <div>
        <Menu {...this.state} />

        <Router history={history}>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/company" component={Company} />
            <Route
              path="/products"
              render={() => <Products {...this.state} />}
            />
            <Route
              path="/item/:id"
              render={() => <Item {...this.state} />}
            />
            <Route
              path="/checkout"
              render={() => <Checkout {...this.state} />}
            />
            <Route
              path="/receipt"
              render={() => <Receipt {...this.state} />}
            />
          </Switch>
        </Router>

        <Footer />
      </div>
    );
  }
}

export default Layout;
