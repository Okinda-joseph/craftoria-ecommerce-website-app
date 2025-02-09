import React, { useState } from 'react'
import logo from '../../assets/images/logo.png';
import cart from '../../assets/images/cart_icon.png';
import { Link } from 'react-router-dom';

const Navbar = () => {

    const [menu, setMenu] = useState("shop")

    return (

        <header id="header">
            <nav className="navbar navbar-expand-lg sticky-top">
                <div className="container">
                   <div className="logo-wrap">
                        <img src={logo} alt="logo" className="logo-img" />
                        <p className="logo-text fs-3 fw-bold"> <span className='display-5 fw-bold text-title-color'>C</span>raftoria <span className='text-title-color'>.</span></p>
                   </div>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNav"
                        aria-controls="navbarNav"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ms-auto">
                            <li onClick={()=>{setMenu("shop")}} className="nav-item nav-link">
                                <Link to='/' className='active-link'>Shop</Link>    
                                {menu==="shop"? <hr />:<></>}
                            </li>
                            <li onClick={()=>{setMenu("mens")}} className="nav-item nav-link">
                                <Link to='/mens' className='active-link'>Men</Link>  
                                {menu==="mens"? <hr />:<></>}
                            </li>
                            <li onClick={()=>{setMenu("womens")}} className="nav-item nav-link">
                                <Link to='/womens' className='active-link'>Women</Link>  
                                {menu==="womens"? <hr />:<></>}
                            </li>
                            <li onClick={()=>{setMenu("kids")}} className="nav-item nav-link">
                                <Link to='/kids' className='active-link'>Kids</Link>
                                {menu==="kids"? <hr />:<></>}  
                            </li>
                            <li onClick={()=>{setMenu("blog")}} className="nav-item nav-link">
                                <Link to='/blog' className='active-link'>Blog</Link>  
                                {menu==="blog"? <hr />:<></>}
                            </li>
                            <li onClick={()=>{setMenu("about")}} className="nav-item nav-link">
                                <Link to='/about' className='active-link'>About</Link>  
                                {menu==="about"? <hr />:<></>}
                            </li>
                            <li onClick={()=>{setMenu("contact")}} className="nav-item nav-link">
                                <Link to='/contact' className='active-link'>Contact</Link>
                                {menu==="contact"? <hr />:<></>}  
                            </li>
                        </ul>
                        <div className="login-cart-wrap">
                            <Link to='/login' className='active-link'><button className="btn" id='btn'>Login</button></Link>
                            <Link to='/cart' className='active-link'><img src={cart} alt="cart" /></Link>
                            <div className="cart-count">0</div>
                        </div>
                    </div>
                </div>
            </nav>
        </header>

    )
}

export default Navbar
