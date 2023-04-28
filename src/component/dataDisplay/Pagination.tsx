import React, { MouseEvent, useState } from "react";

type propsType = {
  currentPage: number;
  totalItems: number;
  pageSize: number;
  handlePageChange: (pageNumber: number) => void;
};

const showingPages = (
  currentPage: number,
  lastPage: number,
  clickHandler: (args: any) => void
) => {
  const pageNumbers = [];
  if (currentPage - 2 > 0) {
    pageNumbers.push(currentPage - 2);
  }
  if (currentPage - 1 > 0) {
    pageNumbers.push(currentPage - 1);
  }
  pageNumbers.push(currentPage);
  if (currentPage  < lastPage) {
    pageNumbers.push(currentPage + 1);
  }
  if (currentPage + 1 < lastPage) {
    pageNumbers.push(currentPage + 2);
  }
  return pageNumbers.map((page: number, index: number) => {
    return (
      <li key={index}>
        <button
            value={page}
            onClick={()=>clickHandler(page)}
          className={`${
            currentPage === page ? "active" : ""
          } px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700   [&.active]:bg-blue-50 [&.active]:hover:bg-blue-100 [&.active]:hover:text-blue-700   `}
        >
          {page}
        </button>
      </li>
    );
  });
};

const Pagination: React.FC<propsType> = ({
  currentPage,
  totalItems,
  pageSize,
  handlePageChange,
}) => {
  const pageInput = React.useRef<HTMLInputElement>();
  const totalPages = Math.ceil(totalItems / pageSize);
  const [inputVal, setInputVal] = useState(currentPage || "1");

  const handlePrevClick = () => {
    if (currentPage > 1) {
      handlePageChange(currentPage - 1);
      setInputVal(currentPage - 1);
    }
  };

  const handleNextClick = () => {
    if (currentPage < totalPages) {
      handlePageChange(currentPage + 1);
      setInputVal(currentPage + 1);
    }
  };
  const handlePageClick = (page: number): void => {
    handlePageChange(page);
  };


  const pages = showingPages(currentPage, totalPages, handlePageClick);
  return (
    <nav aria-label="Page navigation example">
      <ul className="inline-flex items-center -space-x-px">
        <li>
          <button
            onClick={handlePrevClick}
            className="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 "
          >
            <svg
                aria-hidden="true"
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
            >
              <path
                  fillRule="evenodd"
                  d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                  clipRule="evenodd"
              ></path>
            </svg>
          </button>
        </li>
        <li>
          <div className="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 ">
            . . .
          </div>
        </li>
        {pages}
        <li>
          <div className="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 ">
            . . .
          </div>
        </li>
        <li>
          <button onClick={handleNextClick} className="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700">
            <span className="sr-only">Next</span>
            <svg
                aria-hidden="true"
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
            >
              <path
                  fillRule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clipRule="evenodd"
              ></path>
            </svg>

          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
