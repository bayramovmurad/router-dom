import { useNavigate, useParams } from "react-router-dom"

const ContactDetails = () => {
    const params = useParams()
    const navigate = useNavigate()
   

  return (
    <div>
        <h1>salam</h1>
        <button onClick={()=>navigate(-1)}>back</button>
        <p>contactdtl:{params.p_id}</p>
    </div>
  )
}
export default ContactDetails