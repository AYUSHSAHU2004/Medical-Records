import React, { useState } from 'react';
import axios from 'axios';

function Login() {
  const [values, setValues] = useState({
    email: '',
    password: ''
  });

  

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues(prevValues => ({
      ...prevValues,
      [name]: value
    }));
  };

  const handleLogin = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post('http://localhost:3000/api/auth/login', {
        email: values.email,
        password: values.password
      });

      // Assuming the response contains a message and token
      const { message, token } = response.data;

      if (message === 'Login successful') {
        alert('Login successful');
        // Store token in localStorage or session storage
        localStorage.setItem('token', token);
        // Redirect to dashboard or profile page
        history.push('/dashboard'); // Replace '/dashboard' with your desired route
      }
    } catch (error) {
      // Handle error responses from server
      if (error.response) {
        const errorMessage = error.response.data.error;
        if (errorMessage === 'Invalid credentials') {
          alert('Invalid credentials');
        } else {
          console.error('Login error:', errorMessage);
          alert('Login failed');
        }
      } else {
        console.error('Login error:', error.message);
        alert('Login failed');
      }
    }
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", margin: "20px 0" }}>
      <h2>Login</h2>
      <form onSubmit={handleLogin} style={{ margin: "50px 30vw" }}>
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
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <button type="submit" className="btn btn-primary">Login</button>
        </div>
      </form>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", marginTop: "20px" }}>
        <a className="btn btn-primary" href='/Register'>Register</a>
        <div className="form-text">Don't have an account?</div>
      </div>
    </div>
  );
}

export default Login;
