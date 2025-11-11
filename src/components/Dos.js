import itachi2 from '../images/dos.jpg'

export const Dos = () => {
  return (
    <div className="flex justify-center items-center min-h-[60vh] py-8 px-4">
      <div className="max-w-4xl w-full">
        <div className="bg-gray-900/80 backdrop-blur-sm rounded-xl overflow-hidden shadow-2xl border border-red-800/50">
          <div className="relative overflow-hidden">
            <img
              src={itachi2}
              alt="Itachi Uchiha invocando el Susanoo"
              className="w-full h-auto max-h-[150vh] object-cover transition-transform duration-700 hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
            <div className="absolute bottom-4 left-4">
              <span className="bg-red-600/90 text-white px-3 py-1 rounded-full text-sm font-bold tracking-wide">
                SUSANOO
              </span>
            </div>
          </div>
          
          <div className="p-6">
            <h2 className="text-2xl font-bold text-red-400 mb-2">Susanoo - El Guerrero Esquelético</h2>
            <p className="text-gray-300 mb-4 leading-relaxed">
              Manifestación física del poder del Mangekyō Sharingan, una entidad gigantesca que protege al usuario 
              y posee un poder destructivo masivo. El Susanoo de Itachi está equipado con la Espada de Totsuka y el Espejo de Yata.
            </p>
            
            <div className="flex flex-wrap gap-2">
              <span className="bg-red-900/50 text-red-300 px-3 py-1 rounded-full text-xs border border-red-700/50">
                Mangekyō Sharingan
              </span>
              <span className="bg-gray-800 text-gray-300 px-3 py-1 rounded-full text-xs border border-gray-600">
                Defensa Absoluta
              </span>
              <span className="bg-black text-red-400 px-3 py-1 rounded-full text-xs border border-red-900">
                Entidad Espiritual
              </span>
            </div>
            
            <div className="mt-4 pt-4 border-t border-gray-700">
              <p className="text-red-300 italic text-center">
                "El Susanoo es la máxima expresión del poder Uchiha..."
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dos;