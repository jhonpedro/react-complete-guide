import { createContext, useContext, useState } from 'react'

const StoreContext = createContext({
  isModalShowing: false,
  addCartItem: () => {},
  getCartItems: () => {},
  getIsModalShowing: () => {},
  handleClickIsModalShowing: () => {},
})

export const StoreProvider = ({ children }) => {
  const [isModalShowing, setIsModalShowing] = useState(false)
  const [cartItems, setCartItems] = useState([])

  const handleClickIsModalShowing = () => {
    setIsModalShowing((prevState) => !prevState)
  }

  const addCartItem = (newItem) => {
    setCartItems((prevState) => [newItem, ...prevState])
  }

  const getIsModalShowing = () => isModalShowing
  const getCartItems = () => cartItems

  return (
    <StoreContext.Provider
      value={{
        handleClickIsModalShowing,
        getIsModalShowing,
        addCartItem,
        getCartItems,
      }}
    >
      {children}
    </StoreContext.Provider>
  )
}

export const useStore = () => {
  const ctx = useContext(StoreContext)

  if (!ctx) {
    throw new Error('Storecontext must be inside its provider!')
  }

  return ctx
}

export default StoreContext
