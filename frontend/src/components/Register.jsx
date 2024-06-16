import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; 


function Register() {
  const [values, setValues] = useState({
    email: '',
    password: '',
    user_name: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues(prevValues => ({
      ...prevValues,
      [name]: value
    }));
  };
  const navigate = useNavigate();


  const handleRegister = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post('http://localhost:3000/api/auth/Register', {
        email: values.email,
        password: values.password,
        user_name: values.user_name
      });

      // Assuming the response contains a message indicating success or failure
      const { message } = response.data;

      if (message === 'User registered successfully') {
        alert('User registered successfully');
        navigate('/');
        // Optionally, redirect to login page or handle token storage
      } else {
        alert('Registration failed');
      }
    } catch (error) {
      // Handle error responses from server
      if (error.response) {
        const errorMessage = error.response.data.error;
        if (errorMessage === 'Email or username already exists') {
          alert('Email or username already exists');
        } else if (errorMessage === 'All fields are required') {
          alert('All fields are required');
        } else {
          console.error('Registration error:', errorMessage);
          alert('Registration failed');
        }
      } else {
        console.error('Registration error:', error.message);
        alert('Registration failed');
      }
    }
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", margin: "20px 0" }}>
      <h2>Register</h2>
      <form onSubmit={handleRegister} style={{ margin: "50px 30vw" }}>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
          <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
            name="email" value={values.email} onChange={handleChange} />
          <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
          <input type="password" className="form-control" id="exampleInputPassword1"
            name="password" value={values.password} onChange={handleChange} />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputuser_name" className="form-label">Username</label>
          <input type="text" className="form-control" id="exampleInputuser_name"
            name="user_name" value={values.user_name} onChange={handleChange} />
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <button type="submit" className="btn btn-primary">Register</button>
        </div>
      </form>
    </div>
  );
}

export default Register;
