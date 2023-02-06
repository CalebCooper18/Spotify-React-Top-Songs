import React from 'react'

export default function Footer() {
  return (
    <div className='w-full h-16 bg-white border-t border-black dark:bg-black flex justify-around items-center'>
        <p  className='text-black text-xs dark:text-white'>Spotify &#174; {`${new Date().getFullYear()}`}</p>
        <h2 className='text-black text-lg md:text-2xl dark:text-white'>Caleb Cooper</h2>
        <div>
          <a href='https://github.com/CalebCooper18/Spotify-React-Top-Songs' type='button' target='_blank' className='text-black border border-black rounded-full relative p-2 group hover:text-white hover:bg-black hover:cursor-pointer dark:text-white dark:hover:text-black dark:hover:bg-white dark:border-white' rel="noreferrer">{'</>'}
            <span className='absolute w-auto p-2 min-w-max rounded-md bottom-14 -right-10 shadow-md text-white bg-gray-900 text-xs font-bold transition-all duration-100 scale-0 origin-center group-hover:scale-100'>
                View Source Code
            </span>
          </a>
        </div>
      </div>
  )
}
