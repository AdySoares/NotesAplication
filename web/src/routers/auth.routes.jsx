import { Route, Routes } from "react-router-dom";
import { Login } from '../pages/Login';
import { Signin } from "../pages/Signin";

export function AuthRoutes(){
  return(
    <Routes>
      <Route path="/" element={<Login/>}/>
      <Route path="/register" element={<Signin/>}/>
    </Routes>
  )
}