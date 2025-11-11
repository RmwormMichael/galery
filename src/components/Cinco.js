import itachi5 from '../images/cinco.jpg'

export const Cinco = () => {
  return (
    <div className="flex justify-center items-center min-h-[60vh] py-8 px-4">
      <div className="max-w-4xl w-full">
        <div className="bg-gray-900/80 backdrop-blur-sm rounded-xl overflow-hidden shadow-2xl border border-red-800/50">
          <div className="relative overflow-hidden">
            <img
              src={itachi5}
              alt="Itachi Uchiha invocando el Amaterasu"
              className="w-full h-auto max-h-[150vh] object-cover transition-transform duration-700 hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
            <div className="absolute bottom-4 left-4">
              <span className="bg-red-600/90 text-white px-3 py-1 rounded-full text-sm font-bold tracking-wide">
                AMATERASU
              </span>
            </div>
          </div>
          
          <div className="p-6">
            <h2 className="text-2xl font-bold text-red-400 mb-2">Amaterasu - Fuego Negro Eterno</h2>
            <p className="text-gray-300 mb-4 leading-relaxed">
              Considerado el poder ofensivo más poderoso del Mangekyō Sharingan. Crea llamas negras que arden a 10,000 grados 
              y no se extinguen hasta reducir su objetivo a cenizas. Las llamas siguen la mirada del usuario, haciendo el ataque casi imposible de evitar.
            </p>
            
            <div className="flex flex-wrap gap-2">
              <span className="bg-red-900/50 text-red-300 px-3 py-1 rounded-full text-xs border border-red-700/50">
                Mangekyō Sharingan
              </span>
              <span className="bg-gray-800 text-gray-300 px-3 py-1 rounded-full text-xs border border-gray-600">
                Fuego Negro
              </span>
              <span className="bg-black text-red-400 px-3 py-1 rounded-full text-xs border border-red-900">
                Ataque Inevitable
              </span>
            </div>
            
            <div className="mt-4 pt-4 border-t border-gray-700">
              <p className="text-red-300 italic text-center">
                "El fuego que quema incluso las llamas... hasta que nada queda..."
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cinco;