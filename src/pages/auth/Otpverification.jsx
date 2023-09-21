import React, { useState } from 'react';
import axios from "axios";
import swal from 'sweetalert';
import { useNavigate, RedirectFunction } from 'react-router-dom';


const INITIAL_DATA = {
    "type": "LICENSE",
    "ref": "",
    "dob": ""
};

const INITIAL_DATA2 = {
    "email": "",
    "otp": ""
};

const Otpverification = () => {
    const navigate = useNavigate();

    const [authBody, setAuthBody] = useState(INITIAL_DATA);
    const [authBody2, setAuthBody2] = useState(INITIAL_DATA2);

    const [hash, setHash] = useState("");

    const handleOnChange = (e) => {
        const { name, value } = e.target;
        setAuthBody((prev) => ({ ...prev, [name]: value }));
    };

    const handleOnChange2 = (e) => {
        const { name, value } = e.target;
        setAuthBody2((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit1 = async (e) => {
        e.preventDefault();
        try {
            const { data } = await axios.post("http://localhost:8080/transfer/req", authBody);
            swal(data.message);
        } catch (e) {
            console.log(e);
            swal("Error fetching data.");
        }
    }

    const handleSubmit2 = async (e) => {
        e.preventDefault();
        try {
            console.log(authBody2);
            const { data } = await axios.post("http://localhost:8080/transfer/license", authBody2);
            console.log(data);
            swal(data.licenseHash);
            // redirect(`https://fuchsia-atomic-catshark-392.mypinata.cloud/ipfs/${data.licenseHash}`);
            setHash(() => (`https://fuchsia-atomic-catshark-392.mypinata.cloud/ipfs/${data.licenseHash}`))
        } catch (e) {
            console.log(e);
            swal("Error fetching data.");
        }
    }

    return (
        <div>
            <div className='home-back'>
                <div className="signup-container1">
                    <h1 className='signup-title'>OTP Verification</h1>
                    <form onSubmit={handleSubmit1}>
                        <div className="form-group">
                            <input
                                type="text"
                                id='ip-fd'
                                placeholder="License number"
                                required
                                name="ref"
                                value={authBody.ref}
                                onChange={handleOnChange}
                            />
                        </div>
                        <div id='date-extend' className="form-group">
                            <input
                                type="password"
                                id='ip-fd'
                                placeholder="yyyy-MM-dd"
                                required
                                name="dob"
                                value={authBody.dob}
                                onChange={handleOnChange}
                            />
                        </div>

                        <button id='reg-btn' type="submit">Verify</button>
                    </form>
                    {/* <p className='lg-link'>Dont have an account?<a href="/auth/signup">Signup</a></p> */}
                </div>
            </div>

            <div className='home-back'>
                <div className="signup-container2">
                    <h1 className='signup-title'>Get Data</h1>
                    <form onSubmit={handleSubmit2}>
                        <div className="form-group">
                            <input
                                type="text"
                                id='ip-fd'
                                placeholder="Email"
                                required
                                name="email"
                                value={authBody2.email}
                                onChange={handleOnChange2}
                            />
                        </div>
                        <div id='date-extend' className="form-group">
                            <input
                                type="password"
                                id='ip-fd'
                                placeholder="Password"
                                required
                                name="otp"
                                value={authBody2.otp}
                                onChange={handleOnChange2}
                            />
                        </div>
                        <button id='reg-btn' type="submit">Cache Data</button>
                    </form>
                    {/* <p className='lg-link'>Dont have an account?<a href="/auth/signup">Signup</a></p> */}
                </div>
            </div>

            <p>Here: <a style={{ color: "red" }} href={`${hash}`} target="_blank">View Data</a></p>
        </div>
    )
}

export default Otpverification