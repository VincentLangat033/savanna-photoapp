import React, { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { Box, TextField, Button, Typography, Alert, Paper } from "@mui/material";

const Register = () => {
  const { registerWithEmail, registerWithGoogle } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    setError("");

    try {
      await registerWithEmail(email, password);
      navigate("/home");
    } catch (err) {
      setError(err.message);
    }
  };

  const handleGoogleSignup = async () => {
    try {
      await registerWithGoogle();
      navigate("/home");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      minHeight="100vh"
      bgcolor="#E3F2FD" // Matches Login.js background
      p={3}
    >
      <Paper 
        elevation={3} 
        sx={{
          width: 400, // Matches Login.js card size
          p: 4,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          borderRadius: 2,
        }}
      >
        <Typography variant="h4" fontWeight="bold" mb={2}>
          Register
        </Typography>

        {error && <Alert severity="error" sx={{ width: "100%" }}>{error}</Alert>}

        {/* Email/Password Signup Form */}
        <Box
          component="form"
          onSubmit={handleRegister}
          display="flex"
          flexDirection="column"
          gap={2}
          width="100%"
        >
          <TextField
            label="Email"
            variant="outlined"
            fullWidth
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <TextField
            label="Password"
            type="password"
            variant="outlined"
            fullWidth
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <Button type="submit" variant="contained" color="primary" fullWidth>
            Register
          </Button>
        </Box>

        <Box mt={2} width="100%">
          <Button 
            onClick={handleGoogleSignup} 
            variant="contained" 
            color="error" 
            fullWidth
          >
            Sign Up with Google
          </Button>
        </Box>
      </Paper>
    </Box>
  );
};

export default Register;
