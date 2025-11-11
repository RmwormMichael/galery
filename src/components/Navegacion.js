import { Link, useLocation } from "react-router-dom";
import unoImg from "../images/uno.jpg";
import dosImg from "../images/dos.jpg";
import tresImg from "../images/tres.jpg";
import cuatroImg from "../images/cuatro.jpg";
import cincoImg from "../images/cinco.jpg";
import seisImg from "../images/seis.jpg";

export const Navegacion = () => {
  const location = useLocation();

  const galleryItems = [
    { path: "/uno", img: unoImg, title: "Izanami", desc: "Jutsu de destino" },
    { path: "/dos", img: dosImg, title: "Susanoo", desc: "El guerrero esquelético" },
    { path: "/tres", img: tresImg, title: "Shurikenjutsu", desc: "Técnica de lanzamiento" },
    { path: "/cuatro", img: cuatroImg, title: "Katon: Gōkakyū", desc: "Gran Bola de Fuego" },
    { path: "/cinco", img: cincoImg, title: "Amaterasu", desc: "Fuego negro eterno" },
    { path: "/seis", img: seisImg, title: "Tsukuyomi", desc: "Ilusiones genjutsu" }
  ];

  return (
    <div className="bg-black/50 backdrop-blur-sm border-y border-red-900/50 py-6">
      <div className="container mx-auto px-4">
        <h3 className="text-center text-red-400 font-semibold mb-4 text-lg">
          Técnicas del Sharingan
        </h3>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {galleryItems.map((item) => (
            <Link 
              key={item.path}
              to={item.path}
              className={`
                group relative block text-center transition-all duration-300 transform hover:scale-105
                ${location.pathname === item.path ? 'ring-2 ring-red-500 ring-opacity-70' : ''}
              `}
            >
              <div className="relative overflow-hidden rounded-lg border border-red-900/50 bg-gray-900 p-2">
                <img 
                  src={item.img} 
                  alt={item.title}
                  className="w-full h-24 md:h-28 object-cover rounded-md transition-transform duration-500 group-hover:scale-110"
                />
                
                {/* Efecto de brillo al hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"></div>
                
                {/* Info overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-2 transform translate-y-0 group-hover:translate-y-0 transition-transform duration-300">
                  <span className="text-xs font-semibold text-red-400 block">
                    {item.title}
                  </span>
                </div>
              </div>
              
              {/* Indicador activo */}
              {location.pathname === item.path && (
                <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
              )}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};