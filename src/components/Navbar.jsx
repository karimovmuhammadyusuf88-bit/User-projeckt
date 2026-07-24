function Navbar() {
  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        <h1 className="text-3xl font-bold text-blue-600 cursor-pointer">
          Users
        </h1>

        <ul className="hidden md:flex items-center gap-8 text-lg font-medium">
          <li className="cursor-pointer hover:text-blue-600 transition duration-300">
            Home
          </li>

          <li className="cursor-pointer hover:text-blue-600 transition duration-300">
            Users
          </li>

          <li className="cursor-pointer hover:text-blue-600 transition duration-300">
            About
          </li>

          <li className="cursor-pointer hover:text-blue-600 transition duration-300">
            Contact
          </li>
        </ul>

        <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-xl transition duration-300 hover:scale-105">
          Login
        </button>

      </div>
    </nav>
  );
}

export default Navbar;