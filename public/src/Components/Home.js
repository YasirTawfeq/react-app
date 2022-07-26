import React from 'react'
import {Link} from 'react-router-dom';
import Footer from './Footer';
import AnimeCard from './AnimeCard';
import Axios from 'axios';
import { useState,useEffect } from 'react';
import HashLoader from "react-spinners/HashLoader";

function Home() {

 /*
 import MediaQuery from 'react-responsive';
 <MediaQuery minWidth={1600}></MediaQuery>
*/

       const [loading,setLoading] = useState(false);
       const [animeList,setAnomeList]=useState([]);
 
       useEffect(()=>{
        setLoading(true);
<<<<<<< HEAD
        Axios.get("https://gogoanime.herokuapp.com/popular")
        .then((response)=>{console.log(response.data);
         setAnomeList(response.data)})
=======
        Axios.get("https://api.jikan.moe/v4/top/anime")
        .then((response)=>{console.log(response.data);setAnomeList(response.data.data.slice(0,21))})
>>>>>>> 6d6aeb8ff97597ddb7cf233b505e80fd736b9849
        .catch((e)=>{console.log(e);})
       
        setTimeout(()=>{
            setLoading(false);
        },1500)

      },[animeList])
     
     
  return (
    <>
    {loading? 
    <div className=" flex justify-center items-center mt-52"><HashLoader color={"yellow"} loading={loading} size={60} /></div>
    :<div className=" m-5 md:m-3 ">
      <div className=" font-mono w-full h-10 bg-yellow-300 rounded-xl mt-2 mb-3 p-2 ">
        <ul className="flex justify-evenly ">
        <li className=" text-black font-bold cursor-pointer hover:border-b-2 border-black"><Link to="/" >New Episods</Link></li>
        <li className=" text-black font-bold cursor-pointer border-b-2 border-black"><Link to="/Home" >Home page</Link></li>
        </ul>
      </div>

         

        <form className="flex items-center mb-3">   
          <label for="simple-search" className="sr-only">Search</label>
          <div className="relative w-full">
            <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
             <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>
            </div>
            <input type="text" id="simple-search" className="bg-gray-50 border border-yellow-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-yellow-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-yellow-500 dark:focus:border-yellow-500" placeholder="Anime Name ..." required="Enter the name please"/>
         </div>
         <button type="submit" className="p-2.5 ml-2 text-sm font-medium text-black bg-yellow-300 rounded-lg border border-yellow-700 hover:bg-yellow-600 focus:ring-4 focus:outline-none focus:ring-yellow-300 dark:bg-yellow-300 dark:hover:bg-yellow-600 dark:focus:ring-yellow-800">
           <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
           <span className="sr-only">Search</span>
         </button>
       </form>
      
<<<<<<< HEAD
      <div className="flex flex-row-reverse flex-wrap justify-evenly p-0 lg:pl-20 lg:pr-20 ">
         {animeList.slice(0,21)?.map((anime)=>{
=======
      
      <div className="flex flex-row-reverse flex-wrap justify-evenly ">
         {animeList?.map((anime)=>{
>>>>>>> 6d6aeb8ff97597ddb7cf233b505e80fd736b9849
        return(
        <AnimeCard  key={anime.mal_id} id={anime.mal_id} title={anime.title} img={anime.images.jpg.image_url}/>
        )})}
      </div>
       
       <Footer/>
    </div>}
    </>
  )
}

export default Home;