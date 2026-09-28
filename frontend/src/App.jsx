import Navbar from "./components/navbar";
import Home from "./pages/home";
import AdminUser from "./pages/loginadmin";
import CilentUser from "./pages/loginclient";
import Plans from "./pages/plans";
import AdminDash from "./pages/logindashboard";
import ClientRegister from "./pages/clientregister";
import ClientDashboard from "./pages/clientdashboard";
import { Routes,Route } from "react-router-dom";
import "./App.css"

function App() {

  return (
    <>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/admin/login" element={<AdminUser/>}/>
      <Route path="/client/login" element={<CilentUser/>}/>
      <Route path="/plans" element={<Plans/>}/>
      <Route path="/admin/dashboard" element={<AdminDash/>}/>
      <Route path="/client/register" element={<ClientRegister />} />
      <Route path="/client/dashboard" element={<ClientDashboard />} />
    </Routes>
    </>
  )
}

export default App
