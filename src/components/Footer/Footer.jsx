import React from 'react'
import '../Footer/Footer.scss'


const Footer = () => {
  return (
    <div className='footer'>
       <div className="top">
        <div className="item">
          <h1>Categories</h1>
          <span>Women</span>
          <span>Men</span>
          <span>Shoes</span>
          <span>Accessories</span>
          <span>New Arrivals</span>
        </div>
        <div className="item">
          <h1>Links</h1>
          <span>FAQ</span>
          <span>Pages</span>
          <span>Stores</span>
        </div>
        <div className="item">
          <h1>About</h1>
          <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos vel corporis assumenda quibusdam repellendus ratione dignissimos dolores similique doloribus consequuntur.</span>
        </div>
        <div className="item">
          <h1>Contact</h1>
          <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore neque ut totam odit iure ratione ipsa ab aspernatur hic inventore.</span>
        </div>
       </div>
       <div className="bottom">
        <div className="left">
          <div className="logo">SUKALP</div>
          <div className="copy-right">Copyright 2023 ,All Rights Reserved</div>
        </div>
        <div className="right"></div>
       </div>
    </div>
  )
}

export default Footer