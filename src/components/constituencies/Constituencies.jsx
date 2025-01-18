
import ConstituenciesList from "./ConstituenciesList";



function Constituencies({constituencies}) {

  return (
    <main className="min-h-screen bg-gray-100 py-8">
      <div className="container mx-auto">
      <header className="mb-6 text-center">
          <h1 className="text-3xl font-bold text-gray-800">Constituencies</h1>
          <p className="text-gray-800">A list of constituencies and their counties</p>
        </header>
       <ConstituenciesList constituencies={constituencies}/>
      </div>

    </main>
  )
}

export default Constituencies;
