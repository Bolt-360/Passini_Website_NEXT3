import { useState } from "react";

const Pagination = () => {
  const [activePage, setActivePage] = useState(1);
  const pageNumbers = [1, 2, 3, 4]; // replace with actual page numbers

  const handlePageClick = (pageNumber) => {
    setActivePage(pageNumber);
  };

  return (
    <ul className="d-flex align-items-center style-none">
     
    </ul>
  );
};

export default Pagination;
