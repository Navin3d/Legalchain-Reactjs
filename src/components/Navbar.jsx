import React from 'react'
import '../css/homepage.css'
const Navbar = () => {
  return (
    <div className="nav">
        <h3 className="navbar-css">Legal Chain</h3>
        <div className="nav-links">
        <a href="/mydocs">MY DOCS</a>
        <a href="/upload">UPLOAD</a>
        <a href="/document">LIST</a>
        <a href="/auth/signup">REGISTER</a>
        <a href="/auth/signup">LOGIN</a>
        </div>
    </div>

  )
}

export default Navbar