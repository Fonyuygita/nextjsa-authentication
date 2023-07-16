import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <nav className="navbar">
      
    <Link className="text-black font-bold l1" href={"/"}>GitasDev</Link>
    <Link className="l2" href={"/addTopic"}>Add Topic</Link>

    </nav>
  )
}

export default Navbar
