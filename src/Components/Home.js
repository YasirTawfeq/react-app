import React from 'react'
import {Link} from 'react-router-dom';
import Footer from './Footer';
import AnimeCard from './AnimeCard';

function Home() {
 const animeList=[
    {title:"One Piece",img:"https://i.pinimg.com/originals/ef/4b/c8/ef4bc8e162fce11f2a609cb0632193d5.jpg",subordub:"sub"},
     {title:"demon slayer",img:"https://recenthighlights.com/wp-content/uploads/2022/03/Demon-Slayer-Season-3.jpg",subordub:"sub"},
      {title:"attack on titan",img:"https://wallpaperaccess.com/full/2602009.jpg",subordub:"sub"},
       {title:"naruto",img:"https://www.myfreewalls.com/public/uploads/preview/ultra-hd-uzumaki-naruto-anime-4k-wallpaper-11623716222tku0ameou5.jpg",subordub:"sub"},
       {title:"One Piece",img:"https://i.pinimg.com/originals/ef/4b/c8/ef4bc8e162fce11f2a609cb0632193d5.jpg",subordub:"dub"},
     {title:"demon slayer",img:"https://recenthighlights.com/wp-content/uploads/2022/03/Demon-Slayer-Season-3.jpg",subordub:"dub"},
      {title:"attack on titan",img:"https://wallpaperaccess.com/full/2602009.jpg",subordub:"dub"},
       {title:"naruto",img:"https://www.myfreewalls.com/public/uploads/preview/ultra-hd-uzumaki-naruto-anime-4k-wallpaper-11623716222tku0ameou5.jpg",ebisodes:24,subordub:"dub"},
      {title:"One Piece",img:"https://i.pinimg.com/originals/ef/4b/c8/ef4bc8e162fce11f2a609cb0632193d5.jpg",subordub:"sub"},
     {title:"demon slayer",img:"https://recenthighlights.com/wp-content/uploads/2022/03/Demon-Slayer-Season-3.jpg",subordub:"sub"},
      {title:"attack on titan",img:"https://wallpaperaccess.com/full/2602009.jpg",subordub:"sub"},
       {title:"naruto",img:"https://www.myfreewalls.com/public/uploads/preview/ultra-hd-uzumaki-naruto-anime-4k-wallpaper-11623716222tku0ameou5.jpg",subordub:"sub"},
       {title:"One Piece",img:"https://i.pinimg.com/originals/ef/4b/c8/ef4bc8e162fce11f2a609cb0632193d5.jpg",subordub:"dub"},
     {title:"demon slayer",img:"https://recenthighlights.com/wp-content/uploads/2022/03/Demon-Slayer-Season-3.jpg",subordub:"dub"},
      {title:"attack on titan",img:"https://wallpaperaccess.com/full/2602009.jpg",subordub:"dub"},
       {title:"naruto",img:"https://www.myfreewalls.com/public/uploads/preview/ultra-hd-uzumaki-naruto-anime-4k-wallpaper-11623716222tku0ameou5.jpg",subordub:"dub"},
      {title:"One Piece",img:"https://i.pinimg.com/originals/ef/4b/c8/ef4bc8e162fce11f2a609cb0632193d5.jpg",subordub:"sub"},
     {title:"demon slayer",img:"https://recenthighlights.com/wp-content/uploads/2022/03/Demon-Slayer-Season-3.jpg",subordub:"sub"},
      {title:"attack on titan",img:"https://wallpaperaccess.com/full/2602009.jpg",subordub:"sub"},
       {title:"naruto",img:"https://www.myfreewalls.com/public/uploads/preview/ultra-hd-uzumaki-naruto-anime-4k-wallpaper-11623716222tku0ameou5.jpg",subordub:"sub"},
       {title:"One Piece",img:"https://i.pinimg.com/originals/ef/4b/c8/ef4bc8e162fce11f2a609cb0632193d5.jpg",subordub:"dub"},
     {title:"demon slayer",img:"https://recenthighlights.com/wp-content/uploads/2022/03/Demon-Slayer-Season-3.jpg",subordub:"dub"},
      {title:"attack on titan",img:"https://wallpaperaccess.com/full/2602009.jpg",subordub:"dub"},
       {title:"naruto",img:"https://www.myfreewalls.com/public/uploads/preview/ultra-hd-uzumaki-naruto-anime-4k-wallpaper-11623716222tku0ameou5.jpg",subordub:"dub"},
 
    ];
  return (
    <div className=" m-5 md:m-3 ">
      <div className=" font-mono w-full h-10 bg-yellow-300 rounded-xl mt-2 mb-3 p-2 ">
        <ul className="flex justify-evenly ">
        <li className=" text-black font-bold cursor-pointer hover:border-b-2 border-black"><Link to="/" >New Episods</Link></li>
        <li className=" text-black font-bold cursor-pointer border-b-2 border-black"><Link to="/Home" >Go to Home page</Link></li>
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
           <button className="bg-black text-yellow-300 rounded-sm p-0.5" type="submit">Search</button>
        </form>
      </div>
      
       <AnimeCard data={animeList}/>
       <Footer/>
    </div>
  )
}

export default Home