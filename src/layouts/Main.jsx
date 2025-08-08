import { Outlet } from "react-router-dom"
import Navbar from "../shared/Navbar"
import { Footer } from "../shared/Footer"


const Main = () => {
  return (
    <div className="relative">
        <header className="fixed w-full z-10">
          <Navbar></Navbar>
        </header>
        <main>
        <Outlet></Outlet>
        </main>
        <footer>
        <Footer></Footer>
        </footer>
    </div>
  )
}

export default Main