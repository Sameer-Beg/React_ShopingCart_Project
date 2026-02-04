// in this page i m creating a search filter component
import React from 'react'
// icon import
import { Search } from 'lucide-react';

const SearchFilter = ({searchTerm ,setSearchTerm}) => {
  return (
    <>
        <div className='mb-5 p-5 bg-gray-900 rounded-2xl shadow-xl border border-gray-800'>
            <div className='flex items-center border border-gray-700 rounded-xl overflow-hidden focus-within:ring-4 focus-within:ring-orange-600/50 transition duration-300 bg-gray-800'>
             <Search className='w-5 h-5 text-gray-500 ml-4 '/>
                <input type="text" placeholder='Search High-Performance Product By Name Or Feature..' className='w-full p-4 outline-none text-white bg-gray-800 placeholder-gray-500 text-base font-medium' aria-label='Search Products' value={searchTerm}
                 onChange={(e)=>setSearchTerm(e.target.value)}/>
            </div>
        </div>
    </>
  )
}

export default SearchFilter
