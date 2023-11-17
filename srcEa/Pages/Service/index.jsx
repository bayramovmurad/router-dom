import { Routes,Route, Link } from "react-router-dom"
import EnglishLanguage from "./Language/English"
import RussianLanguage from "./Language/Russian"

const Service = () => {
  return (
    <div className="bg-black  w-[100%] h-[100vh]  z-[-1] absolute top-0">
      <h1 className="mt-[200px]">Service</h1>
      <hr />
      <nav>
        <ul>
          <li>
            <Link to="englishlanguage">
              English Language
            </Link>
          </li>
          <li>
            <Link to="russianlanguage">
              Russian Language
            </Link>
          </li>
        </ul>
      </nav>
   
     
      <Routes>
        <Route path="englishlanguage" element={<EnglishLanguage/>}/>
        <Route path="russianlanguage" element={<RussianLanguage/>} />
      </Routes>
    </div>
  )
}
export default Service

