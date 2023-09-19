import React from 'react';
import '../../css/signup.css';
import { Link } from 'react-router-dom';
const Loginpage = () => {
  return (
    <div className="signup-container">
    <h1>Sign Up</h1>
    <form>
        <div className="form-group">
            <input
                type="text"
                placeholder="Username"
                // onChange={(e) => setUsername(e.target.value)}
                required
            />
        </div>
        <div className="form-group">
            <input
                type="Password"
                placeholder="Password"
                // onChange={(e) => setPassword(e.target.value)}
                required
            />
        </div>
        <button type="submit">Register</button>
    </form>
    <p>Already have an account? <Link to="/auth/signup">Sign In</Link></p>
</div>
  )
}

export default Loginpage