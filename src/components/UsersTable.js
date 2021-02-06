
import React, {useState} from 'react'
import Table from 'react-bootstrap/Table'
import { FaCaretUp } from 'react-icons/fa'

const UsersTable = (props) => {
  const {users, setUsers, currentPage, usersPerPage} = props
  const [colorFirstName, setColorFirstName] = useState("black")
  const [colorEmail, setColorEmail] = useState("black")
  const [colorLastName, setColorLastName] = useState('black')

  const setStyleFirstName = (colorFirst) => {
    setColorFirstName(colorFirst)
  }

  const setStyleLastName = (colorLast) => {
    setColorLastName(colorLast)
  }

  const setStyleEmail = (colorEmail) => {
    setColorEmail(colorEmail)
  }

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

    // pagination. Prevents from displaying all users on a single page. Shows only the amount we want... 10.
    // tells index of the last user on each page.
  const idxLastUser = currentPage * usersPerPage;
    // tells index of the first user on each page.
  const idxFirstUser = idxLastUser - usersPerPage;
    // these are the users I want displayed on the page... 10 at a time.
  const currentUsers = user.slice(idxFirstUser, idxLastUser)

  return(<>
  <div className="usersTableWrapper" style={{margin: "2rem"}}>
    <h1>Total Users: {users.length}</h1>
    <Table style={{width: "100%"}} className="usersTableCont" striped bordered hover responsive="md">
        <thead>
          <tr className="cursorPoint">
            <th
            style={{color: `${colorFirstName}`}}
            onClick={() => {
              setStyleFirstName('red')
              setStyleEmail('black')
              setStyleLastName('black')
              handleSortFirstName()
            }}
            >First Name {
              colorFirstName === 'black' ?
              '' :
              <FaCaretUp />
            } </th>

            <th
            style={{color: `${colorLastName}`}}
            onClick={() => {
              setStyleFirstName('black')
              setStyleEmail('black')
              setStyleLastName('red')
              handleSortLastName()
            }
            }
            >Last Name
            {
               colorLastName === 'black' ?
               '' :
               <FaCaretUp />
            }
            </th>

            <th style={{color: `${colorEmail}`}}
            onClick={ () => {
              setStyleFirstName('black')
              setStyleEmail('red')
              setStyleLastName('black')
              handleSortEmail()
            }

            }
            >Email
              {
               colorEmail === 'black' ?
                ''  :
               <FaCaretUp />
              }
            </th>
          </tr>
        </thead>
      { currentUsers && currentUsers.map(({name, email}, index) => {
        return(
          <tbody key={index} >
            <tr>
              <td>{name.first}</td>
              <td> {name.last}</td>
              <td className="mailToButton" onClick={ () => {
                window.open(`mailto:${email}`)
              }}
              >{email} </td>
            </tr>
          </tbody>
        )
      })}
  </Table>
</div>
  </>)
}

export default UsersTable

