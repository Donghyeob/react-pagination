import React from 'react';

const PostTable = ({ sliceData }) => {
  console.log(sliceData);

  return (
    <>
      <table>
        <thead>
          <tr>
            <td>name</td>
            <td>email</td>
            <td>body</td>
          </tr>
        </thead>
        <tbody>
          {
            sliceData.map(v => (
              <tr key={v.id}>
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