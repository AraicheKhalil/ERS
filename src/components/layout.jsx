import { Outlet } from 'react-router-dom'
import Sidebar from './sidebar'
import Header from './Header'

function Layout() {
    
  return (
    <main className="page-wrapper">
      {/* left of page */}
      <Sidebar />
      {/* right side/content of the page */}
      <div className="content-wrapper">
        <Header />
        <Outlet />
      </div>
    </main>
  )
}

export default Layout