import { FaEdit, FaTrash } from "react-icons/fa";

function UserCard({ user, handleEdit, handleDelete }) {
  return (
    <div className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-2 transition duration-300">

      {/* Avatar */}
      <div className="flex justify-center pt-8">
        <img
          src={user.image}
          alt={user.firstName}
          className="w-32 h-32 rounded-full border-4 border-green-700 object-cover"
        />
      </div>

      {/* Ism */}
      <div className="text-center mt-5">
        <h2 className="text-2xl font-bold text-gray-800">
          {user.firstName} {user.lastName}
        </h2>

        <p className="text-gray-500 mt-2">
          {user.job}
        </p>
      </div>

      {/* Ma'lumotlar */}
      <div className="px-6 py-5 space-y-3">

        <div className="bg-gray-100 rounded-xl p-3">
          <span className="font-semibold">📍 City:</span>{" "}
          {user.city}
        </div>

        <div className="bg-gray-100 rounded-xl p-3">
          <span className="font-semibold">🎂 Age:</span>{" "}
          {user.age}
        </div>

        <div className="bg-gray-100 rounded-xl p-3">
          <span className="font-semibold">💼 Job:</span>{" "}
          {user.job}
        </div>

      </div>

      {/* Tugmalar */}
      <div className="flex justify-center gap-5 pb-6">

        <button
          onClick={() => handleEdit(user)}
          className="w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center hover:bg-blue-700 transition"
        >
          <FaEdit />
        </button>

        <button
          onClick={() => handleDelete(user.id)}
          className="w-12 h-12 rounded-full bg-red-600 text-white flex items-center justify-center hover:bg-red-700 transition"
        >
          <FaTrash />
        </button>

      </div>

    </div>
  );
}

export default UserCard;