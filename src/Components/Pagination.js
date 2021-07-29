import React, { useEffect, useState } from 'react';
import '../Css/main.css';
import PagenateGen from './PagenateGen';

const Pagination = ({ total, splitPrint, currentIndex, setCurrentIndex }) => {
  const totalBtn = Array.from({ length: Math.ceil(total / splitPrint) - 2 }, (v, i) => {
    return (i + 1) + 1;
  })

  const lastPages = Math.ceil(total / splitPrint);
  const [btnSliceArray, setBtnSliceArray] = useState(totalBtn.slice(parseInt(currentIndex) - 1, parseInt(currentIndex) + 4));

  const onClickCurrentIndex = (e) => {
    const currentValue = e.target.getAttribute('value');
    setCurrentIndex(currentValue);
  }

  useEffect(() => {
    5 > currentIndex > 0 ? setBtnSliceArray(totalBtn.slice(0, 5))
      : currentIndex > lastPages - 4 ? setBtnSliceArray(totalBtn.slice(lastPages - 7, lastPages))
        : setBtnSliceArray(totalBtn.slice(parseInt(currentIndex) - 4, parseInt(currentIndex) + 1))
    // console.log(currentIndex)
    // console.log(btnSliceArray)
  }, [currentIndex])

  return (
    <>
      <div className='paginateBtn' style={{ display: 'flex' }}>
        <div onClick={onClickCurrentIndex} value={1} key={1}>{1}</div>
        {(currentIndex > lastPages - 4 || (lastPages - 3 > currentIndex && currentIndex > 4)) && <div>...</div>}
        <PagenateGen btnSliceArray={btnSliceArray} onClickCurrentIndex={onClickCurrentIndex} />
        {(5 > currentIndex > 0 || (lastPages - 3 > currentIndex && currentIndex > 4)) && <div>...</div>}
        <div onClick={onClickCurrentIndex} value={lastPages} key={lastPages}>{lastPages}</div>
      </div>
    </>
  )
}

export default Pagination;