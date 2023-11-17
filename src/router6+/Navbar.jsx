import { useLocation, useNavigate } from "react-router-dom"
import { ROUTER } from "../router"
import { activeLink } from "../utils"




export const Navbar = () => {
    const navigate = useNavigate()
    const { pathname } = useLocation()
    return (
        <>
            <div>
                <button onClick={() => navigate(-1)}>go back</button>
                <button onClick={() => navigate(1)}>go next</button>
            </div>
            <nav>
                <ul>
                    <li className={ROUTER.HOME == pathname ? "active" : ""} onClick={() => { navigate(ROUTER.HOME) }}>Home</li>
                    <li className={ROUTER.CONTACT == pathname ? "active" : ""} onClick={() => { navigate(ROUTER.CONTACT) }}>Contact</li>
                    <li className={activeLink(ROUTER.ABOUT,pathname) ? "active" : ""} onClick={() => { navigate(ROUTER.ABOUT) }}>About</li>
                </ul>
            </nav>
        </>
    )
}
export default Navbar