import React from 'react'

const SearchBar = () => {
  return (
    <div className='w-9/12 mt-12 h-10 ring-1 rounded-md flex'>
        <input className='h-full w-10/12 text-black pl-4 rounded-tl-md rounded-bl-md bg-neutral-800'/>
        <button className='w-2/12 rounded-tr-md rounded-br-md' content='Press'/>
    </div>
  )
}

export default SearchBar