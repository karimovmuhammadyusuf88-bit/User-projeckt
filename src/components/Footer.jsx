import React from 'react'

function Footer() {
  return (
    <footer className="bg-green-900 text-white py-6">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between">

        <h2 className="text-2xl font-bold">
          Users App
        </h2>

        <p className="text-gray-300 mt-3 md:mt-0">
          © 2026 All Rights Reserved.
        </p>

        <div className="flex gap-5 mt-3 md:mt-0">
          <a
            href="#"
            className="hover:text-yellow-300 transition"
          >
            Home
          </a>

          <a
            href="#"
            className="hover:text-yellow-300 transition"
          >
            Users
          </a>

          <a
            href="#"
            className="hover:text-yellow-300 transition"
          >
            Products
          </a>
        </div>

      </div>
    </footer>
  );
}

export default Footer;