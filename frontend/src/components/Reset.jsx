import React, { useState } from 'react';
import axios from 'axios';

function Reset() {
  const [values, setValues] = useState({
    email: ''
    
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
        email: values.email
        
      });

      // Assuming the response contains a message and token
      const { message, token } = response.data;

      if (message === 'Login successful') {
        alert('Login successful');
        // Store token in localStorage or session storage
        localStorage.setItem('token', token);
        // Redirect to dashboard or profile page
         // Replace '/dashboard' with your desired route
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
      <h2>Reset Password</h2>
      <form onSubmit={handleLogin} style={{ margin: "50px 30vw" }}>
      
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
          <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
            name="email" value={values.email} onChange={handleChange} />
          <div id="emailHelp" className="form-text">Enter your registered emailadress</div>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <button type="submit" className="btn btn-primary">Reset </button>
        </div>
      </form>
      
    </div>
  );
}

export default Reset;
