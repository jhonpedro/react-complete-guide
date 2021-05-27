import React from 'react';
import { useSelector } from 'react-redux';
import QuoteListComponent from '../../components/quotes/QuoteList';

import classes from './Styles.module.css';

const QuoteList = () => {
  const quotes = useSelector((state) => state.quotes);

  return (
    <React.Fragment>
      {quotes.length === 0 && (
        <p className={classes.paragraph}>There is no Quotes :(</p>
      )}
      <div className={classes['quote-container']}>
        <QuoteListComponent quotes={quotes} />
      </div>
    </React.Fragment>
  );
};

export default QuoteList;
