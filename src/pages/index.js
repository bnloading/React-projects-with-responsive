import React from 'react'
import Home from "./HomePage"
import Products from "./ProductsPage"
import SingleProduct from"./SingleProductPage"
import About from "./AboutPage"
import Cart from "./CartPage"
import Error from "./ErrorPage"
import Checkout from "./CheckoutPage"
import PrivateRoute from "./PrivateRoute"

 
function index() {
  return (
    <div>index</div>
  )
}

export {Home,Products,SingleProduct,About,Cart,Error,Checkout,PrivateRoute}