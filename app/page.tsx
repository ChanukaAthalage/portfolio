import React from 'react'
import Navbar from '../components/Navbar'

function Home() {
  return (
    <div>
       <Navbar />
        <div className='flex flex-col items-center justify-center min-h-screen py-2 gap-4'>
          <h1 className='text-4xl font-bold'>Chanuka Dilusha Athalage</h1>
          <p className='text-lg text-gray-600'>Full-stack Software Engineer building practical, production-ready web applications.</p>
          <a href='#projects' className='bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600'>View My Work</a>
        </div>
    </div>
  )
}


export default Home
