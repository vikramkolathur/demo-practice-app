import { FC, JSX } from "react";
import { Navigate } from "react-router-dom";

interface ProtectesRouteData{
    isAuthenticated : boolean;
    children : JSX.Element;
}

const ProtectedRoute : FC<ProtectesRouteData> = ({isAuthenticated,children})=> {
  return (
    isAuthenticated ? children : <Navigate to="/login"/>
  )
}

export default ProtectedRoute;