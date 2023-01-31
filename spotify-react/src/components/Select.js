import React from 'react'

export default function Select() {
    const dates = ['short_term', 'medium_term', 'long_term'];
  return (
    <select>
        {dates.map((option, index) => {
          return <option key={index}>
                {option}
          </option>  
        })}
    </select>
  )
}
