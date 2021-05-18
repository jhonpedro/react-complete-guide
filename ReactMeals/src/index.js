import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import Modal from './Components/Cart/Modal'
import { StoreProvider } from './store/context'

ReactDOM.render(
  <StoreProvider>
    <App />
    <Modal />
  </StoreProvider>,
  document.getElementById('root')
)
