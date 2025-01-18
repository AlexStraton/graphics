
import ConstituenciesList from "./ConstituenciesList";
import SearchBar from "../../components/SearchBar";
import { useState, useEffect } from "react";


function Constituencies({constituenciesPerPage, allConstituencies, setCurrentPage}) {
    const [filteredConstituencies, setFilteredConstituencies] = useState(allConstituencies);
        const [search, setSearch] = useState(false)

    useEffect(() => {
        if (allConstituencies.length > 0) {
          setFilteredConstituencies(allConstituencies);
        }
      }, [allConstituencies]);

    const handleSearch = (userInput) => {
        const searchedConstituency = allConstituencies.filter((constituency) =>
            constituency.name.toLowerCase().includes(userInput.toLowerCase())
    );
    setFilteredConstituencies(searchedConstituency);
    setCurrentPage(1);
    setSearch(true)
        if (userInput.trim() === "") {
            setFilteredConstituencies(allConstituencies);
            setSearch(false);
        };
    }
const searchBy = "Search by constituency name..."

  return (
    <main className="min-h-screen bg-gray-100 py-8 w-full">
      <div className="container mx-auto">
      <header className="mb-6 text-center">
          <h1 className="text-3xl font-bold text-gray-800">Constituencies</h1>
          <p className="text-gray-800">A list of constituencies and their counties</p>
        </header>
        <SearchBar placeholder={searchBy} onSearch={handleSearch}/>
       <ConstituenciesList constituencies={search ? filteredConstituencies : constituenciesPerPage}/>
      </div>

    </main>
  )
}

export default Constituencies;
