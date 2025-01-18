import { useState } from 'react';

const usePagination = (constituencies, itemsPerPage) => {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(constituencies.length / itemsPerPage);

  const constituenciesPerPage = constituencies.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return { constituenciesPerPage, currentPage, totalPages, nextPage, prevPage, setCurrentPage };
};

export default usePagination;
