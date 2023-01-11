import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const AddUser = () => {

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [gender, setGender] = useState("Male")

  const navigate = useNavigate()

  const saveUser = async (e) => {
    e.preventDefault()
    try {
      await axios.post("http://localhost:5000/users", {
        name, email, gender
      })
      navigate("/")
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <div className="container">
        <div className="form-container">
          <form onSubmit={saveUser}>
            <div class="form-group">
              <label for="name">Name</label>
              <input
                type="text"
                id='name'
                class="form-control"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your name" />
            </div>
            <div class="form-group">
              <label for="email">Email</label>
              <input
                type="email"
                id="email"
                class="form-control"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email" />
            </div>
            <div class="form-group">
              <label class="my-1 mr-2" for="inlineFormCustomSelectPref">Preference</label>
              <select class="custom-select my-1 mr-sm-2" id="inlineFormCustomSelectPref"
                value={gender} onChange={(e) => setGender(e.target.value)}>
                <option selected>Choose...</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
            </div>
            <button type="submit" class="btn btn-primary">Save</button>
          </form>
        </div>
      </div>

    </>
  )
}

export default AddUser