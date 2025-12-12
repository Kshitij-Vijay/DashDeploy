import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Auth from "./components/Auth";
import ChatRoom from "./components/ChatRoom";
import ProtectedRoute from "./components/ProtectedRoute";
import Signup from "./components/Signup";
import { auth } from "./firebase";
import { signOut } from "firebase/auth";

export default function App() {
  return (
    <div className="app-root">
      
      <nav className="nav" style={{ display: "flex", gap: 20, padding: 20 }}>
        <Link to="/">Home</Link>
        <Link to="/auth">Login</Link>
        <Link to="/signup">Signup</Link>

        <div style={{ flex: 1 }}></div>

        {auth.currentUser ? (
          <button onClick={() => signOut(auth)}>Sign Out</button>
        ) : null}
      </nav>

      <main>
        <Routes>
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <ChatRoom />
              </ProtectedRoute>
            }
          />
          <Route path="/auth" element={<Auth />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </main>
    </div>
  );
}
