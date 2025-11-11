import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
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
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-red-900">
        {/* Header */}
        <div className="container mx-auto px-4 py-6">
          <h1 className="text-3xl md:text-4xl font-bold text-center text-red-500 mb-2 tracking-wider">
            Galería de Itachi Uchiha
          </h1>
          <p className="text-center text-gray-300 text-sm">
            El shinobi que sacrificó todo por la paz de Konoha
          </p>
        </div>
        
        <Navegacion />  
        
        {/* Contenido de rutas */}
        <div className="container mx-auto px-4 py-8">
          <Routes>
            <Route path='/uno' element={<Uno />}/>
            <Route path='/dos' element={<Dos />}/>
            <Route path='/tres' element={<Tres />}/>
            <Route path='/cuatro' element={<Cuatro />}/>
            <Route path='/cinco' element={<Cinco />}/>
            <Route path='/seis' element={<Seis />}/>
            {/* Ruta por defecto */}
            <Route path='/' element={
              <div className="text-center py-20">
                <div className="text-red-500 text-6xl mb-4 animate-pulse">☯</div>
                <h2 className="text-2xl text-white font-semibold mb-4">Selecciona una técnica</h2>
                <p className="text-gray-400 max-w-md mx-auto">
                  Explora las poderosas técnicas del Sharingan de Itachi Uchiha
                </p>
              </div>
            }/>
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;