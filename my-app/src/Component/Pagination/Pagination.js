import { useState } from "react";
import "./pagination.css";

function Pagination({ total, limit }) {
const [page, setPage] = useState(1)

  const pagesList = Array.from(
    { length: Math.ceil(total / limit) },
    (_, i) => i + 1
  );

const increase = () => {
  if(page < pagesList.length) {
     setPage(page + 1)
  }
}

const dicrease = () => {
  if(page > 1) {
    setPage(page - 1)
  }
}

console.log(page)



  return (
    <div className="pagination">
      <button className="back"  disabled={page === 1} onClick={dicrease}>Back</button>
      {pagesList.map((btn) => (
        <button key={btn} className={`numberList ${page === btn ? 'active' : ''}`} onClick={() => setPage(btn)}>
          {btn}
        </button>
      ))}
      <button className="forward" disabled={page === pagesList.length} onClick={increase}>Forward</button>
    </div>
  );
}

export default Pagination;
