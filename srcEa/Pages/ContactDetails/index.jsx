import { useNavigate, useParams } from "react-router-dom"

const ContactDetails = () => {
  const params = useParams()
  const navigate = useNavigate()
  return (
    <div className="bg-black  w-[100%] h-[100vh]  z-[-1] absolute top-0">
      <div className="mt-[200px]">
        <button className="border border-white rounded-sm w-20 h-8 bg-red-500" onClick={() => navigate(-1)}>
          Go Back
        </button>
        <h1> ContactDetails: {params.p_id}</h1>
      </div>
    </div>
  )
}
export default ContactDetails