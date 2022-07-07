import '../index.css';
import {Link} from 'react-router-dom'
function Anime({data}) {
  return (
     <Link to="/AnimeHome">
     <div className="flex flex-wrap justify-around"> 
       { data?.map((anime)=>
       <div key={anime.episodeId} className=" xl:w-40 h-40 w-36 m-1 shadow-md rounded-lg overflow-hidden bg-yellow-300 hover:shadow-sm hover:shadow-yellow-100 cursor-pointer ">
       <img className=" w-full h-28 " src={anime.animeImg} alt={anime.animeTitle}/> 
       <div className="text-center uppercase font-semibold text-xs">{anime.animeTitle.slice(0,12)}...  {anime.subOrDub?<small className="uppercase">({anime.subOrDub})</small>:<div></div>}</div>
       {anime.episodeNum?<div className=" pb-0.5 text-center uppercase font-semibold"><small>ep {anime.episodeNum}</small></div> :<div></div> }
       </div>
       )}
       </div>
       </Link>
  )
}

export default Anime;