import { Routes, Route } from "react-router-dom";
import Prc from "./pages/Prc";
import Works from "./pages/Works";
import Protocolo from "./pages/Protocolo";
import Login from "./pages/Login";
import LoginSuccess from "./pages/LoginSuccess";
import LoginError from "./pages/LoginError";
import Register from "./pages/Register";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Prc />} />
      <Route path="/works" element={<Works />} />
      <Route path="/protocolo" element={<Protocolo />} />
      <Route path="/login" element={<Login />} />
      <Route path="/login-success" element={<LoginSuccess />} />
      <Route path="/loginError" element={<LoginError />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  );
}

export default App;
