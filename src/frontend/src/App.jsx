import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import prc from "../pages/Prc";
import prc_success from "./pages/PrcSuccess";
import princ_error from './pages/PrincError';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/prc" element={<Prc />} />
        <Route path="/prc_error" element={<princ_error />} />
        <Route path="/princ_success" element={<prc_success />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
