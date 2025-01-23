import React from "react";
import { useEffect, useState } from "react";
import Constituencies from "../components/constituencies/Constituencies";
import usePagination from "../hooks/usePagination";
import ConstituencyPagination from '../components/constituencies/ConstituencyPagination'

function ConstituenciesPage({fetchConstituencies, allConstituencies, setAllConstituencies}) {

  const itemsPerPage = 30;
  const { constituenciesPerPage, currentPage, totalPages, nextPage, prevPage, setCurrentPage } = usePagination(allConstituencies, itemsPerPage);

       useEffect(() => {
          fetchConstituencies();
      }, []);

      const onPageChange = (page) => {
        if (page >= 1 && page <= totalPages) {
          setCurrentPage(page);
        }
      };

  return (
    <>
      <Constituencies constituenciesPerPage={constituenciesPerPage} allConstituencies={allConstituencies} setCurrentPage={setCurrentPage}/>
      <ConstituencyPagination
        currentPage={currentPage}
        totalPages={totalPages}
        nextPage={nextPage}
        prevPage={prevPage}
        onPageChange={onPageChange}
      />
    </>
  );
}

export default ConstituenciesPage;
