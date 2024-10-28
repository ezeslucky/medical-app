import { MagnifyingGlassCircleIcon, MagnifyingGlassIcon } from '@heroicons/react/24/outline'
import React from 'react'

function SearchBar() {
  return (
    

<form className="max-w-md ">   
    <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-50 sr-only dark:text-white">Search</label>
    <div className="relative">
        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
        <MagnifyingGlassIcon className=' w-4 h-4 text-gray-50 dark:text-gray-400'/>
        </div>
        <input type="search" id="default-search" className="block w-full p-4 ps-10 text-sm text-gray-50 border border-gray-300 rounded-full bg-gray-50 focus:ring-green-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search Mockups, Logos..." required />

        <button type="submit" className="text-white absolute end-2.5 bottom-2.5 bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-full text-sm px-4 py-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Search 

            
        </button>
    </div>
</form>


  )
}

export default SearchBar
