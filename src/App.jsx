import { Routes, Route } from "react-router-dom";
import Auth from "./Auth";
import Dashboard from "./Dashboard";
import Protected from "./Protected";

export default function App() {
  return (
    <Routes>
      <Route path="/login" element={<Auth />} />
      
      <Route 
        path="/dashboard" 
        element={
          <Protected>
            <Dashboard />
          </Protected>
        } 
      />
    </Routes>
  );
}
