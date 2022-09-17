import React from 'react'
import {Link} from "react-router-dom";
function Navbar() {
  return (
    <div className = "navigationBar">
        <Link className = "navitem" to = "/">LifeChecker</Link>
        <Link className = "navitem" to = "/water">Water</Link>
        <Link className = "navitem" to = "/about">About </Link>
        <Link className = "navitem" to = "/eat">Eat</Link>
    </div>
  )
}

export default Navbar