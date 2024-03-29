import React, { useState } from 'react'
import { FaUser , FaLock } from "react-icons/fa";
import './signin.css';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Signin = () => {
    const navigate = useNavigate();
    const [inputs, setInputs] = useState({
        username: "",
        password: "",
    });

    const handleRegister = () => {
        navigate("/register");
    }

    const handleChange = (e) => {
        setInputs(prevState => ({
          ...prevState,
          [e.target.name]: e.target.value
        }));
      };
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const {data} = await axios.post('http://localhost:3001/api/v1/user/login', {
                username: inputs.username,
                password: inputs.password,
            });
            if (data.success) {
                alert("User Login Successfully");
                const token = data.data.jwtToken;
                localStorage.setItem("authToken", token);
                localStorage.setItem("userId", data?.user._id);
                navigate("/");
            }
        } catch (error) {
            console.log(error);
        }
        // console.log(inputs);
    };
  return (
    <div className='login'>
        <div className='wrapper'>
            <form onSubmit={handleSubmit}>
                <h1 className='name'>Login</h1>
                <div className='input-box'>
                    <input type="username" 
                    placeholder='Username' 
                    name='username'
                    value={inputs.username}
                    onChange={handleChange}
                    required />
                    <FaUser className='icon' />
                </div>
                <div className='input-box'>
                    <input type="password" 
                    placeholder='Password' 
                    name='password'
                    value={inputs.password}
                    onChange={handleChange}
                    required />
                    <FaLock className='icon' />
                </div>
        
                <div className="remember-forgot">
                    <label><input type="checkbox" />Remember Me</label>
                    <a href="#">Forgot Password</a>
                </div>
                <button className='button' type='submit'>Login</button>
                <div className="register-link">
                <p>Don't have an account? <a className='cursor-pointer' onClick={handleRegister}>Register</a></p>
                </div>
            </form>
        </div>
    </div>
  )
}


export default Signin;
