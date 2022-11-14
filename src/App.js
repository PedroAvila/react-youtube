
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Characters from "./components/pages/characters/Characters";
import Home from "./components/pages/home/Home";


function App() {
  return (
   <BrowserRouter>
    <Routes>

      <Route path="/" element={ <Home /> } />
      <Route path="/characters" element={ <Characters /> } />

    </Routes>
   </BrowserRouter>
  );
}

export default App;
