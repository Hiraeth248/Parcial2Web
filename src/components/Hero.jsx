function Hero() {
  return (
    <section className="bg-gray-100">

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 items-center">

        <div className="px-8 py-20">

          <p className="text-sm tracking-widest mb-4">
            NUEVA ADICCIÓN
          </p>

          <h2 className="text-5xl font-bold mb-6">
            Sustancia para cada ocasión
          </h2>

          <p className="text-gray-600 mb-8">
            Descubre nuestra nueva colección de cosas inutiles
            creadas para gastar plata en cada momento.
          </p>

          <button className="bg-black text-white px-8 py-3 hover:bg-gray-800">
            Danos plata ahora
          </button>

        </div>

        <div className="h-96 flex items-center justify-center">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrGRv31T_98Q2paZSUcpBhVa8R-ZoxDFwaqZ65PL3APQ&s=10" alt="Hero Image" className="h-full object-cover">
          </img>
        </div>

      </div>

    </section>
  )
}

export default Hero