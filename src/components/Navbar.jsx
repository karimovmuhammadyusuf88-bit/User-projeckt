import { NavLink } from "react-router-dom";

function Navbar() {
  const activeStyle = ({ isActive }) =>
    isActive
      ? "text-yellow-300 border-b-2 border-yellow-300 pb-1"
      : "text-white hover:text-yellow-300 transition";

  return (
    <nav className="bg-green-900 shadow-lg">
      <div className="container mx-auto px-6 py-5 flex items-center justify-between">

        <h1 className="text-4xl font-bold text-white cursor-pointer">
          Users
        </h1>

        <ul className="flex items-center gap-8 text-xl font-semibold">

          <li>
            <NavLink to="/" className={activeStyle}>
              Users
            </NavLink>
          </li>

          <li>
            <NavLink to="/products" className={activeStyle}>
              Products
            </NavLink>
          </li>

        </ul>

      </div>
    </nav>
  );
}

export default Navbar;