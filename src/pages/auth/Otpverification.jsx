import React from 'react'
const Otpverification = () => {
  return (
    <div>
         <div className='home-back'>
        <div className="signup-container1">
        <h1 className='signup-title'>OTP Verification</h1>
        <form >
            <div className="form-group">
                <input
                    type="text"
                    id='ip-fd'
                    placeholder="Aadhar number"  
                    //value={username}
                    //onChange={(e) => setUsername(e.target.value)}
                    required
                />
            </div>
            <div id='date-extend' className="form-group">
                <input
                    type="text"
                    id='ip-fd'
                    placeholder="dd-mm-yyyy"
                    required
                />
            </div>
            <div className="form-group">
                <input
                    type="password"
                    id='ip-fd'
                    placeholder="OTP"
                    //value={password}
                    //onChange={(e) => setPassword(e.target.value)}
                    required
                />
            </div>


            <button id='reg-btn' type="submit">Verify</button>
        </form>
        {/* <p className='lg-link'>Already have an account?<Link to="/signin">Sign In</Link></p> */}
        <p className='lg-link'>Dont have an account?<a href="/auth/signup">Signup</a></p></div>
    </div> 
    </div>
  )
}

export default Otpverification