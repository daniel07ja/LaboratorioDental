import { BrowserRouter, Routes, Route } from "react-router-dom";
import Prc from "./pages/Prc";
import Protocolo from "./pages/Protocolo";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Prc />} />
        <Route path="/protocolo" element={<Protocolo />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
