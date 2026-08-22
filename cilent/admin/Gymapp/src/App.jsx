import Navbar from "./components/navbar";
import Home from "./pages/home";
import AdminUser from "./pages/loginadmin";
import CilentUser from "./pages/logincilent";
import Plans from "./pages/plans";
import { Routes,Route } from "react-router-dom";
import "./App.css"

function App() {

  return (
    <>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/adminlogin" element={<AdminUser/>}/>
      <Route path="/cilentlogin" element={<CilentUser/>}/>
      <Route path="/plans" element={<Plans/>}/>
    </Routes>
    </>
  )
}

export default App
