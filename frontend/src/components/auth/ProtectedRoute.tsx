import { Navigate, Outlet, useLocation } from "react-router-dom";

type UserRole = "CANDIDATE" | "RECRUITER";

interface ProtectedRouteProps {
  allowedRole?: UserRole;
}

const ProtectedRoute = ({ allowedRole }: ProtectedRouteProps) => {
  const location = useLocation();

  const token = localStorage.getItem("token");
  const user = JSON.parse(localStorage.getItem("user") || "null");

  // User is not logged in
  if (!token) {
    return (
      <Navigate
        to="/login"
        replace
        state={{ from: location }}
      />
    );
  }

  // Role-based protection
  if (allowedRole && user?.role !== allowedRole) {
    // Logged-in user but wrong role
    if (user?.role === "CANDIDATE") {
      return <Navigate to="/candidate/dashboard" replace />;
    }

    if (user?.role === "RECRUITER") {
      return <Navigate to="/recruiter/dashboard" replace />;
    }

    return <Navigate to="/login" replace />;
  }

  return <Outlet />;
};

export default ProtectedRoute;