function Categories() {

  const categories = [
    "GameStation 5",
    "Xgame One",
    "Nanica Smitch",
    "Blackberry 2.0"
  ]

  return (
    <section className="max-w-7xl mx-auto px-8 py-16">

      <h2 className="text-3xl font-bold mb-8">
        Explora nuestras ganas de sacarte plata
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-5">

        {categories.map((category) => (

          <button
            key={category}
            className="w-70 h-20 bg-gray-100 hover:bg-gray-200
                       flex items-center justify-center
                       text-lg font-semibold"
          >
            {category}
          </button>

        ))}

      </div>

    </section>
  )
}

export default Categories