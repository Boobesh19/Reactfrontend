import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [credentials, setCredentials] = useState({ username: "", password: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    if (credentials.username && credentials.password) {
      sessionStorage.setItem("isLoggedIn", "true");
      sessionStorage.setItem("username", credentials.username); // Store username for verification
      
      console.log("Login Successful!");
      console.log("User:", credentials.username);
      console.log("isLoggedIn:", sessionStorage.getItem("isLoggedIn"));

      alert("Login Successful!");
      navigate("/");
      window.location.reload();
    } else {
      console.log("Login failed: Invalid credentials");
      alert("Please enter valid credentials.");
    }
  };

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleLogin}>
        <div className="form-group">
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            name="username"
            placeholder="Enter your username"
            value={credentials.username}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Enter your password"
            value={credentials.password}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
