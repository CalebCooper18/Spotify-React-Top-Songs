import React from 'react'


export default function card({photo, title, index, type, preview, setSongToPlay}) {
  function renderButton()
  {
    if(type ==='track' && preview)
    {
      return(
        <button type='button' className='text-center text-white bg-spotify-green w-28 mt-3 hover:cursor-pointer hover:bg-emerald-600' onClick={() => setSongToPlay(preview)}>Play Preview</button>
      )
    }
    else if (type === 'track' && !preview)
    {
      return(
      <button type='button' className='text-center text-white bg-red-500 w-28 mt-3'>No Preview Available</button>
      )
    }
  }
  return (
     <div className='flex flex-col items-center rounded-lg shadow md:flex-row md:min-w-full border-gray-700 bg-gray-800 hover:bg-gray-700'>
        <img className='object-cover w-full rounded-t-lg h-44 md:h-44 md:w-44 md:rounded-none md:rounded-l-lg'src={photo} alt='Album'/>
        <div className='flex flex-col items-center md:items-start px-2'>
          <h2 className='"mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>{index}) {title}</h2>
          {renderButton()}
        </div>
      </div>
  )
}

