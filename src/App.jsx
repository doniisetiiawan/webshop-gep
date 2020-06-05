import React from 'react';
import { Route, Router, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import Home from './pages/home';
import Company from './pages/company';
import Products from './pages/products';

const history = createBrowserHistory();

const App = (
  <Router history={history}>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/company" component={Company} />
      <Route path="/products" component={Products} />
      {/* <Route path="/item/:id" component={Item} /> */}
      {/* <Route path="/checkout" component={Checkout} /> */}
      {/* <Route path="/receipt" component={Receipt} /> */}
    </Switch>
  </Router>
);

export default App;
