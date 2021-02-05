
import React, { useState} from 'react'


const UsersTable = (props) => {
  const { users, setUsers} = props
  console.log('users in userstable', users)

  return(<>
  <div className="usersTableWrapper">
    <p>test display usersTable</p>
  </div>
  </>)
}

export default UsersTable
