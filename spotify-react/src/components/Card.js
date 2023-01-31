import React from 'react'

export default function card({photo, title}) {
  return (
    <div className='flex'>
        <img src={photo} alt="photo"/>
        <h2>{title}</h2>
    </div>
  )
}

