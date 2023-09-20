import React from 'react'
import { NavLink } from 'react-router-dom';
import '../css/homepage.css'
const Navbar = () => {
  return (
    <div className="nav">
        <h3 className="navbar-css">Legal Chain</h3>
        <div className="nav-links" >
        <a href="/mydocs" >MY DOCS</a>
        <a href="/upload" activeClassName="active">UPLOAD</a>
        <a href="/document"activeClassName="active">LIST</a>
        <a href="/auth/signup" activeClassName="active" >REGISTER</a>
        <a href="/auth/login" activeClassName="active" >LOGIN</a>
        </div>
    </div>
  )
}

export default Navbar




