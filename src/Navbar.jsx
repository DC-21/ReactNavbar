import React from 'react'

const Navbar = () => {
  return (
    <header className='text-gray-600 body-font'>
      <div className='container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center'>
        <a className='flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0' href="https://vitejs.dev" target="_blank"><span class="ml-5 text-xl">D<span class="text-red-900">i</span>CE</span></a>
        <nav className='md:ml-auto md: mr-auto flex flex-wrap items-center text-base justify-center'>
            <a className='mr-5 hover:text-blue-900' href="#">Home</a>
            <a className='mr-5 hover:text-blue-900' href="#">Services</a>   
            <a className='mr-5 hover:text-blue-900' href="#">Contact</a>
            <a className='mr-5 hover:text-blue-900' href="#">About</a>
        </nav>
        <button>Get started</button>
        <button></button>
      </div>
      <div></div>
    </header>
  )
}

export default Navbar