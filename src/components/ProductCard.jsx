import { FaEdit, FaTrash } from "react-icons/fa";

function ProductCard({ product, handleEdit, handleDelete }) {
  return (
    <div className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-2 transition duration-300">

      {/* Rasm */}
      <img
        src={product.image}
        alt={product.title}
        className="w-full h-60 object-cover"
      />

      {/* Content */}
      <div className="p-5">

        <h2 className="text-2xl font-bold text-gray-800">
          {product.title}
        </h2>

        <p className="text-gray-500 mt-2">
          {product.brand}
        </p>

        <p className="text-sm text-gray-500 mt-1">
          {product.category}
        </p>

        <p className="text-green-700 text-2xl font-bold mt-4">
          ${product.price}
        </p>

        <div className="mt-3 space-y-2">

          <div className="bg-gray-100 p-3 rounded-xl">
            ⭐ Rating: {product.rating}
          </div>

          <div className="bg-gray-100 p-3 rounded-xl">
            📦 Stock: {product.stock}
          </div>

          <div className="bg-gray-100 p-3 rounded-xl">
            🎁 Discount: {product.discount}%
          </div>

        </div>

        {/* Buttons */}
        <div className="flex justify-center gap-5 mt-6">

          <button
            onClick={() => handleEdit(product)}
            className="w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center hover:bg-blue-700 transition"
          >
            <FaEdit />
          </button>

          <button
            onClick={() => handleDelete(product.id)}
            className="w-12 h-12 rounded-full bg-red-600 text-white flex items-center justify-center hover:bg-red-700 transition"
          >
            <FaTrash />
          </button>

        </div>

      </div>

    </div>
  );
}

export default ProductCard;