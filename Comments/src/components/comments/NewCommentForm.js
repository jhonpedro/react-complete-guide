import { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { actionAddQuoteComment } from '../../store/reducers/quote/actions';
import generateRandomId from '../../utils/generateRandomId';

import classes from './NewCommentForm.module.css';

const NewCommentForm = (props) => {
  const commentTextRef = useRef();
  const dispatch = useDispatch();

  const submitFormHandler = (event) => {
    event.preventDefault();

    dispatch(
      actionAddQuoteComment({
        comment: { id: generateRandomId(), text: commentTextRef.current.value },
        quoteId: props.quoteId,
      })
    );

    // optional: Could validate here

    // send comment to server
  };

  return (
    <form className={classes.form} onSubmit={submitFormHandler}>
      <div className={classes.control} onSubmit={submitFormHandler}>
        <label htmlFor="comment">Your Comment</label>
        <textarea id="comment" rows="5" ref={commentTextRef}></textarea>
      </div>
      <div className={classes.actions}>
        <button className="btn">Add Comment</button>
      </div>
    </form>
  );
};

export default NewCommentForm;
