import React from 'react'
import Button from './Btn'

const Navbar = () => {
  return (
    <header className='text-gray-600 body-font md:flex-row flex-col'>
      <div className='container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center'>
        <div className="divide-gray-700 mt-2 text-3xl text-indigo-800 cursor-pointer font-bold"><ion-icon name="dice-outline"></ion-icon></div>
        <a className='flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0' href="https://vitejs.dev" target="_blank"><span class="ml-5 text-xl font-bold">D<span class="text-red-900 font-bold">i</span>CE</span></a>
        <nav className='md:ml-auto md:mr-auto flex items-center text-xl justify-center'>
          <ul className="md:flex-row flex-row ">
          <a className='mr-5 hover:text-blue-900' href="#">Home</a>
            <a className='mr-5 hover:text-blue-900' href="#">Services</a>   
            <a className='mr-5 hover:text-blue-900' href="#">Contact</a>
            <a className='mr-5 hover:text-blue-900' href="#">About</a>
          </ul>
        </nav>
        <Button>Get Started</Button>
      </div>
    </header>
  )
}

export default Navbar 