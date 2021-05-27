import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect, useParams } from 'react-router';
import CommentsList from '../../components/comments/CommentsList';
import NewCommentForm from '../../components/comments/NewCommentForm';
import HighlightedQuote from '../../components/quotes/HighlightedQuote';
import classes from './Styles.module.css';

const Quote = () => {
  const { quoteId } = useParams();
  const quote = useSelector((state) =>
    state.quotes.find((quoteItem) => quoteItem.id === quoteId)
  );

  if (!quote) {
    return <Redirect to="/quotes" />;
  }

  return (
    <React.Fragment>
      <HighlightedQuote author={quote.author} text={quote.text} />
      <div className={classes['comments-container']}>
        <NewCommentForm quoteId={quoteId} />
        <CommentsList comments={quote.comments} />
      </div>
    </React.Fragment>
  );
};

export default Quote;
