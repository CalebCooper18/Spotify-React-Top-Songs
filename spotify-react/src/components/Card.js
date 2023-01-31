import React from 'react'


export default function card({photo, title, index, type, preview, setSongToPlay}) {
  return (
     <div className='flex flex-col items-center rounded-lg shadow md:flex-row md:min-w-full border-gray-700 bg-gray-800 hover:bg-gray-700'>
        <img className='object-cover w-full rounded-t-lg h-60 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg'src={photo} alt='Album'/>
        <div className='flex flex-col justify-between p-4 leading-normal'>
          <h2 className='"mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>{index}) {title}</h2>
          {type === 'track' && <button onClick={() => setSongToPlay(preview)}>Play Preview</button>}
        </div>
      </div>
  )
}

