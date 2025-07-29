import React, { useEffect, useState } from 'react'

const Pagination = () => {

  const [products, setProducts] = useState([])
  const [page, setPage] = useState(1)
  const itemsPerPage = 10

  const fetchProducts = async () => {
    const res = await fetch('https://dummyjson.com/products?limit=100&skip=10&select=title,price,thumbnail')
    const data = await res.json()

    if (data && data.products) {
      setProducts(data.products)
    }
  }

  function selectPageHandler(selectedPage) {
    if (
      selectedPage >= 1 &&
      selectedPage <= Math.ceil(products.length / itemsPerPage) &&
      selectedPage !== page
    ) {
      setPage(selectedPage)
    }
  }

  useEffect(() => {
    fetchProducts()
  }, [])

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      {products.length > 0 ? (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {products
              .slice((page - 1) * itemsPerPage, page * itemsPerPage)
              .map((product) => (
                <div
                  key={product.id}
                  className="bg-white rounded-2xl shadow-md hover:shadow-lg transition p-4 flex flex-col items-center"
                >
                  <img
                    src={product.thumbnail}
                    alt={product.title}
                    className="w-40 h-40 object-cover rounded-lg mb-4"
                  />
                  <h1 className="text-lg font-semibold text-gray-800 text-center">
                    {product.title}
                  </h1>
                  <p className="text-indigo-600 font-bold mt-2">₹{product.price}</p>
                </div>
              ))}
          </div>

          <div className="flex items-center justify-center gap-4 mt-6">
            <span
              onClick={() => selectPageHandler(page - 1)}
              className={`cursor-pointer text-2xl hover:scale-110 transition ${
                page === 1 ? 'opacity-40 cursor-not-allowed' : ''
              }`}
            >
              👈
            </span>
            <span className="flex gap-2">
              {[...Array(Math.ceil(products.length / itemsPerPage))].map((_, i) => (
                <span
                  key={i}
                  onClick={() => selectPageHandler(i + 1)}
                  className={`px-3 py-1 rounded-lg shadow-md font-medium cursor-pointer transition ${
                    page === i + 1
                      ? 'bg-indigo-500 text-white'
                      : 'bg-white text-gray-700 hover:bg-indigo-500 hover:text-white'
                  }`}
                >
                  {i + 1}
                </span>
              ))}
            </span>
            <span
              onClick={() => selectPageHandler(page + 1)}
              className={`cursor-pointer text-2xl hover:scale-110 transition ${
                page === Math.ceil(products.length / itemsPerPage)
                  ? 'opacity-40 cursor-not-allowed'
                  : ''
              }`}
            >
              👉
            </span>
          </div>
        </>
      ) : (
        <h1 className="text-center text-xl font-semibold text-gray-700">Loading...</h1>
      )}
    </div>
  )
}

export default Pagination
