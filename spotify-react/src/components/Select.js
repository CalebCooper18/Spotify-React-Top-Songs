import React from 'react'

export default function Select({values, changeURL}) {

    function handleChange(e)
    {
      changeURL(e.target.value)
    }
  return (
    <select className='w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500' onChange={handleChange}>
        {values.map((option, index) => {
          return <option key={index} value={option.value === undefined ? option : option.value}>
                {option.title === undefined ? option : option.title}
          </option>  
        })}
    </select>
  )
}
