import React from 'react'
import {Link} from "react-router-dom";
function Navbar() {
  return (
    <div>
        <Link to = "/">Home</Link>
        <Link to = "/water">Water</Link>
        <Link to = "/about">About </Link>
        <Link to = "/eat">Eat</Link>
    </div>
  )
}

export default Navbar