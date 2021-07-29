import React from 'react';
import '../Css/main.css';

const Pagination = ({ total, splitPrint, currentIndex, setCurrentIndex }) => {
  const pages = Math.ceil(total / splitPrint);
  console.log(Array.from(Array(pages)));

  return (
    <>
      <div style={{ display: 'flex' }}>
        {
          Array.from(Array(pages)).map((v, i) => (
            <div key={i + 1} className='paginateBtn'>{i + 1}</div>
          ))
        }
      </div>
    </>
  )
}

export default Pagination;