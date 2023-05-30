import React from 'react'
import { NavLink } from 'react-router-dom/cjs/react-router-dom.min'

export default function Navbar() {
  return (
    <div className="navbar">
      <h1>Dojo Blog</h1>

      <div className="links">
      <NavLink to="/">Home</NavLink>
      <NavLink to="/create" style={{
        color: "white",
        backgroundColor: '#f1356d',
        borderRadius: '8px'
      }}>Create</NavLink>
      </div>
    </div>
  )
}
