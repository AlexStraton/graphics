import React from "react";
import { useEffect, useState } from "react";
import Constituencies from "../components/constituencies/Constituencies";
import usePagination from "../hooks/usePagination";
import ConstituencyPagination from '../components/constituencies/ConstituencyPagination'

const API_KEY = '87c47b251a9f5c499a515bcc5300d0815f11b82100e17282';
const BASE_URL = 'https://jse-assignment.uk';

function ConstituenciesPage() {
  const [constituencies, setConstituencies] = useState([])
  //const [data, setData] = useState([]);
  const itemsPerPage = 30;
  const { constituenciesPerPage, currentPage, totalPages, nextPage, prevPage, setCurrentPage } = usePagination(constituencies, itemsPerPage);

   const getConstituencies = async () => {
          try {
           const res = await fetch( `${BASE_URL}/UKGeneral/constituencies/`, {
            headers: {
              'x-api-key': API_KEY
            }
          })
          const jsonData = await res.json();
          setConstituencies(jsonData)
          } catch(error) {
              console.error()
          }

       }
       useEffect(() => {
          getConstituencies();
      }, []);

      const onPageChange = (page) => {
        if (page >= 1 && page <= totalPages) {
          setCurrentPage(page);
        }
      };

  return (
    <div>
      <Constituencies constituencies={constituenciesPerPage}/>
      <ConstituencyPagination
        currentPage={currentPage}
        totalPages={totalPages}
        nextPage={nextPage}
        prevPage={prevPage}
        onPageChange={onPageChange}
      />
    </div>
  );
}

export default ConstituenciesPage;
