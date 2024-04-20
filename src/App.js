import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./componets/pages/home/Home";
import Formulario from "./componets/pages/formulario/Formulario";
import Login from "./componets/pages/login/Login";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Formulario />} />
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
