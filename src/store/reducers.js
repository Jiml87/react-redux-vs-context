import { ADD_PRODUCT_TO_CART, REMOVE_PRODUCT_FROM_CART } from './actions'

const initialState = {
  products: [
    { id: 'a2', title: 'Keyboard', price: 20.0 },
    { id: 'a3', title: 'Table', price: 3.0 },
    { id: 'a4', title: 'Chair', price: 6.99 },
    { id: 'a1', title: 'Gaming Mouse', price: 19.99 },
  ],
  cart: [],
  cartSum: 0,
}

const shopReducer = (state = initialState, action) => {
  let updatedCart
  let updatedItemIndex
  switch (action.type) {
    case ADD_PRODUCT_TO_CART:
      updatedCart = [...state.cart]
      updatedItemIndex = updatedCart.findIndex((item) => item.id === action.payload.id)

      if (updatedItemIndex < 0) {
        updatedCart.push({ ...action.payload, quantity: 1 })
      } else {
        const updatedItem = {
          ...updatedCart[updatedItemIndex],
        }
        updatedItem.quantity++
        updatedCart[updatedItemIndex] = updatedItem
      }
      return { ...state, cart: updatedCart }
    case REMOVE_PRODUCT_FROM_CART:
      updatedCart = [...state.cart]
      updatedItemIndex = updatedCart.findIndex((item) => item.id === action.payload)

      const updatedItem = {
        ...updatedCart[updatedItemIndex],
      }
      updatedItem.quantity--
      if (updatedItem.quantity <= 0) {
        updatedCart.splice(updatedItemIndex, 1)
      } else {
        updatedCart[updatedItemIndex] = updatedItem
      }

      return { ...state, cart: updatedCart }
    default:
      return state
  }
}

export default shopReducer
