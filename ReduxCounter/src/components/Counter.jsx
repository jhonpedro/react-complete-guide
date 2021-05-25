import classes from './Counter.module.css';
import { connect, useDispatch, useSelector } from 'react-redux';
import { Component } from 'react';

const Counter = () => {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  const toggleCounterHandler = () => {};

  const incrementHandler = () => dispatch({ type: 'INCREMENT' });

  const decrementHandler = () => dispatch({ type: 'DECREMENT' });

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counter}</div>
      <div>
        <button onClick={incrementHandler}>Increment</button>
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
