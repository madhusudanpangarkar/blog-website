import React, { useState } from 'react'
import { FaUser , FaLock } from "react-icons/fa";
import './signup.css';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Signup = () => {
    const navigate = useNavigate();
    const [inputs, setInputs] = useState({
        username: "",
        email: "",
        password: "",
    });

    const handleLogin = () => {
        navigate('/login')
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
            const {data} = await axios.post('http://localhost:3001/api/v1/user/register', {
                username: inputs.username,
                email: inputs.email,
                password: inputs.password,
            });
            if (data.success) {
                alert("User Registered Successfully");
                navigate("/login");
            }
        } catch (error) {
            console.log(error);
        }
        // console.log(inputs);
    };
  return (
    <div className='register'>
        <div className='wrapper'>
            <form onSubmit={handleSubmit}>
                <h1>Register</h1>
                <div className='input-box'>
                    <input type="email" 
                    placeholder='Email' 
                    name='email'
                    value={inputs.email} 
                    onChange={handleChange}
                    required />
                    <FaUser className='icon' />
                </div>
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
                <button type='submit'>Register</button>
                <div className="register-link">
                <p>Already have an account <a onClick={handleLogin} className='cursor-pointer' >Login here</a></p>
                </div>
            </form>
        </div>
    </div>
  )
}


export default Signup;
