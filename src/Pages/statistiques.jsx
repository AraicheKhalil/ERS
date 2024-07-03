

// import Example from '@/components/Charts/SimpleBarChart';
import ExampleLL from '@/components/Charts/SimpleBarChart';
import PageTitle from '@/components/PageTitle';
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
      <PageTitle title={"Statistiques Des Employés"} description={"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa itaque magni omnis, iure assumenda nulla debitis dolorum voluptatibus consequatur facilis."}/>
      <ExampleLL />
    </div>
  )
}
