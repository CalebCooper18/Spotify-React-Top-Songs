import React from 'react'

export default function Header() {
  return (
    <div className='w-full h-16 flex justify-between bg-spotify-green box-border items-center'>
        <h1 className='text-2xl text-white'>Spotify Stats</h1>
        <button>Light/Dark</button>
    </div>
  )
}
