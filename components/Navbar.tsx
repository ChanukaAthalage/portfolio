import React from 'react'

function Navbar() {
  return (
      <nav className='bg-gray-800 text-white py-4 px-6'>
        <div className='flex items-center justify-between'>
          <div className='text-lg font-semibold'>Chanuka Dilusha Athalage</div>
          <ul className='flex space-x-4'>
            <li><a href='#' className='hover:text-gray-400'>Home</a></li>
            <li><a href='#' className='hover:text-gray-400'>About</a></li>
            <li><a href='#' className='hover:text-gray-400'>Projects</a></li>
            <li><a href='#' className='hover:text-gray-400'>Contact</a></li>
          </ul>
        </div>
      </nav>
  )
}

export default Navbar
