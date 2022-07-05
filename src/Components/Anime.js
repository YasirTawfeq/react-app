import '../index.css'
function Anime() {
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
        <div className="flex justify-evenly ">
        <div className=" text-black font-bold cursor-pointer hover:border-b-2 border-black" onClick={() => console.log("Clicked")}>New Episode</div>
        <div className=" text-black font-bold cursor-pointer hover:border-b-2 border-black"  onClick={() => console.log("Clicked")}>English</div>
        <div className=" text-black font-bold cursor-pointer hover:border-b-2 border-black"  onClick={() => console.log("Clicked")}>Kurdish</div>
        </div>
      </div>

      <div className="flex flex-wrap justify-around"> 
       {animeList.map((anime)=>
       <div className=" xl:w-40 h-40 w-36 m-1 shadow-md rounded-lg overflow-hidden bg-yellow-300 hover:shadow-2xl hover:shadow-orange-300 cursor-pointer ">
       <img className=" w-full h-28 " src={anime.img} alt={anime.title}/>
       <div className="text-center uppercase font-semibold text-xs">{anime.title} <small className="uppercase">({anime.subordub})</small></div>
       <div className=" pb-0.5 text-center uppercase font-semibold"><small>ep {anime.ebisodes}</small></div>
       </div>
       )}
      </div>   
    </div>
  )
}

export default Anime