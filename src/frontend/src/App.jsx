import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import prc from "./pages/prc";
import prc_success from "./pages/prc_success";
import princ_error from './pages/princ_error';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/prc" element={<prc />} />
        <Route path="/prc_error" element={<princ_error />} />
        <Route path="/princ_success" element={<prc_success />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
