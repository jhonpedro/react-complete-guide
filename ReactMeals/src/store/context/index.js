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
    setCartItems((prevState) => {
      let wasPushedToArray = false
      const newState = prevState.map((item) => {
        if (item.name === newItem.name) {
          const quantity = parseInt(newItem.quantity) + parseInt(item.quantity)
          newItem.quantity = quantity
          wasPushedToArray = true
          return newItem
        }
        return item
      })

      if (wasPushedToArray) {
        return newState
      }

      return [newItem, ...prevState]
    })
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
