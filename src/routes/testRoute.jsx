// import React from 'react'
import { Link } from 'react-router-dom'

export default function TestRoute() {
  return (
    <div>
        <h1>
            Welcome to test Route
        </h1>
        <Link to='/'>
             Go back to Main root
        </Link>
    </div>
  )
}
