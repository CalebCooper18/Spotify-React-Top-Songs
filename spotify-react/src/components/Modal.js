import React from 'react'

export default function Modal() {

  const CLINET_ID = '03aeaded767a49b483a3fb235cc3a196'
  const REDIRECT_URI = 'http://localhost:3000';
  const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize";
  const RESPONSE_TYPE = 'token';
  const SCOPE = 'user-read-private user-read-email user-read-playback-state user-modify-playback-state user-read-recently-played user-top-read';

  return (
    <div className='z-100 fixed w-full h-full top-0 left-0 bg-modal-backdrop'>
      <div className='bg-white fixed top-2/4 left-2/4 transform -translate-x-2/4 -translate-y-2/4 h-2/4 w-3/4 sm:w-2/6 sm:h-3/6 px-2 pb-1'>
        <div className='flex flex-col justify-evenly h-full'>
            <h1>Welcome to Spotify Stats</h1>
            <p>This site allows you to see all of your favourite songs and artists that you have listened to on spotify!</p>
          <div>
            <small className='block'>To use the app you must login below:</small>
            <a type='button' href={`${AUTH_ENDPOINT}?client_id=${CLINET_ID}&redirect_uri=${REDIRECT_URI}&scope=${SCOPE}&response_type=${RESPONSE_TYPE}`} className='bg-spotify-green p-2 rounded-md text-white hover:cursor-pointer w-full text-center'>Login</a>
          </div>
        </div>
      </div>
    </div>
  )
}
