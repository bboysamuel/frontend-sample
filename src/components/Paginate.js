import React from 'react'
import Pagination from 'react-bootstrap/Pagination'

const Paginate = (props) => {

  const { usersPerPage, allUsers, pagination, users, currentPage, setCurrentPage } = props

// react-bootstrap
  let active = currentPage;
  //NOTE make active page button highlight blue
let items = [];
for (let number = 1; number <= (allUsers / usersPerPage); number++) {
  items.push(number);
}

const handlePreviousPage = () => {
  setCurrentPage(currentPage - 1)
  if (currentPage === 1) {
    setCurrentPage(1)
  }
}

const handleNextPage = () => {
  setCurrentPage(currentPage + 1)

  if (items.length) {
    setCurrentPage(items.length)
  }
}


  return(<>
    <div  className="paginateWrapper">
    <Pagination className="justify-content-center">
   {   // displays the previous button until the first page.
   currentPage === 1 ? '' :
    <Pagination.Prev onClick={ handlePreviousPage}
         />
         }
        {items.map(num => (
          <Pagination style={{cursor: "pointer"}} key={num} className='page-item'
           onClick={() => pagination(num)}
           href='#' className='page-link'>
              {num}
              </Pagination>
        ))}
{         // displays the next button until the last page.
currentPage === items.length ? '' : <Pagination.Next onClick={ handleNextPage}
        />
}
    </Pagination>

  </div>

  </>)
  // If there is no previous or next page, the links should be hidden or disabled. Perhaps a ternary.
}

export default Paginate

