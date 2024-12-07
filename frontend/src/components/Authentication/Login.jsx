import { TextField } from "@mui/material";
import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const API_URL = import.meta.env.VITE_REACT_APP_API_URL;
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${API_URL}/api/userlogin`, user, {
        headers: { "Content-Type": "application/json" },
      });
      sessionStorage.setItem("token", response.data.token);
      navigate("/dashboard");
      setUser({ email: "", password: "" });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="container">
      <div className=" d-flex justify-content-center align-items-center rounded vh-100">
        <div className="border p-4 rounded shadow ">
          <h3 className="fw-bold text-primary  text-center mb-3">Login</h3>
          <form onSubmit={handleSubmit}>
            <div class="mb-3">
              <TextField
                label="Email"
                type="email"
                variant="outlined"
                name="email"
                fullWidth
                required
                onChange={(e) => setUser({ ...user, email: e.target.value })}
                value={user.email}
              />
            </div>
            <div class="mb-3">
              <TextField
                label="Password"
                variant="outlined"
                fullWidth
                type="password"
                name="password"
                required
                onChange={(e) => setUser({ ...user, password: e.target.value })}
                value={user.password}
              />
            </div>
            <button type="submit" class="btn btn-primary text-center w-100">
              Submit
            </button>
          </form>
       

          <p className="text-muted mt-2 p-2">Don't have an account? <button className="border-0 text-primary bg-white btn-outline-0" onClick={()=>navigate('/register')}> Register</button></p>
        </div>
      </div>
    </div>
  );
};

export default Login;
