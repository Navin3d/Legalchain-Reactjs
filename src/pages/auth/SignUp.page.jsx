import React, { useState } from 'react';
import swal from 'sweetalert';
import axios from "axios";
import { Link } from 'react-router-dom'; // Import Link for redirection (if using React Router)
import '../../css/signup.css'; // Import your CSS file for styling


const SignUpPage = () => {
    // Define state variables to store user input
    const [loading, setLoading] = useState(false);
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [aadharNumber, setAadharNumber] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    // Function to handle form submission
    const handleSignUp = async (e) => {
        e.preventDefault();
        const body = {
            firstName,
            lastName,
            username,
            aadharNumber,
            mobileNumber: phoneNumber,
            email,
            password,
            isLegalUser: true,
        }
        try {
            setLoading(() => true);
            const { data, status } = await axios.post("http://localhost:8080/auth/signup", body);
            if (status == 201) swal(data);
        } catch (e) {
            swal(e.message);
        } finally {
            setLoading(() => false);
        }

    };
    return (
        <div className='home-back'>
        <div className="signup-container">
            <h1 className='signup-title'>Sign Up</h1>
            <form onSubmit={handleSignUp}>
                <div className="form-group">
                    <input
                        type="text"
                        id='ip-fd'
                        placeholder="First Name"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <input
                        type="text"
                        id='ip-fd'
                        placeholder="Last Name"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <input
                        type="text"
                        id='ip-fd'
                        placeholder="Aadhar Number"
                        value={aadharNumber}
                        onChange={(e) => setAadharNumber(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <input
                        type="tel"
                        id='ip-fd'
                        placeholder="Phone Number"
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <input
                        type="email"
                        id='ip-fd'
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <input
                        type="text"
                        id='ip-fd'
                        placeholder="Username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <input
                        type="password"
                        id='ip-fd'
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <button id='reg-btn' type="submit">Register</button>
            </form>
            {/* <p className='lg-link'>Already have an account?<Link to="/signin">Sign In</Link></p> */}
            <p className='lg-link'>Already have an account?<a href="/auth/login">Login</a></p></div>
        </div>    
    );
}

export default SignUpPage;

