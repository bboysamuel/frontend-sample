
import React, {useState, useEffect} from 'react'
import Table from 'react-bootstrap/Table'

const UsersTable = (props) => {
  const {users, setUsers, currentPage, usersPerPage, clicked, setClicked} = props

  const user = users.map(({name, email}, index) => {

    return {name, email, index}
    // name.first.sort()
  })

  // ------------  firstName sort
  const handleSortFirstName = () => {

  const usersSortedByFirstName = user.sort((a, b) => {
    if (a.name.first > b.name.first) {
      return 1
    } else {
      return -1
    }
  })
    setUsers(usersSortedByFirstName)
  }

  // --------- lastName sort

  const handleSortLastName = () => {

  const usersSortedByLastName = user.sort((a, b) => {
    if (a.name.last > b.name.last) {
      return 1
    } else {
      return -1
    }
  })
    setUsers(usersSortedByLastName)
  }

    // --------- email sort

    const handleSortEmail = () => {
    const usersSortedByEmail = user.sort((a, b) => {
      if (a.email > b.email) {
        return 1
      } else {
        return -1
      }
    })
      setUsers(usersSortedByEmail)
    }

    // pagination logic. Prevents from displaying all users on page one. Shows only the amount we want... 10.
    //  tells index of the last user on each page.
  const idxLastUser = currentPage * usersPerPage;
   //  tells index of the first user on each page.
  const idxFirstUser = idxLastUser - usersPerPage;
  //these are the users I want displayed on the page... 10 at a time.
  const currentUsers = user.slice(idxFirstUser, idxLastUser)

  return(<>
  <div className="usersTableWrapper" style={{margin: "2rem"}}>
  <Table striped bordered hover responsive="md">
      <thead>
        <tr className="cursorPoint">
          {/* <th>#</th> */}
          <th
          onClick={handleSortFirstName}
          >First Name</th>
          <th
          onClick={handleSortLastName}
          >Last Name</th>
          <th
          onClick={handleSortEmail}
          >Email</th>
        </tr>
      </thead>
    { currentUsers && currentUsers.map(({name, email}, index) => {

      return(<>
        <tbody >
          <tr key={index}>
            {/* <td>{index}</td> */}
            <td>{name.first}</td>
            <td> {name.last}:</td>
            <td className="mailToButton" onClick={ () => {
              window.open(`mailto:${email}`)
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

