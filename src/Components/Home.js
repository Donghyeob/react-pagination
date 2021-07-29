import React, { useEffect, useState } from 'react';
import postDataSet from './postDataSet';
import PostTable from './PostTable';
import Pagination from './Pagination';

const Home = () => {
  const comments = postDataSet; // 총 데이터
  const splitPrint = 10; // 한 페이지에 표기할 데이터

  const [sliceData, setSliceData] = useState(postDataSet.slice(0, 10)); // 쪼갠 데이터
  const [currentIndex, setCurrentIndex] = useState(1); // 현재 인덱스

  const currentLastId = currentIndex * splitPrint;
  const currentFirstId = currentLastId - splitPrint;

  useEffect(() => {
    setSliceData(postDataSet.slice(currentFirstId, currentLastId));
  }, [currentIndex])

  return (
    <>
      <PostTable sliceData={sliceData} setSliceData={setSliceData} />
      <Pagination total={comments.length} splitPrint={splitPrint} currentIndex={currentIndex} setCurrentIndex={setCurrentIndex} />
    </>
  )
}

export default Home;