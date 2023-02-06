import React from 'react'
import { useThemeContext } from '../hooks/useThemeContext'

export default function Header() {
  const {darkMode, setDarkMode} = useThemeContext();

  return (
    <div className='w-full h-16 flex justify-between bg-spotify-green box-border items-center mb-5'>
        <h1 className='ml-2 text-2xl text-white'>Spotify Stats</h1>
        <button className='mr-8' onClick={() => setDarkMode(darkMode === 'dark' ? 'light': 'dark')} >
        {darkMode === 'dark' ? 
        <svg width="64px" height="64px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff" transform="rotate(45)matrix(1, 0, 0, -1, 0, 0)"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" stroke="#ffffffCCCCCC" strokeWidth="0.336"></g><g id="SVGRepo_iconCarrier"> <path d="M12 18.5C15.5899 18.5 18.5 15.5899 18.5 12C18.5 8.41015 15.5899 5.5 12 5.5C8.41015 5.5 5.5 8.41015 5.5 12C5.5 15.5899 8.41015 18.5 12 18.5Z" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path> <path d="M19.14 19.14L19.01 19.01M19.01 4.99L19.14 4.86L19.01 4.99ZM4.86 19.14L4.99 19.01L4.86 19.14ZM12 2.08V2V2.08ZM12 22V21.92V22ZM2.08 12H2H2.08ZM22 12H21.92H22ZM4.99 4.99L4.86 4.86L4.99 4.99Z" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path> </g></svg>
        :
        <svg width="64px" height="64px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" transform="rotate(0)"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M2.02911 12.42C2.38911 17.57 6.75911 21.76 11.9891 21.99C15.6791 22.15 18.9791 20.43 20.9591 17.72C21.7791 16.61 21.3391 15.87 19.9691 16.12C19.2991 16.24 18.6091 16.29 17.8891 16.26C12.9991 16.06 8.99911 11.97 8.97911 7.13996C8.96911 5.83996 9.23911 4.60996 9.72911 3.48996C10.2691 2.24996 9.61911 1.65996 8.36911 2.18996C4.40911 3.85996 1.69911 7.84996 2.02911 12.42Z" stroke="#000000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path> </g></svg>}
        </button>
    </div>
  )
}
