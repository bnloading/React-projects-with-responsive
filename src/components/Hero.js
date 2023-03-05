import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import  Iphone from "../assets/14 Pro with ARDecor home page 1.png"
import heroBcg1 from "../assets/hero-bcg.jpeg"
import Background from './background'

const Hero = () => {
  
  return <Wrapper className='section-center'>
    
    <article className='content'>
      <h1 className='just'>
      ARDecor көмегімен үйіңізді сенімді
 <br/>түрде жабдықтаңыз
    
      </h1>
      <p>сатып алмас бұрын оның қалай көрінетінін қараңыз</p>
  <Link to="/products" className='btn hero-btn'>
    Сатып алу
  </Link>
  <a href='https://sample.edu/railway'  > <button className='btn hero-btn download'>Жүктеп алу</button></a>
  <Background/>

    </article>
    <article className='img-container'>
    <img src={heroBcg1} alt="nice desk" className='accent-img' />  
    <img src={Iphone} alt="nice table" className='main-img ' />
    </article>
      
  

  </Wrapper>
  
}

const Wrapper = styled.section`
  min-height: 60vh;
  display: grid;
  place-items: center;
  .img-container {
    display: none;
  }
  .just{
    color:black;
    font-weight:600;

  }
  .download{
    margin-left:1rem;
    background:black;
    color:white;
  }
  .download:hover{
    background:gray;
    color:black;

  }

  p {
    line-height: 2;
    max-width: 45em;
    margin-bottom: 2rem;
    color:black;
    font-size: 1rem;
  }
  @media (min-width: 992px) {
    height: calc(100vh - 5rem);
    grid-template-columns: 1fr 1fr;
    gap: 8rem;
    h1 {
      margin-bottom: 2rem;
    }
    p {
      font-size: 1.25rem;
    }
    .hero-btn {
      padding: 0.75rem 1.5rem;
      font-size: 1rem;
    }
    .download{
      padding:0.75rem 1.5rem;
    }
    .img-container {
      width:100%;
      object:cover;

  height:80%;      display: block;
      position: relative;
      bottom:4rem;
    }
    .main-img {
      width: 50%;
      height: 550px;
      position: relative;
      border-radius: var(--radius);
      display: block;
      object-fit: cover;
     
    }
    .accent-img {
      position: absolute;
      width:100%;
      object:cover;
      height:100%;

      left: 15rem;
    
      width:100%;
      transform: translateX(-50%);
      border-radius: var(--radius);
    }
    .img-container::before {
      content: '';
      position: absolute;
      width: 10%;
      height: 80%;
      background: var(--clr-primary-9);
      bottom: 0%;
      left: -8%;
      border-radius: var(--radius);
    }
  }
`

export default Hero
