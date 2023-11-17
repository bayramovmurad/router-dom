import { useNavigate } from "react-router-dom"
import { ROUTER } from "../../Router/router"

const Home = () => {
  const navigate = useNavigate()
  return (
    <div>
      <img className="absolute top-0 z-[-1] h-[100vh]" src="https://cinerama.qodeinteractive.com/wp-content/uploads/2018/05/landing-slisder-img-2.jpg" alt="" />
    <div className="flex justify-center">
        <div className="absolute bottom-20 text-center ">
          <h2 className="font-bold text-4xl mb-10">About Info</h2>
          <button className="border w-40 h-12 border-white rounded-sm text-white bg-red-500 animate-bounce" onClick={() => navigate(ROUTER.ABOUT)}>
            Get Started
          </button>
        </div>
    </div>
    </div>
  )
}
export default Home