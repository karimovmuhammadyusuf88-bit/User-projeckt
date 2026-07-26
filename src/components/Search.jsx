import { FaSearch } from "react-icons/fa";


function Search({ search, setSearch, placeholder }) {
  return (
    <section className="py-8 bg-green-600">
      <div className="container mx-auto px-6">

        <div className="relative max-w-3xl mx-auto">

          <FaSearch
            className="
              absolute
              left-5
              top-1/2
              -translate-y-1/2
              text-gray-400
              text-xl
            "
          />

          <input
            type="text"
            placeholder={placeholder}
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="
              w-full
              h-14
              pl-14
              pr-5
              rounded-2xl
              border-2
              border-transparent
              outline-none
              shadow-lg
              text-lg
              focus:border-green-800
              transition
            "
          />

        </div>

      </div>
    </section>
  );
}

export default Search;