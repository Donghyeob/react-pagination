import React from 'react'

const Pagination = ({postsPage, totalPosts, paginate}) => {
    const pageNumbers = [];
    console.log(postsPage);

    for(let i = 1; i <= Math.ceil(totalPosts.length / postsPage); i++){
        pageNumbers.push(i);
    }

    return (
        <nav>
            <ul className="pagination">
                {pageNumbers.map(number => (
                    <div key={number} className="page-item">
                        <a onClick={() => paginate(number)} href="!#" className="page-link" style={{float: "left", marginLeft: 10}}>
                            {number}
                        </a>
                    </div>
                ))}
            </ul>
        </nav>
    )
}

export default Pagination;