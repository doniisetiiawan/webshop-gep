import React from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
import { createBrowserHistory } from 'history';
import Layout from './layout';
import Home from './pages/home';
import Company from './pages/company';
import Checkout from './pages/checkout';
import Receipt from './pages/receipt';
import Products from './pages/products';
import Item from './pages/item';

const history = createBrowserHistory();

function App() {
  return (
    <>
      <Router history={history}>
        <Layout>
          <Route path="/" exact component={Home} />
          <Route path="/company" component={Company} />
          <Route path="/products" component={Products} />
          <Route path="/item/:id" component={Item} />
          <Route path="/checkout" component={Checkout} />
          <Route path="/receipt" component={Receipt} />
        </Layout>
      </Router>
    </>
  );
}

export default App;
