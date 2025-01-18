const ConstituencyPagination = ({ currentPage, totalPages, onPageChange }) => {


    return (
      <div className="flex justify-center items-center space-x-4 mt-6">
        <button
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 disabled:opacity-50 disabled:bg-gray-500"
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        <span className="px-4">
          Page {currentPage} of {totalPages}
        </span>
        <button
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 disabled:opacity-50 disabled:bg-gray-500"
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    );
  };

  export default ConstituencyPagination;
