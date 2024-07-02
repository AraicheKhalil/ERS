


import React from 'react'

export default function PageTitle({title,description}) {
  return (
    <div className='mb-4'>
        <h1 className='font-bold text-2xl text-gray-900'>
            {title}
        </h1>
        <p className='text-gray-500 text-sm max-w-[600px] mt-2'>  {description}
        </p>
    </div>
  )
}
