import React from 'react'

export default function Header() {
  return (
    <div className='w-full h-16 flex justify-between bg-spotify-green box-border items-center mb-5'>
        <h1 className='ml-2 text-2xl text-white'>Spotify Stats</h1>
        <button className='mr-2'>Light/Dark</button>
    </div>
  )
}
