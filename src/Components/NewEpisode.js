import '../index.css'
import AnimeCard from './AnimeCard'
import {Link} from 'react-router-dom';
function NewEpisode() {
  const animeList=[
    {title:"One Piece",img:"https://i.pinimg.com/originals/ef/4b/c8/ef4bc8e162fce11f2a609cb0632193d5.jpg",ebisodes:234,subordub:"sub"},
     {title:"demon slayer",img:"https://recenthighlights.com/wp-content/uploads/2022/03/Demon-Slayer-Season-3.jpg",ebisodes:234,subordub:"sub"},
      {title:"attack on titan",img:"https://wallpaperaccess.com/full/2602009.jpg",ebisodes:234,subordub:"sub"},
       {title:"naruto",img:"https://www.myfreewalls.com/public/uploads/preview/ultra-hd-uzumaki-naruto-anime-4k-wallpaper-11623716222tku0ameou5.jpg",ebisodes:234,subordub:"sub"},
       {title:"One Piece",img:"https://i.pinimg.com/originals/ef/4b/c8/ef4bc8e162fce11f2a609cb0632193d5.jpg",ebisodes:34,subordub:"dub"},
     {title:"demon slayer",img:"https://recenthighlights.com/wp-content/uploads/2022/03/Demon-Slayer-Season-3.jpg",ebisodes:4,subordub:"dub"},
      {title:"attack on titan",img:"https://wallpaperaccess.com/full/2602009.jpg",ebisodes:234,subordub:"dub"},
       {title:"naruto",img:"https://www.myfreewalls.com/public/uploads/preview/ultra-hd-uzumaki-naruto-anime-4k-wallpaper-11623716222tku0ameou5.jpg",ebisodes:24,subordub:"dub"},
      ];
  return (
    <div className=" m-5 md:m-3 ">
      <div className=" font-mono w-full h-10 bg-yellow-300 rounded-xl mt-2 mb-3 p-2 ">
        <ul className="flex justify-evenly ">
        <li className=" text-black font-bold cursor-pointer border-b-2 border-black"><Link to="/" >New Episods</Link></li>
        <li className=" text-black font-bold cursor-pointer hover:border-b-2 border-black"><Link to="/Home" >Go to Home page</Link></li>
        </ul>
      </div>
       <AnimeCard data={animeList}/>
    </div>
  )
}



export default NewEpisode;