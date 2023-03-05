import React from 'react'
import styled from 'styled-components'
import logo from '../assets/logo.svg'
import { FaBars } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { links } from '../utils/constants'
import CartButtons from './CartButtons'
import { useProductsContext } from '../context/products_context'
import { useUserContext } from '../context/user_context'

const Nav = () => {
  const {openSidebar}=useProductsContext()
  return <NavContainer>


 

    <div className="nav-center radius">
    <div className="nav-header">
    <Link to="/"  className='logostyle'>
     ARDecor
    </Link>
    <button type='button' className='nav-toggle' onClick={openSidebar}>
      <FaBars/>
    </button>
   </div>
   <ul className='nav-links'>
    {links.map((link)=> {
      const {id,text,url}=link
      return <li key={id}>
        <Link to={url}> {text}</Link>
      </li>
    })}

   </ul>
   <CartButtons/>
    </div>
  
 
  </NavContainer>
}

const NavContainer = styled.nav`
  height: 5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  margin:2rem;
 z-index:999;



  .nav-center {
    width: 90vw;
    margin: 0.5rem 0; 
    margin-left:2rem;
    max-width: var(--max-width);
  }
  .radius{
    justify-content:center;
    width:80%;
    

    height:80%;
    border-radius:48px;
    margin:auto;
    border:solid 1px rgba(0, 0, 0, 0.2);
    
 
  }
  .logostyle{
    font-weight:600;
    color:black;  
    font-size:1.2rem;
   margin-top:0rem;
   margin-left:1rem;
  }
  .nav-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    img {
      width: 175px;
      margin-left: -15px;
    }
  }
  .nav-toggle {
    background: transparent;
    border: transparent;
    color:black;
    cursor: pointer;
    svg {
      font-size: 2rem;
    }
  }
  .nav-links {
    display: none;
  }
  .cart-btn-wrapper {
    display: none;
  }
  @media (max-width:800px)
  {
    .logostyle{
      display:none;
    }
    .radius{
     border:solid 0px;
     box-shadow:none;
    }
    .nav-toggle{
      position:absolute;
      left:80%;
    
    }
    
  }
  @media (max-width:950px)


  {
    .logostyle{
      display:none;
    }
    .radius{
     border:solid 0px;
     box-shadow:none;
    }
    .nav-toggle{
      position:absolute;
      left:80%;
    
    }
  }

  @media (min-width: 992px) {
    .nav-toggle {
      display: none;
   
      
    }
   
   
    .nav-center {
      display: grid;
      grid-template-columns: auto 1fr auto;
      align-items: center;
      color:black;
    }
    .nav-links {
      display: flex;
      justify-content: center;
      li {
        margin: 0 0.5rem;
      }
      a {
        font-family: 'Ubuntu', sans-serif;
font-style: normal;
font-weight: 700;
font-size: 16px;
line-height: 16px;
display: flex;
align-items: center;
text-align: center;

color: #000000;
text-transform:uppercase;
      }
    }
    .cart-btn-wrapper {
      display: grid;
    }
   
  }
`

export default Nav
