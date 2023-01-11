import React from 'react'
import { Routes, Route } from 'react-router-dom'
import AddUser from '../components/AddUser'
import EditUser from '../components/EditUser'
import UserList from '../components/UserList'

const Path = () => {
  return (
    <Routes>
      <Route path='/' element={<UserList />} />
      <Route path='/add' element={<AddUser />} />
      <Route path='/edit/:id' element={<EditUser />} />
    </Routes >
  )
}

export default Path