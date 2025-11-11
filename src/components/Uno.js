import itachi1 from "../images/uno.jpg";

export const Uno = () => {
  return (
    <div className="flex justify-center items-center min-h-[60vh] py-8 px-4">
      <div className="max-w-4xl w-full">
        {/* Tarjeta de la imagen */}
        <div className="bg-gray-900/80 backdrop-blur-sm rounded-xl overflow-hidden shadow-2xl border border-red-800/50">
          {/* Imagen principal */}
          <div className="relative overflow-hidden">
            <img
              src={itachi1}
              alt="Itachi Uchiha usando Izanami"
              className="w-full h-auto max-h-[150vh] object-cover transition-transform duration-700 hover:scale-105"
            />
            {/* Overlay de gradiente */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
            
            {/* Título superpuesto */}
            <div className="absolute bottom-4 left-4">
              <span className="bg-red-600/90 text-white px-3 py-1 rounded-full text-sm font-bold tracking-wide">
                IZANAMI
              </span>
            </div>
          </div>
          
          {/* Información */}
          <div className="p-6">
            <h2 className="text-2xl font-bold text-red-400 mb-2">Izanami - Jutsu de Destino</h2>
            <p className="text-gray-300 mb-4 leading-relaxed">
              Técnica ocular del Sharingan que captura al objetivo en un bucle temporal infinito, 
              forzándolo a experimentar el mismo momento una y otra vez hasta que acepte su destino.
            </p>
            
            <div className="flex flex-wrap gap-2">
              <span className="bg-red-900/50 text-red-300 px-3 py-1 rounded-full text-xs border border-red-700/50">
                Sharingan
              </span>
              <span className="bg-gray-800 text-gray-300 px-3 py-1 rounded-full text-xs border border-gray-600">
                Genjutsu
              </span>
              <span className="bg-black text-red-400 px-3 py-1 rounded-full text-xs border border-red-900">
                Técnica Prohibida
              </span>
            </div>
            
            <div className="mt-4 pt-4 border-t border-gray-700">
              <p className="text-red-300 italic text-center">
                "El Izanami no mata, sino que hace que el objetivo enfrente su propia verdad..."
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};