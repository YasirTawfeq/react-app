import React from 'react'
import {Link} from 'react-router-dom';
import Footer from './Footer';
import AnimeCard from './AnimeCard';
import Axios from 'axios';
import { useState,useEffect } from 'react';

function Home() {
      
       const [animeList,setAnomeList]=useState([]);
       useEffect(()=>{
        Axios.get("https://api.jikan.moe/v4/anime")
        .then((response)=>{console.log(response.data);setAnomeList(response.data.data.slice(0,21))})
        .catch((e)=>{console.log(e);})
      },[])
      
  return (
    <div className=" m-5 md:m-3 ">
      <div className=" font-mono w-full h-10 bg-yellow-300 rounded-xl mt-2 mb-3 p-2 ">
        <ul className="flex justify-evenly ">
        <li className=" text-black font-bold cursor-pointer hover:border-b-2 border-black"><Link to="/" >New Episods</Link></li>
        <li className=" text-black font-bold cursor-pointer border-b-2 border-black"><Link to="/Home" >Home page</Link></li>
        </ul>
      </div>

      <div className=" flex flex-col md:flex-row  justify-between font-mono w-full h-full md:h-10 bg-yellow-300 rounded-xl mt-2 mb-3 p-2 ">
        <div className="">
           <ul className="flex justify-evenly ">
             <li className=" text-black font-bold cursor-pointer border-b-2  border-black"><Link to="/Sub" >Subtitle</Link></li>
             <li className=" text-black font-bold cursor-pointer hover:border-b-2 ml-2 border-black"><Link to="/Dub" >English</Link></li>
             <li className=" text-black font-bold cursor-pointer hover:border-b-2 ml-2 border-black"><Link to="/Kurdish" >Kurdish</Link></li>
           </ul>
        </div>
        <form className=" flex justify-center mt-4 md:mt-0 ">
           <input className="" type="search" placeholder="   Anime Name..." />
           <button className="bg-black text-yellow-300  rounded-r-full pr-1" type="submit">Search</button>
        </form>
      </div>
      
      
      <div className="flex flex-row-reverse flex-wrap justify-evenly ">
         {animeList?.map((anime)=>{
        return(
        <AnimeCard  key={anime.mal_id} id={anime.mal_id} title={anime.title} img={anime.images.jpg.image_url}/>
        )})}
      </div>
       
       <Footer/>
    </div>
  )
}

export default Home;