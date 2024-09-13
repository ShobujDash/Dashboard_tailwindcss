import React from 'react'

function Main({children}) {
  return (
    <div className='text-gray-500 bg-gray-100 p-5 sm:ml-64 flex gap-2 flex-col lg:flex-row transition-all duration-300 mt-14 dark:bg-gray-800'>
     {children}
    </div>
  )
}
 
export default Main
