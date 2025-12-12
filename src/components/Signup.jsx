import React from "react";
import { auth, googleProvider } from "../firebase";
import { createUserWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const emailSignup = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      navigate("/");
    } catch (err) {
      alert(err.message);
    }
  };

  const googleSignup = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
      navigate("/");
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: 60 }}>
      <h2>Create Account</h2>

      <input 
        type="email" 
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        style={{ padding: "10px", width: "250px", margin: "10px" }}
      />

      <br />

      <input 
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        style={{ padding: "10px", width: "250px", margin: "10px" }}
      />

      <br />

      <button onClick={emailSignup} style={{ padding: "10px 20px", margin: "10px" }}>
        Sign Up
      </button>

      <h3>Or</h3>

      <button onClick={googleSignup} style={{ padding: "10px 20px" }}>
        Sign Up with Google
      </button>
    </div>
  );
}
