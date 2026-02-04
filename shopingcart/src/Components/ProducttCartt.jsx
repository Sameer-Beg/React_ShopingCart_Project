import React from 'react'
import { ShoppingCart } from "lucide-react";
import { Link } from 'react-router-dom'

import { useCart } from '../Context/CartContext';

const ProducttCartt = ({ product }) => {

   const {addtocart} = useCart();

    return (
        <>
            {/* main div  */}
            <div className='bg-gray-900 rounded-2xl shadow-xl overflow-hidden flex flex-col h-full transition duration-500 transform border border-gray-800 group hover:scale-[1.03] hover:shadow-orange-900/40'>
                {/* link 1  . dynamic routing */}
                <Link to={`/product/${product.id}`} className='relative cursor-pointer overflow-hidden'>
                    {/* product img  */}
                    <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-56 object-cover object-center transition duration-500 group-hover:scale-110 group-hover:opacity-90" />

                    <div className='absolute bottom-0 left-0 bg-orange-600/95 text-white px-5 py-2 text-xl font-extrabold rounded-tr-xl shadow-lg'>
                        ₹{product.price.toFixed(2)}
                    </div>

                </Link>

                {/* link 2  */}
                <div className='p-5 flex flex-col grow'>
                    <Link to={`/product/${product.id}`}>
                        <h3 className='text-2xl font-extrabold text-white mb-2 cursor-pointer hover:text-orange-400 transition duration-200 line-clamp-1'>{product.name}</h3>
                    </Link>

                    {/* here we are showing description of product */}

                    <p className="text-gray-400 text-sm mb-4 line-clamp-3">
                        {product.description}
                    </p>



                    {/* here we are showing category of product */}
                    <div className="flex items-center text-xs text-gray-500 mb-4">
                        <span className="px-3 py-1 bg-gray-800 text-white border border-gray-700 rounded-full font-semibold">
                            {product.category}
                        </span>
                    </div>

                    {/* here we are creating add to cart button  */}
                    <button onClick={()=>addtocart(product)} className="max-auto w-full py-3 bg-orange-600 text-white font-bold rounded-full shadow-lg shadow-orange-800/50 cursor-pointer hover:bg-orange-700 transition duration-300 flex items-center justify-center space-x-2 transform hover:ring-4 hover:ring-pink-600/50 uppercase tracking-wider">
                        <ShoppingCart className="w-5 h-5" />
                        <span>Add to Cart</span>
                    </button>

                </div>

            </div>
        </>
    )
}

export default ProducttCartt
