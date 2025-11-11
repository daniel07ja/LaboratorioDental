import { BrowserRouter, Routes, Route } from "react-router-dom";
import Prc from "./pages/Prc";
import Protocolo from "./pages/Protocolo";
import Login from "./pages/Login";
import LoginSuccess from "./pages/LoginSuccess";
import LoginError from "./pages/LoginError";
import Register from "./pages/Register"; 
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Prc />} />
        <Route path="/Protocolo" element={<Protocolo />} />
        <Route path="/login" element={<Login />} />
        <Route path="/loginSuccess" element={<LoginSuccess />} />
        <Route path="/loginError" element={<LoginError />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
