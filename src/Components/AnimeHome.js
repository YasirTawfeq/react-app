import React from 'react'
import Footer from './Footer'
import {useParams,Link} from 'react-router-dom'
import Axios from 'axios';
import { useState,useEffect } from 'react';
import HashLoader from "react-spinners/HashLoader";

function AnimeHome() {
       const {id}=useParams();
       const [loading,setLoading] = useState(false);
       const [animeList,setAnomeList]=useState([]);
       const [animeDetail,setDetail] = useState([]);
      
       useEffect(()=>{
        setLoading(true);
        Axios.get(`https://gogoanime.herokuapp.com/search?keyw=${"One Piece"}`) /**fix this line */
        .then((response)=>{console.log(response.data)
        setAnomeList(response.data.filter((para)=>para.animeId===id))})
        .catch((e)=>{console.log(e);})

        setTimeout(()=>{
            setLoading(false);
        },1500)

      },[id])

       useEffect(()=>{
        Axios.get(`https://gogoanime.herokuapp.com/anime-details/${id}`)
        .then((response)=>{console.log(response.data); setDetail(response.data)
        })
        .catch((e)=>{console.log(e);})
      },[id])
    
    return (
    <>
     {loading? 
    <div className=" flex justify-center items-center mt-52"><HashLoader color={"yellow"} loading={loading} size={60} /></div>
    :<div>
      <>
      {animeList?.map((anime)=>{return(
     <center key={anime.animeId} className="text-yellow-300">  
       
       <img className=" w-full lg:w-1/2 h-80" src={anime.animeImg} alt={anime.animeTitle} />
       <div className=" w-full lg:w-1/2 mt-2 lg:ml-3 lg:mr-3 p-3 flex justify-center items-center border-b-2 border-yellow-300">
        <Link to="/Home" className="fixed top-3 left-3" >
          <svg className=" cursor-pointer bg-yellow-300 w-9 h-9  rounded-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M447.1 256C447.1 273.7 433.7 288 416 288H109.3l105.4 105.4c12.5 12.5 12.5 32.75 0 45.25C208.4 444.9 200.2 448 192 448s-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25l160-160c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25L109.3 224H416C433.7 224 447.1 238.3 447.1 256z"/></svg>
        </Link>
        <p className=" text-xl font-bold">{anime.animeTitle}</p>
      
       </div>
     
       <div className="w-full lg:w-1/2 mt-3 p-4 text-left">
       
            
          <ul className="text-yellow-300">
            <li>Name : {animeDetail.animeTitle}</li>
            <li>Type : {animeDetail.type}</li>
            <li>Year : {animeDetail.releasedDate}</li>
            <li>Statue : {animeDetail.status}</li>
            <li>Episods : {animeDetail.totalEpisodes}</li>
            <li className="mt-2">{animeDetail.synopsis}</li>
          </ul>
          

      </div>
        
        
      <div className="w-full lg:w-1/2 mt-3">
        <Link to={`/Watch/${anime.animeId}`}>
          <div className="w-full p-2 font-bold uppercase text-black bg-yellow-300 rounded-lg cursor-pointer "> Watch  </div>
        </Link>
      </div>
         
  
      </center>
     )})}
     </>
    <Footer/>
    </div>}
    </>
  )
}

export default AnimeHome