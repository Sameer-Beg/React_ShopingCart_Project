// In this page i am creating a header for my shoping cart application
import React from 'react'
// icons import 
import { House } from 'lucide-react';
import { ShoppingCart } from 'lucide-react';
// link 
import { Link } from 'react-router-dom';
const Navbar = () => {
    return (
        <>
            <header className='sticky top-0 bg-gray-900/95 backdrop-blur-md text-white shadow-2xl shadow-gray-900/70 border-b border-orange-900 '>
                <div className="conatiner mx-auto flex justify-between items-center px-4 py-4 ">

                    <Link to={'/'}>
                        <div className="flex items-center space-x-3 cursor-pointer">
                            <House className="w-8 h-8 text-orange-400 drop-shadow-lg" />
                            <h1 className="text-4xl font-extrabold tracking-widest uppercase">
                                WDM<span className="text-orange-400">STORE</span>
                            </h1>
                        </div>
                    </Link>


                    <nav className="flex items-center space-x-6">
                        <Link to={'/cart'} className='relative p-3 bg-orange-500/10 rounded-xl hover:bg-orange-400/20 transition duration-200 border border-orange-400/50 shadow-lg cursor-pointer '>
                            <ShoppingCart className='w-6 h-6 text-orange-400 ' />
                        </Link>
                    </nav>

                </div>
            </header >
        </>
    )
}

export default Navbar
