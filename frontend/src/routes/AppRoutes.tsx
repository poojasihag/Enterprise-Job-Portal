import { Routes, Route } from "react-router-dom";

import LandingPage from "../pages/public/LandingPage";
import LoginPage from "../pages/public/LoginPage";
import RegisterPage from "../pages/public/RegisterPage";


function AppRoutes(){

return (

<Routes>


<Route 
 path="/" 
 element={<LandingPage/>}
/>


<Route 
 path="/login" 
 element={<LoginPage/>}
/>


<Route 
 path="/register" 
 element={<RegisterPage/>}
/>


</Routes>

)

}


export default AppRoutes;