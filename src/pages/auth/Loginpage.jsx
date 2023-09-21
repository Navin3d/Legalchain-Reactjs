import React, { useState } from 'react';
import axios from 'axios';
import swal from 'sweetalert';

import '../../css/signup.css';
import { Link, useNavigate, redirect } from 'react-router-dom';

const INITIAL_STATE = {
    "username": "",
    "password": ""
};
const Loginpage = () => {
    const navigate = useNavigate();

    const [authBody, setAuthBody] = useState(INITIAL_STATE);
    const [loading, setLoading] = useState(false);

    const handleOnChange = (e) => {
        const { name, value } = e.target;
        setAuthBody((prev) => ({ ...prev, [name]: value }));
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            setLoading(() => true);
            const { data, status } = await axios.post("http://localhost:8080/auth/login", authBody);
            if (status == 200) swal(data);
            // localStorage.setItem("auth", true);
            navigate("/");
        } catch (e) {
            swal(e.message);
        } finally {
            setLoading(() => false);
        }
    }

    return (
        <div className='home-back'>
            <div className="signup-container1">
                <h1 className='signup-title'>Login</h1>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <input
                            type="text"
                            id='ip-fd'
                            placeholder="Username"
                            name="username"
                            value={authBody.username}
                            onChange={handleOnChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="password"
                            id='ip-fd'
                            placeholder="Password"
                            name="password"
                            value={authBody.password}
                            onChange={handleOnChange}
                            required
                        />
                    </div>
                    <button id='reg-btn' type="submit">Login</button>
                </form>
                <p className='lg-link'>Dont have an account?<a href="/auth/signup">Signup</a></p>
            </div>
        </div>
    )
}

export default Loginpage