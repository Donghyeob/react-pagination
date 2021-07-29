import React from 'react';

const PostTable = ({ sliceData, setSliceData }) => {
  // console.log(sliceData);

  const sorting = (e) => {
    const sortItem = e.target.getAttribute('value');
    let sortArray = [];

    sortItem === 'id' &&
      (sliceData.map(v => {
        sortArray = [...sortArray, v]
        return setSliceData(sortArray.sort((a, b) => a.id - b.id))
      })
      )
    sortItem !== 'id' &&
      (sliceData.map(v => {
        sortArray = [...sortArray, v]
        return setSliceData(sortArray.sort((a, b) => a[sortItem].toUpperCase().localeCompare(b[sortItem].toUpperCase())))
      })
      )
  }

  return (
    <>
      <table>
        <thead>
          <tr>
            <td onClick={sorting} value='id'>id</td>
            <td onClick={sorting} value='name'>name</td>
            <td onClick={sorting} value='email'>email</td>
            <td onClick={sorting} value='body'>body</td>
          </tr>
        </thead>
        <tbody>
          {
            sliceData.map(v => (
              <tr key={v.id}>
                <td>{v.id}</td>
                <td>{v.name}</td>
                <td>{v.email}</td>
                <td>{v.body}</td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </>
  )
}

export default PostTable;