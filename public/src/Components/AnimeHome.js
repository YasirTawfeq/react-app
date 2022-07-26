import React from 'react'
import Footer from './Footer'
import {useParams,Link} from 'react-router-dom'
import Axios from 'axios';
import { useState,useEffect } from 'react';
import HashLoader from "react-spinners/HashLoader";

function AnimeHome() {
      
       const {id,title}=useParams();
       const [loading,setLoading] = useState(false);
       const [animeList,setAnomeList]=useState([]);
      
       useEffect(()=>{
        setLoading(true);
<<<<<<< HEAD
        Axios.get(`https://gogoanime.herokuapp.com/search?keyw=${title}`) 
        .then((response)=>{console.log(response.data)
        setAnomeList(response.data.filter((para)=>para.animeId===id))})
=======
        Axios.get("https://api.jikan.moe/v4/top/anime")
        .then((response)=>{console.log(response.data.data)
        setAnomeList(response.data.data.filter((para)=>para.mal_id.toString()===id))})
>>>>>>> 6d6aeb8ff97597ddb7cf233b505e80fd736b9849
        .catch((e)=>{console.log(e);})
 
        setTimeout(()=>{
            setLoading(false);
        },1500)

<<<<<<< HEAD
      },[id,title])

       useEffect(()=>{
        Axios.get(`https://gogoanime.herokuapp.com/anime-details/${id}`)
        .then((response)=>{console.log(response.data); setDetail(response.data)
        })
        .catch((e)=>{console.log(e);})
=======
>>>>>>> 6d6aeb8ff97597ddb7cf233b505e80fd736b9849
      },[id])
    
    return (
    <>
     {loading? 
    <div className=" flex justify-center items-center mt-52"><HashLoader color={"yellow"} loading={loading} size={60} /></div>
    :<div>
      {animeList?.map((anime)=>{return(
     <center key={anime.mal_id} className="text-yellow-300">  
       
       <img className=" w-full lg:w-1/2 h-80" src={anime.images.webp.image_url} alt={anime.title} />
       <div className=" w-full lg:w-1/2 mt-2 lg:ml-3 lg:mr-3 p-3 flex justify-between items-center border-b-2 border-yellow-300">
        <Link to="/Home" >
          <svg className=" cursor-pointer bg-yellow-300 w-9 h-9  rounded-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M447.1 256C447.1 273.7 433.7 288 416 288H109.3l105.4 105.4c12.5 12.5 12.5 32.75 0 45.25C208.4 444.9 200.2 448 192 448s-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25l160-160c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25L109.3 224H416C433.7 224 447.1 238.3 447.1 256z"/></svg>
        </Link>
        <p className=" text-xl font-bold">{anime.title.substr(0,23)}...</p>
        <p className=" text-sm">{anime.year}</p>
       </div>

<<<<<<< HEAD
        <ul className="w-full lg:w-1/2 mt-3 p-4 text-left  flex flex-wrap justify-evenly">
          {animeDetail.genres?.map((genre)=>{
            return <li key={genre.index} className="p-1 text-black text-center font-bold text-sm lg:text-lg bg-yellow-300 rounded-lg" >{genre}</li>
          })}
        </ul>
     
       <div className="w-full lg:w-1/2 mt-3 p-4 text-left">

            
          <ul className="text-yellow-300">
            <li>Name : {animeDetail.animeTitle}</li>
            <li>Type : {animeDetail.type}</li>
            <li>Year : {animeDetail.releasedDate}</li>
            <li>Statue : {animeDetail.status}</li>
            <li>Episods : {animeDetail.totalEpisodes}</li>
            <li className="mt-2">{animeDetail.synopsis}</li>
          </ul>
          
=======
        <div className="w-full lg:w-1/2 mt-3">
          {animeList?.map((anime)=>
           {return(
            <ul className=" flex justify-center flex-wrap ">
              {anime.genres.map((anime)=>
              <li key={anime.mal_id} className="m-1 p-1 text-sm font-bold uppercase text-black bg-yellow-300 rounded-lg ">{anime.name}</li>
              )}
            </ul>
           )})}
       </div>
      
      <div className="w-full lg:w-1/2 mt-3">
        <p className="m-1 break-all p-2">{anime.synopsis}</p>
      </div>

      
     
      <div className="w-full lg:w-1/2 mt-3">
        
        <iframe className="w-full aspect-video ..." src="https://www.youtube.com/embed/_sBizpKdDAk" title="شارة وان بيس One Piece Arabic opening ending" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen autoPlay></iframe>
>>>>>>> 6d6aeb8ff97597ddb7cf233b505e80fd736b9849

      </div>
      
      <div className="w-full lg:w-1/2 mt-3">
<<<<<<< HEAD
        <Link to={`/Watch/${anime.animeId}/${title}`}>
=======
        <Link to={`/Watch/${anime.mal_id}`}>
>>>>>>> 6d6aeb8ff97597ddb7cf233b505e80fd736b9849
          <div className="w-full p-2 font-bold uppercase text-black bg-yellow-300 rounded-lg cursor-pointer "> Watch  </div>
        </Link>
      </div>

     </center>
     )})}
<<<<<<< HEAD
     </>
        <Footer/>
=======
    <Footer/>
>>>>>>> 6d6aeb8ff97597ddb7cf233b505e80fd736b9849
    </div>}
    </>
  )
}

export default AnimeHome