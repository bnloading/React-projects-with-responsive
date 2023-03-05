import React from 'react'
import styled from 'styled-components'
import { PageHero } from '../components'
import aboutImg from '../assets/hero-bcg.jpeg'

const AboutPage = () => {
  return (
    <main>
      <PageHero tittle={"APP-жайлы"}/>
      <Wrapper className='page section section-center'>
        <img src={aboutImg} alt="aboutImg" />
      <article>
        <div className="tittle">
          <h2> AR аппликейшн жайлы </h2>
          <div className="underline">
          
          </div>
        </div>
        <p>
          Біз күнделікті әрбір заттарға қызығамыз және де оны өз үйімізге қарап көргіміз келеді.
          Біз ұсынатын аппликейшн сізге қолайлы тауарды сатып алмас бұрын үйіңізге сай келе ма жоқ ба тексеріңіз.
        </p>
       
      </article>
        
      </Wrapper>

  
    </main>
  )
}

const Wrapper = styled.section`
  display: grid;
  gap: 4rem;
  img {
    width: 100%;
    display: block;
    border-radius: var(--radius);
    height: 500px;
    object-fit: cover;
  }
  p {
    line-height: 2;
    max-width: 45em;
    margin: 0 auto;
    margin-top: 2rem;
    color: var(--clr-grey-5);
  }
  .title {
    text-align: left;
  }
  .underline {
    margin-left: 0;
  }
  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr;
  }
`
export default AboutPage
