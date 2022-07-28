import { HashRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import PokedexInput from "./components/PokedexInput";
import Pokedex from "./components/Pokedex";
import PokedexDetail from "./components/PokedexDetail";
import ProtectedRoutes from "./components/ProtectedRoutes";

function App() {
  return (
    <div className="App">
      <HashRouter>
        {/* Rutas protegidas */}
        <Routes>
          <Route path="/" element={<PokedexInput />} />
          <Route element={<ProtectedRoutes />}>
            <Route path="/pokedex" element={<Pokedex />} />
            <Route path="/pokedexdetail/:id" element={<PokedexDetail />} />
          </Route>
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
