import { useState } from "react";
import LoginForm from "./components/auth/LoginForm";
import CreateAccountForm from "./components/auth/CreateAccountForm";

export default function App() {
  const [role, setRole] = useState<string>("Candidate");
  const [isLogin, setIsLogin] = useState(true);

  function handleRole(role: string) {
    setRole(role);
  }

  return (
    <div className="min-h-screen flex flex-row ">
      <div className="w-2/3 flex flex-col justify-between items-start p-8  bg-[#4d659c]">
        <h1 className="text-2xl text-white">Enterprise-Job-Portal</h1>
        <div className="text-white">
          <div className="border-2 w-90 rounded-2xl">
            {" "}
            THE GOLD STANDARD IN TALENT ACQUISTION
          </div>

          <h1 className="text-6xl my-7">
            The Next Generation of{" "}
            <div className="text-[#004af7]">Enterprise Recruitment</div>
          </h1>
          <p className="my-4">
            Where sophisticated intelligence meets world-class talent. Our
            Al-driven ecosystem empowers the world's most innovative companies
            to scale with surgical precision.
          </p>
        </div>
        <div className="text-white">
          <span className=" border-r-2 px-2">@2026 ENTERPRISE JOB PORTAL</span>
          <span className="px-2">TRUSTED BY ROTUNE 500 LEADERS</span>
        </div>
      </div>
      <div className="w-1/3 bg-gray-200 flex flex-col items-center justify-center">
        <div>
          <h1 className="text-2xl">Professional Portal</h1>
          <p>Sign in to access your talent architecture dashboard.</p>
        </div>
        <div className="bg-blue-200 h-12 w-70 border-0 my-4 rounded-md flex flex-row items-center justify-center ">
          <button
            onClick={() => handleRole("Candidate")}
            className={`text-black h-9 w-33 ${role === "Candidate" ? "bg-white" : "bg-blue-200"} border-0 rounded-md shadow-2xl`}
          >
            Candidate
          </button>
          <button
            onClick={() => handleRole("Recruiter")}
            className={`text-black h-9 w-33 ${role === "Recruiter" ? "bg-white" : "bg-blue-200"} border-0 rounded-md shadow-2xl`}
          >
            Recruiter
          </button>
        </div>
        {isLogin ? (
          <LoginForm setIsLogin={setIsLogin} />
        ) : (
          <CreateAccountForm setIsLogin={setIsLogin} />
        )}
      </div>
    </div>
  );
}
