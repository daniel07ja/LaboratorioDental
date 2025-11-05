import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Prc from "../pages/Prc";
import PrcSuccess from "./pages/PrcSuccess";
import PrincError from './pages/PrincError';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Prc" element={<Prc />} />
        <Route path="/PrincError" element={<PrincError />} />
        <Route path="/PrcSuccess" element={<PrcSuccess />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
