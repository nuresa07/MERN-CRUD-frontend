import { useState } from 'react'
import { Helmet } from "react-helmet";
import Path from './Routes/Path';
import Navbar from "./components/Navbar"
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='App'>
      <Helmet>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous" />
      </Helmet>
      <Navbar />
      <Path />
    </div>
  )
}

export default App
