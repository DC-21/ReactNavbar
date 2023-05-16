import React from 'react'

const Btn = () => {
  return (
    <button className="bg-indigo-700 text-white font-bold py-2 px-6 rounded md:ml-8 hover:bg-purple-400 duration-300">
      {props.children}
    </button>
  )
}

export default Btn
