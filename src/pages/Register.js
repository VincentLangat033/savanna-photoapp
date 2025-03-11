// import React, { useState } from "react";
// import { useAuth } from "../context/AuthContext";
// import { useNavigate } from "react-router-dom";

// const Register = () => {
//   const { registerWithEmail, registerWithGoogle } = useAuth(); // Get auth functions from context
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState("");
//   const navigate = useNavigate();

//   const handleRegister = async (e) => {
//     e.preventDefault();
//     setError("");

//     try {
//       await registerWithEmail(email, password);
//       navigate("/home"); // Redirect to Home after successful registration
//     } catch (err) {
//       setError(err.message);
//     }
//   };

//   const handleGoogleSignup = async () => {
//     try {
//       await registerWithGoogle();
//       navigate("/home"); // Redirect to Home after successful Google signup
//     } catch (err) {
//       setError(err.message);
//     }
//   };

//   return (
//     <div className="min-h-screen flex flex-col items-center justify-center">
//       <h2 className="text-2xl font-bold mb-4">Register</h2>
//       {error && <p className="text-red-500">{error}</p>}
      
//       {/* Email/Password Signup Form */}
//       <form onSubmit={handleRegister} className="flex flex-col gap-3 w-80">
//         <input
//           type="email"
//           placeholder="Email"
//           className="border p-2 rounded"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           required
//         />
//         <input
//           type="password"
//           placeholder="Password"
//           className="border p-2 rounded"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           required
//         />
//         <button className="bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
//           Register
//         </button>
//       </form>

//       <div className="mt-4">
//         <button 
//           onClick={handleGoogleSignup} 
//           className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600"
//         >
//           Sign Up with Google
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Register;


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
