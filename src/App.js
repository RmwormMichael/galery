import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import './App.css';
import { Uno } from './components/Uno';
import { Dos } from './components/Dos';
import { Tres } from './components/Tres';
import { Cuatro } from './components/Cuatro';
import { Cinco } from './components/Cinco';
import { Seis } from './components/Seis';
import { Navegacion } from "./components/Navegacion";

function App() {
  return (
    <Router>
      <div className="container">
        <h1 className="text-center mt-3 mb-3 titulo">Galeria de Itachi</h1>
      </div>
      <Navegacion />  
      <Routes>
      <Route path='/uno' element={<Uno />}/>
      <Route path='/dos' element={<Dos />}/>
      <Route path='/tres' element={<Tres />}/>
      <Route path='/cuatro' element={<Cuatro />}/>
      <Route path='/cinco' element={<Cinco />}/>
      <Route path='/seis' element={<Seis />}/>
      </Routes>

    </Router>
  );
}

export default App;
