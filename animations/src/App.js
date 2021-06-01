import React, { Component } from 'react';
import { Transition } from 'react-transition-group';

import './App.css';
import Modal from './components/Modal/Modal';
import Backdrop from './components/Backdrop/Backdrop';
import List from './components/List/List';

class App extends Component {
  constructor() {
    super();

    this.state = {
      showModal: false,
    };

    this.handleModal = this.handleModal.bind(this);
  }

  handleModal() {
    this.setState((prevState) => ({ showModal: !prevState.showModal }));
  }

  render() {
    return (
      <div className="App">
        <h1>React Animations</h1>
        <Modal closed={this.handleModal} show={this.state.showModal} />
        <Transition
          in={this.state.showModal}
          timeout={500}
          mountOnEnter
          unmountOnExit
        >
          {(state) => {
            return (
              <React.Fragment>
                <Backdrop show={state} />
              </React.Fragment>
            );
          }}
        </Transition>
        <button className="Button" onClick={this.handleModal}>
          Open Modal
        </button>
        <h3>Animating Lists</h3>
        <List />
      </div>
    );
  }
}

export default App;
