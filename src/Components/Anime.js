import '../index.css'
function Anime() {
  const animeList=[
    {title:"One Piece",img:"https://i.pinimg.com/originals/ef/4b/c8/ef4bc8e162fce11f2a609cb0632193d5.jpg"},
     {title:"demon slayer",img:"https://recenthighlights.com/wp-content/uploads/2022/03/Demon-Slayer-Season-3.jpg"},
      {title:"attack on titan",img:"https://wallpaperaccess.com/full/2602009.jpg"},
       {title:"naruto",img:"https://www.myfreewalls.com/public/uploads/preview/ultra-hd-uzumaki-naruto-anime-4k-wallpaper-11623716222tku0ameou5.jpg"},
  ];
  return (
    <div>
     <h1 className=" mt-10 text-center font-bold mb-5">ANIME</h1>
      <div className="flex flex-wrap justify-evenly"> 
       {animeList.map((anime)=>
       <div className=" m-3 shadow-md rounded-lg overflow-hidden bg-yellow-300 hover:shadow-2xl cursor-pointer ">
       <img className=" w-80 h-80" src={anime.img} alt={anime.title}/>
       <div className="text-center p-4 uppercase font-bold">{anime.title}</div>
       </div>
       )}
      </div>   
    </div>
  )
}

export default Anime