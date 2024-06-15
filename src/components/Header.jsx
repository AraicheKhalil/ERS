import React, { useEffect, useState } from 'react'
import NewChart from './DashChart'
import { Dot } from 'lucide-react'


const Employee_type = [
    {
        type : "Administrateurs",
        color : "#0088FE",
        num : "28"
    },
    {
        type : "Redacteurs",
        color : "#00C49F",
        num : "83"
    },
    {
        type : "Ingenieurs",
        color : "#FF8042",
        num : "30"
    },
    {
        type : "Techniciens",
        color : "#FFBB28",
        num : "120"
    },
    {
        type : "Adj Administratif",
        color : "#ff3dcc",
        num : "72"
    },
    {
        type : "Adj Techniques",
        color : "#eeeeee",
        num : "64"
    },
    
]


export default function Header() {
    const [visible,setVisible] = useState(false)

    useEffect(() => {
        const timer = setTimeout(() => {
          setVisible(true);
        }, 3000); 
        return () => clearTimeout(timer); 
      }, []);

  return (
    <div>
      <h1 className="max-w-[700px] text-center mx-auto text-2xl font-semibold py-7 tracking-wide leading-[1.3]">
        Département des RH, des affaires juridiques, de la coopération et de la
        collaboration
      </h1>

      

      <div className="bg-gray-900 flex flex-wrap justify-between py-4 px-6 text-white mx-8 rounded-[24px] items-center  ">
        <div className='flex items-center md:gap-10 gap-16 lg:flex-wrap  max-lg:flex-col-reverse max-lg:items-center max-lg:w-full'>
          <NewChart />
          <div className={`flex flex-col flex-wrap max-h-40  gap-3 font-medium gap-x-7  transition-[0.3s] ${visible ? "opacity-100" : "opacity-0 "} max-md:flex-nowrap`}>
            {Employee_type.map((item,index) => (
                <div key={index} className='flex items-center gap-1'>
                    <Dot size={20} strokeWidth={8} color={item.color} />
                    {item.type} <span className='ml-2'>: </span><span className='ml-1.5'>{item.num}</span>
                </div>
            ))}
          </div>
        </div>
      </div>

    </div>
  );
}
