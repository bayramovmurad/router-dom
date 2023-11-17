import { useLocation, useNavigate } from "react-router-dom"
import { ROUTER } from "../../Router/router"
import { activeLink } from "../../Utils/activeLink"

const index = () => {
    const { pathname } = useLocation()
    const navigate = useNavigate()
    return (
      <>
            <nav >
                <ul className="flex gap-x-4 justify-end pr-3 pt-3 font-bold">
                    <li className={activeLink(ROUTER.HOME, pathname) ? "active animate-pulse" : ""} onClick={() => navigate(ROUTER.HOME)}>Home</li>
                    <li className={activeLink(ROUTER.MOVIES, pathname) ? "active animate-pulse" : ""} onClick={() => navigate(ROUTER.MOVIES)}>Movies</li>
                    <li className={activeLink(ROUTER.CONTACT, pathname) ? "active animate-pulse" : ""} onClick={() => navigate(ROUTER.CONTACT)}>Contact</li>
                    <li className={activeLink(ROUTER.ABOUT, pathname) ? "active animate-pulse" : ""} onClick={() => navigate(ROUTER.ABOUT)}>About</li>
                    <li className={activeLink(ROUTER.SERVICE, pathname) ? "active animate-pulse" : ""} onClick={() => navigate(ROUTER.SERVICE)}>Service</li>
                </ul>
            </nav>
            <div className="flex justify-center my-8 gap-x-4">
                <button className="border border-gray-700 rounded-sm bg-none w-20 h-8 hover:bg-red-500 hover:text-white hover:delay-75" onClick={()=>navigate(-1)}>Back</button>
                <button className="border border-gray-700 rounded-sm bg-none w-20 h-8 hover:bg-red-500 hover:text-white hover:delay-75" onClick={() => navigate(1)}>Forvard</button>
            </div>
            <br />
      </>
    )
}
export default index