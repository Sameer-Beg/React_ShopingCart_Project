import React from 'react'
// here we are import my data from initialProducts.js 
import { initialProducts } from '../data/product'
import { Tag } from 'lucide-react';
//this is my function to get unique category from my data
const availableCategories = [
  "All", ...new Set(initialProducts.map((p)=>p.category ))
]
const Categiryfilter = ({selectedCategory, setSelectedCategory}) => {
  // const selectedcategory = "Phone"; // Example selected category
  return (
    <>
    <div className='flex flex-wrap gap-3 border border-gray-800 pb-6 '>
      <Tag className='w-5 h-5 text-orange-500 mt-2 mr-2 hidden sm:block'/>
      {availableCategories.map((category) => <button key={category} onClick={()=>setSelectedCategory(category)} className={`px-5 py-2 text-sm font-bold rounded-full transition duration-200 shadow-md text-white ${selectedCategory === category ? 'bg-orange-600 shadow-orange-800/50' : 'bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-orange-400 border border-gray-700'}`}>
        {category}
      </button>)}
    </div>
    </>
  )
}

export default Categiryfilter
