
import React, {useEffect, useState} from 'react'
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'

const BASE_API = 'https://randomuser.me/api'

import {
// components here
UsersTable
} from './'


const App = () => {
  const [users, setUsers] = useState([])


  const handleInitialLoad = async () => {
    try {
      const { data } = await axios.get(`${BASE_API}/?results=11`)
      console.log('data in app.js', data)
      console.log('data.results in app.js', data.results)
      setUsers(data.results)

    } catch (error) {
      throw error
    }
  }

  useEffect(() => {
    handleInitialLoad()
  }, [])

  // users comes as array of obj. Destructure for use. pass in as props


  return(<>
  <div className="app">
  <p>test display in App component</p>
  <UsersTable users={users} setUsers={setUsers} />
  </div>

  </>)
}

export default App
