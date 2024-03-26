import React, { useState, useEffect } from "react";
import { fetchData } from "./api";
import Table from './table';
import Pagination from './pagination';

function App() {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [totalDataCount, setTotalDataCount] = useState(0);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const result = await fetchData(currentPage, 10);
        setData(result.data);
        setTotalDataCount(result.count);
        setTotalPages(Math.ceil(result.count / 10));
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchBooks();
  }, [currentPage]);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const startIndex = (currentPage - 1) * 10 + 1;
  const endIndex = Math.min(startIndex + data.length - 1, totalDataCount);

  return (
    <div>
      <h1>Books</h1>
      <Table data={data} />
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
      <p>
        
        Showing {startIndex} to {endIndex} out of {totalDataCount}
      </p>
    </div>
  );
}

export default App;
