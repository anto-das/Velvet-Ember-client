import { Outlet, useLocation } from "react-router-dom"
import Navbar from "../shared/Navbar"
import { Footer } from "../shared/Footer"


const Main = () => {
  const location = useLocation();
  const onHeaderFooter = location.pathname.includes('/sign-in');
  return (
    <div className="relative">
        <header className="fixed w-full z-10">
         {onHeaderFooter || <Navbar></Navbar>}
        </header>
        <main>
        <Outlet></Outlet>
        </main>
        <footer>
        {onHeaderFooter || <Footer></Footer>}
        </footer>
    </div>
  )
}

export default Main