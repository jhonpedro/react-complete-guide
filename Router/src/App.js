import React from 'react';
import { Route, Switch } from 'react-router';
import Header from './components/Header';
import Landing from './pages/Landing';
import ProductDetail from './pages/ProductDetail';
import Products from './pages/Products';

function App() {
  return (
    <React.Fragment>
      <Header />
      <main>
        <Switch>
          <Route path="/welcome">
            <Landing />
          </Route>
          <Route path="/products" exact>
            <Products />
          </Route>
          <Route path="/products/:productId">
            <ProductDetail />
          </Route>
        </Switch>
      </main>
    </React.Fragment>
  );
}

export default App;
