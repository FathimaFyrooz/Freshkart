import React, { useState } from "react";
import { Box, TextField, Button, Typography, Link, ThemeProvider } from "@mui/material";
import theme from "./theme";
import loginStyles from "../Styles/loginStyles"; // Importing the styles
import axios from "axios"; // Import Axios for API calls

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [message, setMessage] = useState(null);
  const [error, setError] = useState(null);

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

    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match!");
      return;
    }

    try {
      const response = await axios.post("http://127.0.0.1:8000/auth/register/", {
        username: formData.username,
        email: formData.email,
        password: formData.password,
      },
      {
        headers: {
          "Content-Type":"application/json",
      },
    }
    );
      setMessage(response.data.message || "Registration successful!");
      setFormData({
        username: "",
        email: "",
        password: "",
        confirmPassword: "",
      });
    } catch (err) {
      // Extract detailed errors from the backend
      if (err.response?.data?.error) {
        const errors = err.response.data.error;
        const formattedErrors = Object.entries(errors)
          .map(([field, messages]) => `${field}: ${messages.join(", ")}`)
          .join("\n");
        setError(formattedErrors);
      } else {
        setError("Something went wrong. Please try again.");
      }
    }
  };
  return (
    <ThemeProvider theme={theme}>
      <Box sx={loginStyles.outerloginBox}>
        <Box sx={loginStyles.innerloginBox}>
          <Typography variant="h4" align="center" color="text.primary" gutterBottom>
            Chat Agent Registration   
          </Typography>
          {message && <Typography align="center" color="success.main">{message}</Typography>}
          {error && <Typography align="center" color="error.main">{error}</Typography>}
          <form onSubmit={handleSubmit}>
            <TextField
              label="Username"
              name="username"
              type="text"
              value={formData.username}
              onChange={handleChange}
              variant="outlined"
              fullWidth
              sx={loginStyles.logintextField}
              required
            />
            <TextField
              label="Email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              variant="outlined"
              fullWidth
              sx={loginStyles.logintextField}
              required
            />
            <TextField
              label="Password"
              name="password"
              type="password"
              value={formData.password}
              onChange={handleChange}
              variant="outlined"
              fullWidth
              sx={loginStyles.logintextField}
              required
            />
            <TextField
              label="Confirm Password"
              name="confirmPassword"
              type="password"
              value={formData.confirmPassword}
              onChange={handleChange}
              variant="outlined"
              fullWidth
              sx={loginStyles.logintextField}
              required
            />
            <Button type="submit" variant="contained" fullWidth sx={loginStyles.loginbutton}>
              Register
            </Button>
          </form>
          <Typography variant="body2" align="center" sx={loginStyles.logintext}>
            Already have an account? <Link href="/login">Login</Link>
          </Typography>
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default RegistrationForm;
