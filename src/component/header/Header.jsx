import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <div className='navbar'>
    <div className="title">GitW</div>
      <nav className='right'>
      <Link href="/">Home</Link>
      <Link href="/register">Register</Link>
      <Link href="/login">Login</Link>
      <Link href="/logout">Logout</Link>
      </nav>
    </div>
  )
}

export default Header
