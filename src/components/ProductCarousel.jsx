import { useState } from 'react'

function ProductCarousel() {

  const products = [
    {
      name: "GameStation 5",
      price: "$500.900",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYwd-Ouzbjw1gcWoTRjgPcxQN8sarLDBaERXgjZovj4w&s=10https://images.unsplash.com/photo-1603252110481-7ba873bf42ab?auto=format&fit=crop&w=600&q=80"
    },
    {
      name: "Xgame One",
      price: "$499.900",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGs--C8eeW8L8tlD0fPf_9VxvtXeH1iBrsqQ1WtwlH_g&s=10ttps://images.unsplash.com/photo-1624378439575-d8705ad7ae80?auto=format&fit=crop&w=600&q=80"
    },
    {
      name: "Nanica Smitch",
      price: "$300.900",
      image: "https://img.asmedia.epimg.net/resizer/v2/4XWUBL4RRVM4PDWTCMH4EJXAYU.jpg?auth=8a0da03d7c8abcc44cdaabc45db58e06276adfee426bee8cdd7b9b291754faae&width=375"
    },
    {
      name: "Blackberry 2.0",
      price: "$2'799.900",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsbBvi8VQzMLjDN3w1-L7XEwO-pWf5WFTBvJ8CQxaMcg&s=10"
    },
    {
      name: "Pear phone GX",
      price: "$20.900",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-pJZZL7nzjxk9tRog8t29NX2KreBTUabM9IJdutOXzQ&s=10"
    },
    {
      name: "KFC Console",
      price: "$5'000.000",
      image: "https://i.ytimg.com/vi/gdsAmyoeZkg/maxresdefault.jpg"
    }
  ]

  const [actual, setActual] = useState(0)

  const siguiente = () => {
    setActual((actual + 1) % products.length)
  }

  const anterior = () => {
    setActual(
      actual === 0
        ? products.length - 1
        : actual - 1
    )
  }

  return (
    <section className="max-w-7xl mx-auto px-8 py-16">

      <div className="text-center mb-10">

        <p className="text-sm tracking-widest text-gray-500 mb-2">
          IMITACIÓN
        </p>

        <h2 className="text-3xl font-bold">
          Productos desagradables que no necesitas pero quieres
        </h2>

      </div>

      <div className="relative">

        <div className="overflow-hidden">

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">

            {products
              .slice(actual, actual + 4)
              .concat(
                actual + 4 > products.length
                  ? products.slice(0, (actual + 4) - products.length)
                  : []
              )
              .map((product) => (

                <div
                  key={product.name}
                  className="group"
                >

                  <div className="h-80 bg-gray-100 overflow-hidden">

                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover
                                 group-hover:scale-105
                                 transition duration-500"
                    />

                  </div>

                  <div className="pt-4">

                    <h3 className="font-semibold">
                      {product.name}
                    </h3>

                    <p className="text-gray-600 mt-2">
                      {product.price}
                    </p>

                    <button
                      className="mt-4 w-full border border-black
                                 py-2 text-sm
                                 hover:bg-black
                                 hover:text-white
                                 transition"
                    >
                      VER ABERRACIÓN
                    </button>

                  </div>

                </div>

              ))}

          </div>

        </div>

        <button
          onClick={anterior}
          className="absolute left-0 top-1/2
                     -translate-y-1/2
                     -translate-x-5
                     bg-white border border-gray-300
                     rounded-full
                     w-10 h-10
                     flex items-center justify-center
                     shadow
                     hover:bg-black hover:text-white
                     transition"
        >
          ‹
        </button>

        <button
          onClick={siguiente}
          className="absolute right-0 top-1/2
                     -translate-y-1/2
                     translate-x-5
                     bg-white border border-gray-300
                     rounded-full
                     w-10 h-10
                     flex items-center justify-center
                     shadow
                     hover:bg-black hover:text-white
                     transition"
        >
          ›
        </button>

      </div>

      <div className="flex justify-center gap-2 mt-8">

        {products.map((_, index) => (

          <button
            key={index}
            onClick={() => setActual(index)}
            className={`h-2 rounded-full transition-all ${
              actual === index
                ? "w-8 bg-black"
                : "w-2 bg-gray-300"
            }`}
          />

        ))}

      </div>

    </section>
  )
}

export default ProductCarousel