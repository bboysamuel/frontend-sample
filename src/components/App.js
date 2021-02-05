import React, {useEffect, useState} from 'react'
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'

// import components
import {
  UsersTable,
  Paginate,
} from './'

const BASE_API = 'https://randomuser.me/api'

const App = (props) => {

  const [users, setUsers] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  const [usersPerPage, setUsersPerPage] = useState(10)
  const [sort, setSort] = useState({})
  const [clicked, setClicked] = useState({color: 'blue'})

  const allUsers = users.length
  const pagination = (num) => {
    setCurrentPage(num)
  }

  const handleInitialLoad = async () => {
    try {
      const {data} = await axios.get(`${BASE_API}/?results=111`)
      setUsers(data.results)

    } catch (error) {
      throw error
    }
  }

  useEffect(() => {
    handleInitialLoad()
  }, [])


  return (<>
  <div className="app">
<UsersTable users={users} setUsers={setUsers} currentPage={currentPage} setCurrentPage={setCurrentPage} usersPerPage={usersPerPage} setUsersPerPage={setUsersPerPage} clicked={clicked} setClicked={setClicked} />
<Paginate users={users} usersPerPage={usersPerPage} allUsers={allUsers} pagination={pagination} currentPage={currentPage} setCurrentPage={setCurrentPage} sort={sort} setSort={setSort} />
  </div>
  </>)
}

export default App
