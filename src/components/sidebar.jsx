import { AppContext } from '@/hooks/context/AppContext';
import {  BriefcaseBusiness, Coffee, Combine, Files, LayoutDashboardIcon, ListTodo, NotebookTabs, PieChart, Power, Settings, VaultIcon } from 'lucide-react'
import React, { useContext } from 'react'
import { Link, useLocation } from 'react-router-dom';
import { Button } from './ui/button';



export default function Sidebar() {

  const {  open, setOpen } = useContext(AppContext);
  console.log(open)

  const {pathname} = useLocation()

  const Menus = [
    
    { route : "", title: "Overview", src: <LayoutDashboardIcon /> },
    { route : "statistiques", title: "Statistiques", src: <PieChart /> },
    { route : "services", title: "Service", src: <ListTodo /> , gap: true },
    { route : "poste-vacont", title: "Poste Vacant ", src: <Combine /> },
    { route : "Congé", title: "Congé", src:  <Coffee /> },
    { route : "retraités", title: "Retraités", src:  <NotebookTabs  /> },
    { route : "eap-mi-ac", title: "EAP (MI /AC)", src:  <NotebookTabs  /> },
    ];

  return (
    // <div className="sidebar w-[250px] bg-gray-950 border-r ">
      <div className="sidebar flex w-[250px] ">
        <div
          className={` ${
            open ? "w-72" : "w-20 "
          } bg-gray-950 h-screen p-5 pt-8 relative duration-300`}
        >
          <img
            src="Logo (1).png"
            className={`absolute cursor-pointer -right-3 top-9 w-7 border-dark-purple
      border-2 rounded-full ${!open && "rotate-180"}`}
            onClick={() => setOpen(!open)}
          />
          <div className="flex gap-x-4 items-center">
            <img
              src="/Logo (1).png"
              className={`cursor-pointer duration-500 ${
                open && "rotate-[360deg]"
              }`}
            />
            <h1
              className={`text-white origin-left font-medium text-xl duration-200 ${
                !open && "scale-0"
              }`}
            >
              AdeCodes
            </h1>
          </div>
          <ul className="pt-6 ">
            {Menus.map((Menu, index) => (
              <li
                key={index}
                className={`flex rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4 
                ${Menu.gap ? "mt-9" : "mt-2"} ${pathname === `/${Menu.route}` && "bg-gray-900"} `}
              >
                <Link to={`/${Menu.route}`} className='flex items-center gap-x-4 w-full'>
                  <div>{Menu.src}</div>
                  <span
                    className={`${!open && "hidden"} origin-left duration-200`}
                  >
                    {Menu.title}
                  </span>
                </Link>
              </li>
            ))}
            <li className={`mt-9 flex rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4 
                 `}>
              <button className='flex items-center gap-x-4 w-full'
              >
                <span >
                  <Files />
                </span>
                <span className={`${!open && "hidden"} origin-left duration-200`}>Attestation de Travail</span>
              </button>
            </li>
            <li className={`flex rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4 
                 `}>
              <button className='flex items-center gap-x-4 w-full'
                
              >
                {/* Attestation de Travail */}
                <span >
                  <BriefcaseBusiness />
                </span>
                <span className={`${!open && "hidden"} origin-left duration-200`}>EAP / CAP </span>
              </button>
            </li>
            
          </ul>
        </div>
      </div>
    //   {/* <div className='flex items-center gap-3'>
    //     <img src='./Logo (1).png' alt='' />
    //     <div className='font-bold uppercase text-3xl'>
    //       ERS 
    //     </div>
    //   </div> */}

    //   {/* <div className='Personnel-Box mt-6'>
    //     <h3 className='font-medium text-base'>Personnels</h3>
    //     <div className='mt-2'>
    //       <div className='transition relative'>
            
    //         <button className='text-sm font-medium w-full text-left py-3 px-3  hover:bg-gray-800  hover:text-blue-300 transition rounded-lg flex items-center gap-1.5'>
    //           <CircleCheck size={16} color='skyblue' /> Administrateurs 
    //         </button>
    //       </div>

    //       <div className='transition relative'>
            
    //         <button className='text-sm font-medium w-full text-left py-3 px-3  hover:bg-gray-800 hover:text-blue-300 transition rounded-lg flex items-center gap-1.5'>
    //           <CircleCheck size={16} color='skyblue' /> Redacteurs 
    //         </button>
    //       </div>

    //       <div className='transition relative'>
            
    //         <button className='text-sm font-medium w-full text-left py-3 px-3  hover:bg-gray-800  hover:text-blue-300 transition rounded-lg flex items-center gap-1.5'>
    //           <CircleCheck size={16} color='skyblue' /> 
    //           Ingenieurs
    //         </button>
    //       </div>

    //       <div className='transition relative'>
            
    //         <button className='text-sm font-medium w-full text-left py-3 px-3  hover:bg-gray-800  hover:text-blue-300 transition rounded-lg flex items-center gap-1.5'>
    //           <CircleCheck size={16} color='skyblue' /> Administrateurs 
    //         </button>
    //       </div>

    //       <div className='transition relative'>
            
    //         <button className='text-sm font-medium w-full text-left py-3 px-3  hover:bg-gray-800  hover:text-blue-300 transition rounded-lg flex items-center gap-1.5'>
    //           <CircleCheck size={16} color='skyblue' /> Adj Administratif 
    //         </button>
    //       </div>

    //       <div className='transition relative'>
            
    //         <button className='text-sm font-medium w-full text-left py-3 px-3  hover:bg-gray-800  hover:text-blue-300 transition rounded-lg flex items-center gap-1.5'>
    //           <CircleCheck size={16} color='skyblue' /> Adj Techniques 
    //         </button>
    //       </div>

          
    //     </div>
    //   </div> */}
    // </div>
  );
}
