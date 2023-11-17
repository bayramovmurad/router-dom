import { useNavigate } from "react-router-dom"
import { ROUTER } from "./router"

const Home = () => {
  const navigate = useNavigate()
  return (
   
    <div>
      <h1>Home</h1>
      <div>
        <h2>About info</h2>
        <button onClick={()=>navigate(ROUTER.ABOUT)}>get started</button>
      </div>
    </div>
  )
}
export default Home