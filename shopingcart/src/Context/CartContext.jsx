import { createContext } from "react";

import { useContext } from "react";

const cartContext = createContext();

import { initialProducts } from "../data/product";

import React from 'react'

const products = initialProducts;



export const Cartprovider  = ({children}) => {
  return (
    <div>
      <cartContext.Provider value={{ products }}>
        {children}
      </cartContext.Provider>
    </div>
  )
}

export const useCart = () => useContext(cartContext);




