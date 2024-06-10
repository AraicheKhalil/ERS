import { CircleCheck } from 'lucide-react'
import React from 'react'

export default function Sidebar() {
  return (
    <div className='sidebar w-[280px] bg-gray-950 border-r text-[#64748b] text-white px-6 py-6'>

      <div className='flex items-center gap-3'>
        <img src='./Logo (1).png' alt='' />
        <div className='font-bold uppercase text-3xl'>
          ERS 
        </div>
      </div>

      <div className='Personnel-Box mt-6'>
        <h3 className='font-medium text-base'>Personnels</h3>
        <div className='mt-2'>
          <div className='transition relative'>
            
            <button className='text-sm font-medium w-full text-left py-3 px-3  hover:bg-gray-800  hover:text-blue-300 transition rounded-lg flex items-center gap-1.5'>
              <CircleCheck size={16} color='skyblue' /> Administrateurs 
            </button>
          </div>

          <div className='transition relative'>
            
            <button className='text-sm font-medium w-full text-left py-3 px-3  hover:bg-gray-800 hover:text-blue-300 transition rounded-lg flex items-center gap-1.5'>
              <CircleCheck size={16} color='skyblue' /> Redacteurs 
            </button>
          </div>

          <div className='transition relative'>
            
            <button className='text-sm font-medium w-full text-left py-3 px-3  hover:bg-gray-800  hover:text-blue-300 transition rounded-lg flex items-center gap-1.5'>
              <CircleCheck size={16} color='skyblue' /> 
              Ingenieurs
            </button>
          </div>

          <div className='transition relative'>
            
            <button className='text-sm font-medium w-full text-left py-3 px-3  hover:bg-gray-800  hover:text-blue-300 transition rounded-lg flex items-center gap-1.5'>
              <CircleCheck size={16} color='skyblue' /> Administrateurs 
            </button>
          </div>

          <div className='transition relative'>
            
            <button className='text-sm font-medium w-full text-left py-3 px-3  hover:bg-gray-800  hover:text-blue-300 transition rounded-lg flex items-center gap-1.5'>
              <CircleCheck size={16} color='skyblue' /> Adj Administratif 
            </button>
          </div>

          <div className='transition relative'>
            
            <button className='text-sm font-medium w-full text-left py-3 px-3  hover:bg-gray-800  hover:text-blue-300 transition rounded-lg flex items-center gap-1.5'>
              <CircleCheck size={16} color='skyblue' /> Adj Techniques 
            </button>
          </div>

          
        </div>
      </div>
      
    </div>
  )
}
