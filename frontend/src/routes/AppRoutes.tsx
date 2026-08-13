import { Routes, Route } from "react-router-dom";

import LandingPage from "../pages/public/LandingPage";
import LoginPage from "../pages/public/LoginPage";
import RegisterPage from "../pages/public/RegisterPage";

import CandidateDashboard from "../pages/candidate/CandidateDashboard";
import RecruiterDashboard from "../pages/recruiter/RecruiterDashboard";

import ProtectedRoute from "../components/auth/ProtectedRoute";

const AppRoutes = () => {
  return (
    <Routes>
      {/* Public Routes */}
      <Route path="/" element={<LandingPage />} />

      <Route path="/login" element={<LoginPage />} />

      <Route path="/register" element={<RegisterPage />} />

      {/* Candidate Protected Routes */}
      <Route element={<ProtectedRoute allowedRole="CANDIDATE" />}>
        <Route
          path="/candidate/dashboard"
          element={<CandidateDashboard />}
        />
      </Route>

      {/* Recruiter Protected Routes */}
      <Route element={<ProtectedRoute allowedRole="RECRUITER" />}>
        <Route
          path="/recruiter/dashboard"
          element={<RecruiterDashboard />}
        />
      </Route>
    </Routes>
  );
};

export default AppRoutes;