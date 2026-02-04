import { createContext, useState } from "react";
import { useMemo } from "react";

import { useContext } from "react";

const cartContext = createContext();

import { initialProducts } from "../data/product";

import React from 'react'





export const Cartprovider = ({ children }) => {

  const [cart, setcart] = useState([])

  const products = initialProducts;

  // add items into the cart 
  const addtocart = (product) => {
    setcart((prevCart) => {
      const exixtingitem = prevCart.find(item => item.id === product.id);
      if (exixtingitem) {
        return prevCart.map(item => item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item)
      } else {
        return [...prevCart, { ...product, quantity: 1 }]
      }
    })
  }

  // remove items 
  const removefromcart = (productid, removeall) => {
    setcart((prevCart) => {
      const exixtingitem = prevCart.find(item => item.id === productid);
      if (!exixtingitem) return prevCart;

      if (removeall || exixtingitem.quantity === 1) {
        return prevCart.filter(item => item.id != productid)
      } else {
        return prevCart.map(item => item.id === productid ? { ...item, quantity: item.quantity - 1 } : item)

      }
    })
  }

  // clear the cart 
  const clearcart = () => setcart([])

  const cartCount = useMemo(
    () => cart.reduce((total, item) => total + item.quantity, 0),

    [cart]
  );

  const carttotal = useMemo(() => cart.reduce((total, item) => total + item.price * item.quantity, 0),
    [cart]
  )
  console.log("my cart" , cart)
  return (
    <div>
      <cartContext.Provider value={{ products , cart, addtocart , clearcart , carttotal, cartCount, removefromcart  }}>
        {children}
      </cartContext.Provider>
    </div>
  )
}

export const useCart = () => useContext(cartContext);




