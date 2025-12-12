import { Navigate } from "react-router-dom";
import { auth } from "./firebase";

export default function Protected({ children }) {
  if (!auth.currentUser) return <Navigate to="/login" replace />;
  return children;
}
