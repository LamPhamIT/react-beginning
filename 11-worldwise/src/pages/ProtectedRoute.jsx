import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/FakeAuthContext";
import { useEffect } from "react";

function ProtectedRoute({ chilren }) {
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();
  useEffect(function() {
    if(!isAuthenticated) navigate("/");
  },[isAuthenticated, navigate]);

  return isAuthenticated ? chilren : null;
}

export default ProtectedRoute;
