import React from 'react'
// here we import a search filter component
import SearchFilter from '../Components/SearchFilter'
// here we are import my Categiryfilter component
import Categiryfilter from '../Components/Categiryfilter'

import ProducttCartt from '../Components/ProducttCartt'

import { useCart } from '../Context/CartContext'

const ProductList = () => {
  const { products } = useCart();
  return (
    <>
    <div className="container  "></div>
      <SearchFilter />
      <Categiryfilter />

      <h2 className='text-2xl font-extrabold mx-auto text-white px-4 md:px-4 pt-4'>Feature Gear ({products.length} items)</h2>

      <div className='mt-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 justify-center items-center '>
        {products.map((product , index ) => <ProducttCartt key={index} product={product}/>)}
        </div>
    </>
  )
}

export default ProductList
