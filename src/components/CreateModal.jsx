import { useRef } from "react";

function CreateModal({ showForm, setShowForm, users, setUsers }) {
  const firstNameRef = useRef();
  const lastNameRef = useRef();
  const ageRef = useRef();
  const cityRef = useRef();
  const jobRef = useRef();

  const handleCreate = (e) => {
    e.preventDefault();

    const newUser = {
      id: Date.now(),
      firstName: firstNameRef.current.value,
      lastName: lastNameRef.current.value,
      age: ageRef.current.value,
      city: cityRef.current.value,
      job: jobRef.current.value,
      image: `https://randomuser.me/api/portraits/men/${Math.floor(
        Math.random() * 90 + 1
      )}.jpg`,
    };

    setUsers([...users, newUser]);

    firstNameRef.current.value = "";
    lastNameRef.current.value = "";
    ageRef.current.value = "";
    cityRef.current.value = "";
    jobRef.current.value = "";

    setShowForm(false);
  };

  if (!showForm) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-lg w-[450px]">
        <h2 className="text-2xl font-bold mb-4">Create User</h2>

        <form onSubmit={handleCreate} className="space-y-3">
          <input
            ref={firstNameRef}
            className="border w-full p-2 rounded"
            placeholder="First Name"
          />

          <input
            ref={lastNameRef}
            className="border w-full p-2 rounded"
            placeholder="Last Name"
          />

          <input
            ref={ageRef}
            className="border w-full p-2 rounded"
            placeholder="Age"
            type="number"
          />

          <input
            ref={cityRef}
            className="border w-full p-2 rounded"
            placeholder="City"
          />

          <input
            ref={jobRef}
            className="border w-full p-2 rounded"
            placeholder="Job"
          />

          <div className="flex justify-end gap-3 mt-4">
            <button
              type="button"
              onClick={() => setShowForm(false)}
              className="px-4 py-2 bg-gray-500 text-white rounded"
            >
              Cancel
            </button>

            <button
              type="submit"
              className="px-4 py-2 bg-green-600 text-white rounded"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default CreateModal;