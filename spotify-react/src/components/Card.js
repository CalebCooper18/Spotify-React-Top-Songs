import React from 'react'

export default function card({albumCover, songName}) {
  return (
    <div>
        <img src={albumCover} alt="Album cover" />
        <h2>{songName}</h2>
    </div>
  )
}

