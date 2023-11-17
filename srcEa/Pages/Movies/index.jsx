import React, { useEffect, useState } from "react";
import { getMovies } from "../../service";
import { useNavigate } from "react-router-dom";
import LoadingSvg from "../../Svg/loading.svg";

const Movies = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredData, setFilteredData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      const res = await getMovies();
      setData(res.data.Search);
      setFilteredData(res.data.Search);
      setLoading(false)
    };

    fetchData();
  }, []);

  const handleSearch = () => {
    const filtered = data.filter((movie) =>
      movie.Title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredData(filtered);
    setSearchTerm("")
  };

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
    <div className="bg-black w-[100%] min-h-screen z-[-1] absolute top-0">
      <div className="flex gap-x-4 mt-44 ml-12">
        <input
          type="text"
          placeholder="Search Movie..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="border bg-transparent border-white rounded-sm px-3 py-1 mr-2"
        />
        <button
          className="text-white border border-white rounded-sm px-4 bg-red-500 focus:scale-105 hover:duration-200"
          onClick={handleSearch}
        >
          Search
        </button>
      </div>
      <div className="flex items-center flex-wrap justify-center mt-[50px] mb-24 gap-10">
        
        {filteredData.map(({ Poster, Title, imdbID }) => (
          <div className="flex gap-x-4" key={imdbID}>
            <div className="border border-white rounded-sm w-[250px] h-[380px] relative">
              <img src={Poster} className="w-[100%] h-[300px]" alt={Title} />
              <p className="font-semibold pl-3 pt-2">{Title}</p>
              <button
                className="text-white flex absolute right-4 bottom-4 border border-white rounded-sm px-4 bg-red-500 hover:-translate-y-0.5 hover:duration-75"
                onClick={() => navigate("/movies/" + imdbID)}
              >
                More
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Movies;
