import '../index.css'
import AnimeCard from './AnimeCard'
import {Link} from 'react-router-dom';
import Axios from 'axios';
import { useState,useEffect } from 'react';
function NewEpisode() {

       const [newEpisod,setNewEpisode]=useState([]);
       
       useEffect(()=>{
         Axios.get("https://gogoanime.herokuapp.com/recent-release")
        .then((response)=>{
        setNewEpisode(response.data)
        }).catch((e)=>{console.log(e);})
      })

  return (
    <div className=" m-5 md:m-3 ">
      <div className=" font-mono w-full h-10 bg-yellow-300 rounded-xl mt-2 mb-3 p-2 ">
        <ul className="flex justify-evenly ">
        <li className=" text-black font-bold cursor-pointer border-b-2 border-black"><Link to="/" >New Episods</Link></li>
        <li className=" text-black font-bold cursor-pointer hover:border-b-2 border-black"><Link to="/Home" >Go to Home page</Link></li>
        </ul>
      </div>
       <AnimeCard data={newEpisod}/>
    </div>
  )
}



export default NewEpisode;