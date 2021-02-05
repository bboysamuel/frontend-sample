
import React from 'react'
import Table from 'react-bootstrap/Table'



const UsersTable = (props) => {
  const { users, setUsers, usersPerPage, currentPage, setUsersPerPage} = props
  console.log('users in userstable', users)

  const user = users.map(({name, email}, index) => {
    return {name, email, index}
  })
    console.log('user in userstable', user)

    // paginaton NOTE: perhaps break into pagination component
    // const pageOfLastUser = currentPage * usersPerPage
    // const pageOfFirstUser = pageOfLastUser - usersPerPage;
    // const currentUsers = users.slice(pageOfFirstUser, pageOfLastUser)

    // handleSortFirstName
    // handleSortLastName
    // handleSortEmail
    // maybe handle sort by index???


    return(<>
      <div className="usersTableWrapper" style={{margin: "2rem"}}>
      <Table striped bordered hover responsive="md">
          <thead>
            <tr className="cursorPoint">
              <th>#</th>
              <th
              // onClick={handleSortFirstName}
              >First Name</th>
              <th
              // onClick={handleSortLastName}
              >Last Name</th>
              <th
              // onClick={handleSortEmail}
              >Email</th>
            </tr>
          </thead>
        { users && users.map(({name, email}, index) => {
//was current users. not users.
          return(<>
         {/* { console.log('index', index) } */}

            <tbody >
              <tr key={index}>
                <td>{index}</td>
                <td>{name.first}</td>
                <td> {name.last}:</td>
                <td className="mailToButton" onClick={ () => {
                  window.open(`mailto:${email}`)
                  //add style. make blue. cursor pointer
                }}
                >{email} </td>
              </tr>
            </tbody>
          </>)
        })}
     </Table>
    </div>
      </>)
}

export default UsersTable
