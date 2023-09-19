import React from 'react';
import '../../css/signup.css';
import { Link } from 'react-router-dom';
const Loginpage = () => {
  return (
    <div className='home-back'>
    <div className="signup-container1">
        <h1 className='signup-title'>Login</h1>
        <form >
            <div className="form-group">
                <input
                    type="text"
                    id='ip-fd'
                    placeholder="Username"
                    //value={username}
                    //onChange={(e) => setUsername(e.target.value)}
                    required
                />
            </div>
            <div className="form-group">
                <input
                    type="password"
                    id='ip-fd'
                    placeholder="Password"
                    //value={password}
                    //onChange={(e) => setPassword(e.target.value)}
                    required
                />
            </div>
            <button id='reg-btn' type="submit">Login</button>
        </form>
        {/* <p className='lg-link'>Already have an account?<Link to="/signin">Sign In</Link></p> */}
        <p className='lg-link'>Dont have an account?<a href="/auth/signup">Signup</a></p></div>
    </div> 
  )
}

export default Loginpage