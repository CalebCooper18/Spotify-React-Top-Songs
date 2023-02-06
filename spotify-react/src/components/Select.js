import React from 'react'

export default function Select({defaultValue, values, changeURL}) {

    function handleChange(e)
    {
      changeURL(e.target.value)
    }
  return (
    <select value={defaultValue} className='w-full p-2.5 bg-white text-black border-black placeholder:bg-gray-700 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white focus:ring-blue-500 focus:border-blue-500' onChange={handleChange}>
        {values.map((option, index) => {
          return <option key={index} value={option.value === undefined ? option : option.value}>
                {option.title === undefined ? option : option.title}
          </option>  
        })}
    </select>
  )
}
