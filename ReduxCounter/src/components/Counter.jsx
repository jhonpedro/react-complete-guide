import React, { Component } from 'react';
import { connect, useDispatch, useSelector } from 'react-redux';
import { counterActions } from '../store/slices/counterSlice';

import classes from './Counter.module.css';

const INCREMENT_BY = 3;

const Counter = () => {
  const { counter, showCounter } = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  const toggleCounterHandler = () => {
    dispatch(counterActions.toggleCounter());
  };

  const incrementHandler = () => dispatch(counterActions.increment());

  const decrementHandler = () => dispatch(counterActions.decrement());

  const increaseBy = () => dispatch(counterActions.incrementBy(INCREMENT_BY));

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {showCounter && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={increaseBy}>Increment by {INCREMENT_BY}</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

class CounterClass extends Component {
  constructor() {
    super();

    this.incrementHandler = this.incrementHandler.bind(this);
    this.decrementHandler = this.decrementHandler.bind(this);
  }

  toggleCounterHandler() {}

  incrementHandler() {
    this.props.INCREMENT();
  }

  decrementHandler() {
    this.props.DECREMENT();
  }

  render() {
    return (
      <main className={classes.counter}>
        <h1>Redux Counter</h1>
        <div className={classes.value}>{this.props.counter}</div>
        <div>
          <button onClick={this.incrementHandler}>Increment</button>
          <button onClick={this.decrementHandler}>Decrement</button>
        </div>
        <button onClick={this.toggleCounterHandler}>Toggle Counter</button>
      </main>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    counter: state.counter,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    INCREMENT: () => dispatch({ type: 'INCREMENT' }),
    DECREMENT: () => dispatch({ type: 'DECREMENT' }),
  };
};

export const exportObj = {
  Counter: connect(mapStateToProps, mapDispatchToProps)(CounterClass),
};
export default Counter;
