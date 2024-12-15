import React, { useState } from "react";

const Login = ({ loadSection }) => {
  const [formData, setFormData] = useState({ email: "", password: "" });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const loginUser = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:8000/api/token/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        const data = await response.json();
        localStorage.setItem("accessToken", data.access);
        localStorage.setItem("refreshToken", data.refresh);
        alert("Login successful!");
        loadSection("jobs");
      } else {
        alert("Login failed! Check your credentials.");
      }
    } catch (error) {
      console.error("Error during login:", error);
    }
  };

  return (
    <form className="login-form" onSubmit={loginUser}>
  <h2>Login</h2>
  <label>Email:</label>
  <input type="email" name="email" onChange={handleInputChange} required />
  <label>Password:</label>
  <input type="password" name="password" onChange={handleInputChange} required />
  <button type="submit">Login</button>
</form>

  );
};

export default Login;



