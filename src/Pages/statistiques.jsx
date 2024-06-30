

// import Example from '@/components/Charts/SimpleBarChart';
import ExampleLL from '@/components/Charts/SimpleBarChart';
// import Example from '@/components/Charts/SimpleBarChart';
import React from 'react'



export default function Statistiques() {
  const myData = [
    { date: '2024-06-11', value: 10 },
    { date: '2024-06-12', value: 15 },
    // ... more data points
  ];

  return (
    <div className='md:p-8 p-4'>
        <div>
        </div>
          <ExampleLL />
    </div>
  )
}
