import React from 'react'

const Navbar = () => {
  return (
    <header className='text-gray-600 body-font'>
      <div className='container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center'>
        <div className="divide-gray-700 mt-2 text-3xl text-indigo-800 cursor-pointer font-bold"><ion-icon name="dice-outline"></ion-icon></div>
        <a className='flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0' href="https://vitejs.dev" target="_blank"><span class="ml-5 text-xl font-bold">D<span class="text-red-900 font-bold">i</span>CE</span></a>
        <nav className='md:ml-auto md: mr-auto flex flex-wrap items-center text-xl justify-center'>
            <a className='mr-5 hover:text-blue-900' href="#">Home</a>
            <a className='mr-5 hover:text-blue-900' href="#">Services</a>   
            <a className='mr-5 hover:text-blue-900' href="#">Contact</a>
            <a className='mr-5 hover:text-blue-900' href="#">About</a>
        </nav>
        <button className='inline-flex items-center bg-white-900 border-0 py-1 px-3 text-white-900 font-bold focus:outline-none hover:by-gray-900 rounded text-base mt-4 md:mt-0'>Get started</button>
        <button></button>
      </div>
    </header>
  )
}

export default Navbar 