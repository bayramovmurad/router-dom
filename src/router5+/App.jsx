import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"
import Home from "../../Home"
import Contact from "../../Contact"
import { NavLinksComponent } from "./Navbar"


const App = () => {
  
  return (
    <>
   
    <Router>
        <NavLinksComponent />
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/contact" element={<Contact />} />
    </Routes>
  </Router>
    </>
   
  )
}
export default App