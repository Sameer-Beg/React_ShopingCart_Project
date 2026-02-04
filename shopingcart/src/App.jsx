// All imports here 
import React from 'react'
import Navbar from './Components/Navbar'
import ProductList from './Pages/ProductList'
import Cart from './Pages/Cart'
import CheckOut from './Pages/CheckOut'
import ProductDetails from './Pages/ProductDetails'
import Footer from './Components/Footer'

// react router dom imports
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'


// toastyfiy
import { ToastContainer, toast, Bounce } from 'react-toastify';

const App = () => {
  const name = "sameer beg"
  return (
    <>
      {/* router  */}
      <Router>

        {/* // toast container  */}
        <ToastContainer
          position="top-right"
          autoClose={1500}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick={false}
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
          transition={Bounce}
        />

        {/* background color and font style  */}
        <div className='min-h-screen bg-gray-900 font-serif'>
          {/* navbar  */}
          <Navbar />
          {/* routes here */}
          <Routes>
            <Route path='/' element={<ProductList />} />
            <Route path='/product/:id' element={<ProductDetails />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/checkout' element={<CheckOut />} />
          </Routes>
          {/* footer here  */}
          <Footer />
        </div>
      </Router>

    </>
  )
}

export default App
