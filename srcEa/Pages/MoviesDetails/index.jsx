import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom"
import { getMovieID } from "../../service";
import LoadingSvg from "../../Svg/loading.svg"


const MoviesDetails = () => {
  const [loading,setLoading] = useState(true)
  const [data,setData] = useState([])
  const params = useParams();
  const navigate = useNavigate();

  useEffect(()=>{
  
    (
      async () => {
       
        const res = await getMovieID(params.omdb);
        setLoading(false)
        setData(res.data)
       
      }
    )()
  },[params]);

  if (loading) {
    return (
      <div className="bg-black  w-[100%] h-[100vh]  z-[-1] absolute top-0">
        <div className="flex items-center flex-col gap-y-4 mt-[300px]">
          <img src={LoadingSvg} alt="" />
          <h1 className="font-bold text-4xl">Loading...</h1>
        </div>
      </div>
    )
  }

  return (
    <div className="bg-black absolute w-[100%] h-[100vh] top-0 z-[-1] flex justify-center items-center"> 
     
     
        <div className="flex px-10 gap-x-10">
          <div>
            <img src={data.Poster} alt={data.Title} />
          </div>
          <div>
            <h1 className="font-bold">{data.Title}</h1>
            <p>{data.Plot}</p>
          </div>
        </div>
     
    </div>
  )
}
export default MoviesDetails