import { useEffect, useState } from "react"
import ConstituenciesList from "./ConstituenciesList";

const API_KEY = '87c47b251a9f5c499a515bcc5300d0815f11b82100e17282';
const BASE_URL = 'https://jse-assignment.uk';

function Constituencies() {
  const [constituencies, setConstituencies] = useState([])

     const getConstituencies = async () => {
        try {
         const res = await fetch( `${BASE_URL}/UKGeneral/constituencies/`, {
          headers: {
            'x-api-key': API_KEY
          }
        })
        const jsonData = await res.json();
        setConstituencies(jsonData)
         console.log(jsonData)
        } catch(error) {
            console.error()
        }

     }
     useEffect(() => {
        getConstituencies();
    }, []);


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
