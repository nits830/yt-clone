import React from 'react'
import { SearchBar } from './SearchBar'

export const AppBar = () => {
  return (
    <div className='grid grid-cols-3 pb-5' >
        <div className='h-20 w-20 grid grid-cols-2 pl-2 cursor-pointer' >
                <img src='./yt.webp'/>
                <h2 className='pt-1.5 pl-1'>YouTube</h2>    
        </div>

        <div className='pt-2'>
            <SearchBar/>
        </div>

        <div className='pt-2 pl-10'>
            <button className="bg-blue-500 hover:bg-white-700 text-white font-bold py-2 px-4 rounded">
                Sign In
            </button>

        </div>

    </div>
  )
}
