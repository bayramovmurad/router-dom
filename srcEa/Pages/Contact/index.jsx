import { useNavigate } from "react-router-dom"
import { ROUTER } from "../../Router/router"

const Contact = () => {
  const navigate = useNavigate()
  return (
    <div className="bg-black  w-[100%] h-[100vh]  z-[-1] absolute top-0">
     
      <h1 className="mt-[200px]">Contact</h1>
      <div>
        <button className="border border-white bg-red-500 mx-2 w-20 h-8" onClick={() => navigate(ROUTER.CONTACT + "/101")}>101</button>
        <button className="border border-white bg-red-500 mx-2 w-20 h-8" onClick={() => navigate(ROUTER.CONTACT + "/102")}>102</button>
        <button className="border border-white bg-red-500 mx-2 w-20 h-8" onClick={() => navigate(ROUTER.CONTACT + "/103")}>103</button>
      </div>
    </div>
  )
}
export default Contact