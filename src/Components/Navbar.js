import React from 'react'
import {Link} from "react-router-dom";
import essenceLogo from "../Essence.png"
function Navbar() {
  return (
    <div className = "navigationBar">
        <Link className = "navitem" to = "/water"><img src = {essenceLogo} alt="" /></Link>
    </div>
  )
}

export default Navbar