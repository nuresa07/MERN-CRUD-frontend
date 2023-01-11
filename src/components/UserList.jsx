import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'


const UserList = () => {

  const [users, setUsers] = useState([])

  useEffect(() => {
    getUser()
  }, [])

  const getUser = async () => {
    const response = await axios.get("http://localhost:5000/users")
    setUsers(response.data);
  }

  const deleteUser = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/users/${id}`)
      getUser()
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <div className="table-box">
        <table className="table">
          <thead className="thead-light">
            <tr>
              <th scope="col">No. </th>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">Gender</th>
              <th scope="col">actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, i) => (
              <tr key={user.id}>
                <th scope="row">{i + 1}</th>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.gender}</td>
                <td>
                  <Link to={`edit/${user._id}`} type="button" class="btn btn-success">Edit</Link>
                  <button
                    type="button" class="btn btn-danger"
                    onClick={() => deleteUser(user._id)}
                  >Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table >
      </div>
    </>
  )
}

export default UserList