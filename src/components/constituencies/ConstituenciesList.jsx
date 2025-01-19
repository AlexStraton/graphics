import { useNavigate } from 'react-router-dom';

export default function ConstituenciesList({constituencies}) {
  console.log(constituencies)
  const navigate = useNavigate();

    return(
        <section className="p-7">
        {constituencies.length > 0 ? (
            <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {constituencies.map((constituency, index) => (

                <li
                  key={index}
                  className="bg-white shadow-md rounded-lg p-6 border border-gray-200"
                >
                  <h2 className="text-xl font-semibold text-gray-800 mb-2">
                    {constituency.name}
                  </h2>
                  <p className="text-gray-600">County: {constituency.county}</p>
                  
                  <button
              onClick={() => navigate(`/constituency/${constituency.gssId}`)}
              className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
              Click here to see results
            </button>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-center text-gray-600">Loading data...</p>
          )}
        </section>
    )
}
