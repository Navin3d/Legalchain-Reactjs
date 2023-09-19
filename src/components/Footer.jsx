import React from 'react'
import '../css/homepage.css';

const Footer = () => {
  return (
    <div>
        
    <footer className="footer">
      <div className="row">
        <div className="col">
          <p><i class="fa-solid fa-phone">+91 9790778113</i></p>
          </div>
        <div className="col"><p>Copyrights@2023 Emerging programmers</p></div>
        <div className="col">
          <p className='other-links'> 
          <i class="fa-brands fa-facebook"></i>
          <i class="fa-brands fa-instagram"></i>
          <i class="fa-brands fa-whatsapp"></i>
          <i class="fa-brands fa-twitter"></i>  
          </p>
        </div>
      </div>
        
    </footer>

    </div>
  )
}


export default Footer