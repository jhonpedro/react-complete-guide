import { createContext, useContext, useState } from 'react'

const StoreContext = createContext({
  isModalShowing: false,
  addCartItem: () => {},
  getCartItems: () => {},
  editCartItemQuantity: () => {},
  getIsModalShowing: () => {},
  handleClickIsModalShowing: () => {},
})

export const StoreProvider = ({ children }) => {
  const [isModalShowing, setIsModalShowing] = useState(false)
  const [cartItems, setCartItems] = useState([])

  const handleClickIsModalShowing = () => {
    setIsModalShowing((prevState) => !prevState)
  }

  const editCartItemQuantity = (index, action) => {
    setCartItems((prevState) => {
      const newState = [...prevState]
      if (action === 'sum') {
        newState[index].quantity += 1
      }
      if (action === 'sub') {
        newState[index].quantity -= 1
        if (newState[index].quantity === 0) {
          newState.splice(index, 1)
        }
      }

      return newState
    })
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
        editCartItemQuantity,
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
