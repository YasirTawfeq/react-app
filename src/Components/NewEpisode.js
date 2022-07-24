import '../index.css'
import AnimeCard from './AnimeCard'
import {Link} from 'react-router-dom';
import Axios from 'axios';
import { useState,useEffect } from 'react';

function NewEpisode() {
       const [newEpisod,setNewEpisode]=useState([]);
       
       useEffect(()=>{
         Axios.get("https://api.jikan.moe/v4/top/anime")
        .then((response)=>{
        setNewEpisode(response.data.data)
        }).catch((e)=>{console.log(e);})
        
      },[newEpisod])

  return (
    <>
    <div className=" m-5 md:m-3 ">
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
    </div>
    </>
  )
}



export default NewEpisode;