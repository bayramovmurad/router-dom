import { Route, Routes } from "react-router-dom"
import Home from "./Pages/Home"
import { ROUTER } from "./Router/router"
import About from "./Pages/About"
import Contact from "./Pages/Contact"
import ContactDetails from "./Pages/ContactDetails"
import Service from "./Pages/Service"
import NotFoundPage from "./Pages/404"
import Header from "./Components/Header"
import "./index.css"
import Movies from "./Pages/Movies"
import MoviesDetails from "./Pages/MoviesDetails"
import MoviesSettings from "./Pages/MoviesSettings"
const App = () => {
  return (
    <body>
      <Header />
      <Routes>
        <Route path={ROUTER.HOME} element={<Home/>}/>
        <Route path={ROUTER.ABOUT} element={<About />} />

        <Route path={ROUTER.CONTACT} element={<Contact />} />
        <Route path={ROUTER.CONTACT_DETAILS} element={<ContactDetails />} />

        <Route path={ROUTER.MOVIES} element={<Movies />} />
        <Route path={ROUTER.MOVIES_DETAILS} element={<MoviesDetails />} />
        <Route path={ROUTER.MOVIES_DETAILS_SETTINGS} element={<MoviesSettings />} />



        <Route path={ROUTER.SERVICE} element={<Service />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </body>
  )
}
export default App