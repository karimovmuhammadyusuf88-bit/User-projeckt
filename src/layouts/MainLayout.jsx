import { useState } from "react";
import { Outlet } from "react-router-dom";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function MainLayout() {
  const [showForm, setShowForm] = useState(false);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar setShowForm={setShowForm} />

      <main className="flex-1">
        <Outlet context={{ showForm, setShowForm }} />
      </main>

      <Footer />
    </div>
  );
}

export default MainLayout;