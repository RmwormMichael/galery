import itachi6 from '../images/seis.jpg'

export const Seis = () => {
  return (
    <div className="flex justify-center items-center min-h-[60vh] py-8 px-4">
      <div className="max-w-4xl w-full">
        <div className="bg-gray-900/80 backdrop-blur-sm rounded-xl overflow-hidden shadow-2xl border border-red-800/50">
          <div className="relative overflow-hidden">
            <img
              src={itachi6}
              alt="Itachi Uchiha usando el Tsukuyomi"
              className="w-full h-auto max-h-[150vh] object-cover transition-transform duration-700 hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
            <div className="absolute bottom-4 left-4">
              <span className="bg-red-600/90 text-white px-3 py-1 rounded-full text-sm font-bold tracking-wide">
                TSUKUYOMI
              </span>
            </div>
          </div>
          
          <div className="p-6">
            <h2 className="text-2xl font-bold text-red-400 mb-2">Tsukuyomi - Ilusión Mortal</h2>
            <p className="text-gray-300 mb-4 leading-relaxed">
              El genjutsu más poderoso del Mangekyō Sharingan. En el mundo ilusorio del Tsukuyomi, Itachi controla completamente 
              el tiempo, espacio y materia. 72 horas de tortura en el genjutsu equivalen a solo un segundo en el mundo real.
            </p>
            
            <div className="flex flex-wrap gap-2">
              <span className="bg-red-900/50 text-red-300 px-3 py-1 rounded-full text-xs border border-red-700/50">
                Mangekyō Sharingan
              </span>
              <span className="bg-gray-800 text-gray-300 px-3 py-1 rounded-full text-xs border border-gray-600">
                Genjutsu Supremo
              </span>
              <span className="bg-black text-red-400 px-3 py-1 rounded-full text-xs border border-red-900">
                Control Mental
              </span>
            </div>
            
            <div className="mt-4 pt-4 border-t border-gray-700">
              <p className="text-red-300 italic text-center">
                "En mi ilusión, el tiempo y el dolor son lo único real..."
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Seis;