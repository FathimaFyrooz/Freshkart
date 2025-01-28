import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Box, TextField, Button, Typography, ThemeProvider, Link } from "@mui/material";
import theme from "./theme"; // Import the theme
import loginStyles from "../Styles/loginStyles";
import axios from "axios"; // Import Axios for API calls

const Login = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [message, setMessage] = useState(null);
  const [error, setError] = useState(null);
  const nav=useNavigate();

  // Handle form field changes
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault();
    setError(null);
    setMessage(null);

    try {
      const response = await axios.post("http://127.0.0.1:8000/auth/login/", {
        email: formData.email, // Assuming email serves as the username
        password: formData.password,
      });

      // Show success message or handle login (e.g., save token, redirect)
      setMessage(response.data.message || "Login successful!");
      setFormData({ email: "", password: "" });
      nav('/jde')


      // You can also handle saving a token or redirecting the user:
      // localStorage.setItem("token", response.data.token);
      // navigate to another page if necessary
    } catch (err) {
      setError(err.response?.data?.error || "Invalid credentials. Please try again.");
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <Box sx={loginStyles.outerloginBox}>
        <Box sx={loginStyles.innerloginBox}>
          <Typography variant="h4" align="center" color="text.primary" gutterBottom>
            Welcome Back!
          </Typography>
          {message && <Typography align="center" color="success.main">{message}</Typography>}
          {error && <Typography align="center" color="error.main">{error}</Typography>}
          <form onSubmit={handleSubmit}>
            <TextField
              label="Email"
              name="email"
              type="email"
              variant="outlined"
              fullWidth
              margin="normal"
              value={formData.email}
              onChange={handleChange}
              sx={loginStyles.logintextField}
              required
            />
            <TextField
              label="Password"
              name="password"
              type="password"
              variant="outlined"
              fullWidth
              margin="normal"
              value={formData.password}
              onChange={handleChange}
              sx={loginStyles.logintextField}
              required
            />
            <Button type="submit" variant="contained" fullWidth sx={loginStyles.loginbutton}>
              Log In
            </Button>
          </form>
          <Typography variant="body2" align="center" sx={loginStyles.logintext}>
            Not yet registered?{" "}
            <Link href="/register">
              Register
            </Link>
          </Typography>
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default Login;
