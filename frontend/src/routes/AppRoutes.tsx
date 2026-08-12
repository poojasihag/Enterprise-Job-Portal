import { Routes, Route } from "react-router-dom";

import LandingPage from "../pages/public/LandingPage";
import LoginPage from "../pages/public/LoginPage";
import RegisterPage from "../pages/public/RegisterPage";
import RecruiterDashboard from "../pages/recruiter/RecruiterDashboard";
import CandidateDashboard from "../pages/candidate/CandidateDashboard";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />

      <Route path="/login" element={<LoginPage />} />

      <Route path="/register" element={<RegisterPage />} />

      <Route path="/candidate" element={<CandidateDashboard />} />

      <Route path="/recruiter" element={<RecruiterDashboard />} />
    </Routes>
  );
}

export default AppRoutes;
