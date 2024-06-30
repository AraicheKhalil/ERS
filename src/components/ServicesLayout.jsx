import { Outlet } from 'react-router-dom'
import Sidebar from './sidebar'
import Header from './Header'
import { useContext } from 'react';
import SideBarContext from '@/context/SidebarContext';


function ServicesLayout() {

  const { open, setOpen } = useContext(SideBarContext);

    
  return (
    <main className="page-wrapper ">
      {/* left of page */}
      <Sidebar />
      {/* right side/content of the page */}
      <div className={`content-wrapper transition  ml-[250px] ${open ? "ml-[250px]" : "ml-[80px]"}`}>
        {/* <Header /> */}
        <Outlet />
      </div>
    </main>
  )
}

export default ServicesLayout;