import React from 'react'
import Pagination from 'react-bootstrap/Pagination'

const Paginate = (props) => {

  const { usersPerPage, allUsers, pagination, currentPage, setCurrentPage } = props

  let active = currentPage;
  let items = [];
  for (let number = 1; number <= (allUsers / usersPerPage); number++) {
    items.push(number);
  }

  const handlePreviousPage = () => {
    setCurrentPage(currentPage - 1)
  }

  const handleNextPage = () => {
    setCurrentPage(currentPage + 1)
  }

  return(<>
    <div  className="paginateWrapper">
      <Pagination className="justify-content-center paginateCont">

      {   // displays the previous button until the first page.
      currentPage === 1 ? '' :
        <Pagination.Prev onClick={ handlePreviousPage}/>
      }

        { // displays all page numbers
        items.map(num => (<>
          <Pagination
            style={{cursor: "pointer"}}
            key={num}
            className='page-item'
            onClick={() => pagination(num)}
            href='#'
            className='page-link'>
              {num}
          </Pagination>
        </>))
        }

      { // displays the next button until the last page.
      currentPage === items.length ? '' : <Pagination.Next onClick={ handleNextPage}/>
      }
      </Pagination>
    </div>
  </>)
}

export default Paginate

