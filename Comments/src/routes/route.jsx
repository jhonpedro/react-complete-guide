import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import MainHeader from '../components/layout/MainNavigation';
import LoadingSpinner from '../components/UI/LoadingSpinner';

const AddQuote = React.lazy(() => import('../pages/AddQuote'));
const Quote = React.lazy(() => import('../pages/Quote'));
const QuoteList = React.lazy(() => import('../pages/QuoteList'));

const Routes = () => {
  return (
    <React.Fragment>
      <MainHeader />
      <main>
        <React.Suspense
          fallback={
            <div className="centered">
              <LoadingSpinner />
            </div>
          }
        >
          <Switch>
            <Route path="/new">
              <AddQuote />
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
        </React.Suspense>
      </main>
    </React.Fragment>
  );
};

export default Routes;
