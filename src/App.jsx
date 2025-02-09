import { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Shop from './pages/Shop'
import ShopCategory from './pages/ShopCategory'
import Product from './pages/Products'
import LoginSignUp from './pages/LoginSignUp'
import Cart from './pages/Cart'
import Blog from './pages/Blog'
import About from './pages/About'
import Contact from './pages/Contact'


function App() {

  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Shop />} />
          <Route path='/mens' element={<ShopCategory category= 'men' />} />
          <Route path='/womens' element={<ShopCategory category= 'women' />} />
          <Route path='/kids' element={<ShopCategory category= 'kids' />} />
          <Route>
            <Route path='/product' element={<Product />} />
            <Route path=':productId' element={<Product />} />
          </Route>
          <Route path='/login' element={<LoginSignUp />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/blog' element={<Blog />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </BrowserRouter>
      
    </div>
  )
}

export default App
