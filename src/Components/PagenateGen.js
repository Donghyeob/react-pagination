import React from 'react';

const PagenateGen = ({ btnSliceArray, onClickCurrentIndex }) => {
  return (
    <>
      {btnSliceArray.map((v, i) => (
        <div
          onClick={onClickCurrentIndex}
          value={v} key={v}
        >{v}
        </div>
      ))
      }
    </>
  )
}

export default PagenateGen;