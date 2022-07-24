import '../index.css'
import AnimeCard from './AnimeCard'
import {Link} from 'react-router-dom';
import Axios from 'axios';
import { useState,useEffect } from 'react';
import HashLoader from "react-spinners/HashLoader";

function NewEpisode() {
       const [loading,setLoading] = useState(false);
       const [newEpisod,setNewEpisode]=useState([]);
       
       useEffect(()=>{
         setLoading(true);
         Axios.get("https://api.jikan.moe/v4/top/anime")
        .then((response)=>{
        setNewEpisode(response.data.data)
        }).catch((e)=>{console.log(e);})
        
        setTimeout(()=>{
            setLoading(false);
        },2000)
      },[newEpisod])

  return (
    <>
    {loading? 
    <div className=" flex justify-center items-center mt-52"><HashLoader color={"yellow"} loading={loading} size={60} /></div>
    :<div className=" m-5 md:m-3 ">
      <div className=" font-mono w-full h-10 bg-yellow-300 rounded-xl mt-2 mb-3 p-2 ">
        <ul className="flex justify-evenly ">
        <li className=" text-black font-bold cursor-pointer border-b-2 border-black"><Link to="/" >New Episods</Link></li>
        <li className=" text-black font-bold cursor-pointer hover:border-b-2 border-black"><Link to="/Home" >Go to Home page</Link></li>
        </ul>
      </div>
        
      <div className="flex flex-row-reverse flex-wrap justify-evenly ">
         {newEpisod.slice(0,21)?.map((anime)=>{
        return(
        <AnimeCard  key={anime.mal_id} id={anime.mal_id} title={anime.title} img={anime.images.jpg.image_url}/>
        )})}
      </div>
    </div>}
    </>
  )
}



export default NewEpisode;