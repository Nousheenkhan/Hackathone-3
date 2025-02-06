"use client";

import { useState } from "react";

const Pagination = () => {
  const [currentPage, setCurrentPage] = useState(2);
  const totalPages = 3;

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <div className="flex items-center border rounded-lg overflow-hidden">
      <button
        className={`px-4 py-2 text-gray-500 ${currentPage === 1 ? "bg-gray-100" : "hover:bg-gray-200"}`}
        onClick={() => handlePageChange(1)}
        disabled={currentPage === 1}
      >
        First
      </button>
      {[1, 2, 3].map((page) => (
        <button
          key={page}
          className={`px-4 py-2 ${currentPage === page ? "bg-blue-500 text-white" : "text-blue-500 hover:bg-gray-200"}`}
          onClick={() => handlePageChange(page)}
        >
          {page}
        </button>
      ))}
      <button
        className={`px-4 py-2 text-blue-500 hover:bg-gray-200 ${currentPage === totalPages ? "bg-gray-100" : ""}`}
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
