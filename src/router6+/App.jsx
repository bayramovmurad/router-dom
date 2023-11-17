import { Route, Routes } from "react-router"

import Home from "../Home"
import Contact from "../Contact"
import Navbar from "./Navbar"
import About from "../About"
import ContactDetails from "../ContactDetails"
import { ROUTER } from "../router"
import "../index.css"


const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path={ROUTER.HOME} element={<Home />} />
        <Route path={ROUTER.CONTACT} element={<Contact />} />
        <Route path={ROUTER.CONTACTDETAILS} element={<ContactDetails />} />
        <Route path={ROUTER.ABOUT} element={<About />} />
      </Routes>
    </>
  )
}
export default App