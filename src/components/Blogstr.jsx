import React, { useContext } from 'react'
import { Showdata } from './store/Showdata'

const Blogstr = () => {
  const { onopen } = useContext(Showdata)

  return (
    <div className="p-4 bg-gray-100 flex items-center justify-center">
      <div className="bg-white shadow-md rounded-2xl p-6 w-full max-w-md text-center">
        <h1 className="text-2xl font-bold mb-4">
          Blog Website
        </h1>
        <button 
          onClick={onopen} 
          className="mt-2 px-4 py-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition duration-300"
        >
          Add to Blog
        </button>
      </div>
    </div>
  )
}

export default Blogstr

