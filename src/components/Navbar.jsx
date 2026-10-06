function Navbar() {
  return (
    <nav className="bg-white border-b border-gray-200 px-8 py-5">
      <div className="max-w-7xl mx-auto flex items-center justify-between">

        <h1 className="text-2xl font-bold tracking-widest">
          CALLA ARTURO
        </h1>

        <div className="hidden md:flex gap-8 text-sm">
          <button className="hover:text-gray-500">
            Hombre
          </button>

          <button className="hover:text-gray-500">
            Mujer
          </button>

          <button className="hover:text-gray-500">
            39 tipos de gey
          </button>

          <button className="hover:text-gray-500">
            Colecciones
          </button>

          <button className="hover:text-gray-500">
            Ofertas
          </button>
        </div>

        <div className="flex items-center gap-5">

          <div className="flex items-center border-b border-black w-48 py-2">

            <input
              type="text"
              placeholder="¿QUÉ TU QUIERE?"
              className="w-full outline-none text-xs placeholder-gray-500 bg-transparent"
            />

            <button className="ml-2 hover:scale-110 transition">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m21 21-4.35-4.35m0 0A7.5 7.5 0 1 0 6.04 6.04a7.5 7.5 0 0 0 10.61 10.61Z"
                />
              </svg>
            </button>

          </div>

          <button className="hover:scale-110 transition">

            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 8.5h12l1 12H5l1-12Z"
              />

              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 8.5V6a3 3 0 0 1 6 0v2.5"
              />
            </svg>

          </button>

        </div>

      </div>
    </nav>
  )
}

export default Navbar