import React from 'react'

const MainShimmer = () => {
  return (
    <div>
      {<div className='w-screen aspect-video animate-pulse py-40 px-10 text-white my-20  opacity-80 absolute bg-gradient-to-r from-black'>
        <h1 className='font-bold flex bg-gray-500 text-gray-500 animate-pulse rounded-lg w-fit px-4 py-2  h-fit  text-4xl m-4'>
          movie title 
        </h1>
        <p className='m-4 w-1/3 bg-gray-600 text-gray-600 animate-pulse rounded-lg'> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
        <div className=' mx-2'>
          <button className='bg-gray-700 mx-2 text-gray-700 px-4 py-2 text-lg  rounded-lg '>
          play 
          </button>
          <button className='bg-gray-700 mx-2 px-4 py-2 text-lg text-gray-700 rounded-lg '>
          more info
          </button>
        </div>
      </div>}
    </div>
  )
}

export default MainShimmer
