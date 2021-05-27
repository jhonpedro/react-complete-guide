import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import MainHeader from '../components/layout/MainNavigation';
import AddTask from '../pages/AddQuote';
import Quote from '../pages/Quote';
import QuoteList from '../pages/QuoteList';

const Routes = () => {
  return (
    <React.Fragment>
      <MainHeader />
      <main>
        <Switch>
          <Route path="/new">
            <AddTask />
          </Route>
          <Route path="/quotes" exact>
            <QuoteList />
          </Route>
          <Route path="/quotes/:quoteId">
            <Quote />
          </Route>
          <Route path="*">
            <Redirect to="/new" />
          </Route>
        </Switch>
      </main>
    </React.Fragment>
  );
};

export default Routes;
