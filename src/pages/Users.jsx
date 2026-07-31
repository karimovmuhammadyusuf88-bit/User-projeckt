import { useState } from "react";

import { users as userData } from "../data/users";

import Search from "../components/Search";
import UserMap from "../components/UserMap";

import { useOutletContext } from "react-router-dom";
import CreateModal from "../components/CreateModal";
function Users() {
  const { showForm, setShowForm } = useOutletContext();
  const [users, setUsers] = useState(userData);
  const [search, setSearch] = useState("");


  // Search
  const filteredUsers = users.filter((user) =>
    `${user.firstName} ${user.lastName} ${user.job} ${user.city}`
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  // Delete
  const handleDelete = (id) => {
    const confirmDelete = window.confirm(
      "Rostdan ham o'chirmoqchimisiz?"
    );

    if (confirmDelete) {
      setUsers(users.filter((user) => user.id !== id));
    }
  };

  // Edit
  const handleEdit = (user) => {
    const firstName = prompt("First Name", user.firstName);
    const lastName = prompt("Last Name", user.lastName);
    const job = prompt("Job", user.job);
    const city = prompt("City", user.city);
    const age = prompt("Age", user.age);

    if (firstName && lastName && job && city && age) {
      setUsers(
        users.map((item) =>
          item.id === user.id
            ? {
              ...item,
              firstName,
              lastName,
              job,
              city,
              age,
            }
            : item
        )
      );
    }
  };

  return (
    <>
      {/* <button
        onClick={() => setShowForm(true)}
        className="bg-blue-600 text-white px-5 py-2 rounded mb-5"
      >
        Create
      </button> */}


      <CreateModal
        showForm={showForm}
        setShowForm={setShowForm}
        users={users}
        setUsers={setUsers}
      />
      <Search
        search={search}
        setSearch={setSearch}
        placeholder="Search users..."
      />

      <UserMap
        users={filteredUsers}
        handleEdit={handleEdit}
        handleDelete={handleDelete}
      />
    </>
  );
}

export default Users;