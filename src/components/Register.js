import React, { useState } from "react";

const Register = ({ loadSection }) => {
  const [formData, setFormData] = useState({ name: "", email: "", password: "" });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const registerUser = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:8000/api/register/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        alert("Registration successful! You can now log in.");
        loadSection("login");
      } else {
        alert("Registration failed. Please try again.");
      }
    } catch (error) {
      console.error("Error during registration:", error);
    }
  };

  return (
    <form className="register-form" onSubmit={registerUser}>
  <h2>Register</h2>
  <label>:Full Name:</label>
  <input type="text" name="name" onChange={handleInputChange} required />
  <label>Email:</label>
  <input type="email" name="email" onChange={handleInputChange} required />
  <label>Password:</label>
  <input type="password" name="password" onChange={handleInputChange} required />
  <button type="submit">Register</button>
</form>

  );
};

export default Register;
