import { users as userData } from "./data/users";
import { useState } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {

  const [users, setUsers] = useState(userData);
  const [search, setSearch] = useState("");
  const [editUser, setEditUser] = useState(null);


  const filteredUsers = users.filter((user) =>
    `${user.firstName} ${user.lastName} ${user.job} ${user.city}`
      .toLowerCase()
      .includes(search.toLowerCase())
  );



  // DELETE

  const handleDelete = (id) => {

    const confirmDelete = window.confirm(
      "Rostdan ham o'chirmoqchimisiz?"
    );

    if(confirmDelete){
      setUsers(
        users.filter(
          (user)=>user.id !== id
        )
      );
    }

  };




  // EDIT

  const handleEdit = (user)=>{
    setEditUser(user);
  };



  const saveEdit = ()=>{

    setUsers(
      users.map((user)=>
        user.id === editUser.id
        ? editUser
        : user
      )
    );

    setEditUser(null);

  };




  return (

    <>
    
    <Navbar />


    <main className="
    min-h-screen
    bg-slate-100
    py-10
    px-5
    ">



      {/* SEARCH */}

      <div className="
      flex
      justify-center
      mb-10
      ">

        <input

        type="text"

        placeholder="🔍 Foydalanuvchini qidiring..."

        value={search}

        onChange={(e)=>setSearch(e.target.value)}

        className="
        w-full
        max-w-lg
        px-5
        py-3
        rounded-xl
        border
        border-gray-300

        shadow-md

        focus:outline-none
        focus:ring-2
        focus:ring-blue-500

        transition-all
        duration-300
        "

        />

      </div>





      {/* CARDS */}


      <div className="
      grid
      gap-8

      sm:grid-cols-2
      lg:grid-cols-3
      xl:grid-cols-4
      ">


      {
      filteredUsers.map((user)=>(


        <div

        key={user.id}

        className="
        bg-white

        rounded-3xl

        overflow-hidden

        shadow-lg

        group


        hover:shadow-2xl

        hover:-translate-y-3


        transition-all

        duration-500

        "

        >





        {/* IMAGE */}

        <div className="
        relative
        overflow-hidden
        ">


        <img

        src={user.image}

        alt={user.firstName}

        className="
        w-full
        h-72

        object-cover

        group-hover:scale-110

        transition-transform

        duration-700

        "

        />



        <span

        className="
        absolute
        top-4
        right-4

        bg-blue-600

        text-white

        px-4
        py-1

        rounded-full

        text-sm

        shadow-lg

        "

        >

        #{user.id}

        </span>



        <div

        className="
        absolute
        inset-0

        bg-black/0

        group-hover:bg-black/20

        transition-all

        duration-500
        "

        />



        </div>





        {/* CONTENT */}


        <div className="
        p-6
        ">



        <h2

        className="
        text-2xl
        font-bold

        text-slate-800

        group-hover:text-blue-600

        transition-colors

        duration-300

        "

        >

        {user.firstName} {user.lastName}

        </h2>





        <p className="
        text-gray-500
        mt-3
        ">

        💼 {user.job}

        </p>



        <p className="
        text-gray-500
        mt-2
        ">

        📍 {user.city}

        </p>



        <p className="
        text-gray-500
        mt-2
        ">

        🎂 {user.age} yosh

        </p>







        {/* BUTTONS */}


        <div className="
        flex
        gap-3
        mt-6
        ">



        <button

        onClick={()=>handleEdit(user)}

        className="
        flex-1

        bg-blue-600

        text-white

        py-3

        rounded-xl

        font-semibold


        hover:bg-blue-700

        hover:scale-105


        active:scale-95


        transition-all

        duration-300


        shadow-md

        "

        >

        ✏️ Edit

        </button>





        <button

        onClick={()=>handleDelete(user.id)}

        className="
        flex-1

        bg-red-500

        text-white

        py-3

        rounded-xl

        font-semibold


        hover:bg-red-600

        hover:scale-105


        active:scale-95


        transition-all

        duration-300


        shadow-md

        "

        >

        🗑 Delete

        </button>




        </div>


        </div>



        </div>



      ))

      }



      </div>







      {/* EDIT MODAL */}



      {
      editUser && (


      <div

      className="
      fixed
      inset-0

      bg-black/50

      backdrop-blur-sm

      flex

      items-center

      justify-center

      z-50

      ">





      <div

      className="
      bg-white

      w-96

      rounded-3xl

      p-6

      shadow-2xl

      animate-pulse

      ">



      <h2 className="
      text-2xl
      font-bold
      mb-5
      ">

      Edit User

      </h2>






      <input

      className="
      w-full
      border
      p-3
      rounded-xl
      mb-3
      "

      value={editUser.firstName}

      onChange={(e)=>
        setEditUser({
          ...editUser,
          firstName:e.target.value
        })
      }

      />





      <input

      className="
      w-full
      border
      p-3
      rounded-xl
      mb-3
      "

      value={editUser.lastName}

      onChange={(e)=>
        setEditUser({
          ...editUser,
          lastName:e.target.value
        })
      }

      />





      <input

      className="
      w-full
      border
      p-3
      rounded-xl
      mb-5
      "

      value={editUser.job}

      onChange={(e)=>
        setEditUser({
          ...editUser,
          job:e.target.value
        })
      }

      />







      <div className="
      flex
      gap-3
      ">


      <button

      onClick={saveEdit}

      className="
      flex-1

      bg-green-600

      text-white

      py-3

      rounded-xl

      hover:bg-green-700

      transition

      "

      >

      Save

      </button>





      <button

      onClick={()=>setEditUser(null)}

      className="
      flex-1

      bg-gray-400

      text-white

      py-3

      rounded-xl

      hover:bg-gray-500

      transition

      "

      >

      Cancel

      </button>



      </div>





      </div>



      </div>


      )
      }



    </main>


    <Footer />

    </>

  );

}


export default App;