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
        <div className="signup-container">
            <h1>Sign Up</h1>
            <form onSubmit={handleSignUp}>
                <div className="form-group">
                    <input
                        type="text"
                        placeholder="First Name"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <input
                        type="text"
                        placeholder="Last Name"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <input
                        type="text"
                        placeholder="Aadhar Number"
                        value={aadharNumber}
                        onChange={(e) => setAadharNumber(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <input
                        type="tel"
                        placeholder="Phone Number"
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <input
                        type="text"
                        placeholder="Username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Register</button>
            </form>
            <p>Already have an account? <Link to="/signin">Sign In</Link></p>
        </div>
    );
}

export default SignUpPage;

