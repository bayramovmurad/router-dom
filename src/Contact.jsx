import { useNavigate } from "react-router-dom"

const Contact = () => {
  const navigate = useNavigate()
  return (
    <div>
      <h1>contact</h1>
      <div>
        <button onClick={()=> navigate("/contact/101")}>101</button>
        <button onClick={() => navigate("/contact/102")}>102</button>
        <button onClick={() => navigate("/contact/103")}>103</button>
      </div>
    </div>
  )
}
export default Contact