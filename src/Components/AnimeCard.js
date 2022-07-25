import '../index.css';
import {Link} from 'react-router-dom'
function Anime(anime) {

  return (
     <Link to={`/AnimeHome/${anime.id}`}>
    
       <div className="m-2 w-32 lg:w-40 overflow-hidden rounded-sm bg-yellow-300   ">
        <img className=" w-full h-28 " src={anime.img} alt={anime.title}/> 
        <h6 className="p-1 font-bold text-sm">{anime.title.slice(0,12)}...</h6>
       </div>
    
       </Link>
  )
}

export default Anime;