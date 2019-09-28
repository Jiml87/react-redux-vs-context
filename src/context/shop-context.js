import React from 'react'

export default React.createContext({
  products: [
    { id: 'a2', title: 'Keyboard', price: 20.0 },
    { id: 'a3', title: 'Table', price: 3.0 },
    { id: 'a4', title: 'Chair', price: 6.99 },
    { id: 'a1', title: 'Gaming Mouse', price: 19.99 },
  ],
  cart: [],
  addProductToCart: (product) => {},
  removeProductFromCart: (productId) => {},
})
