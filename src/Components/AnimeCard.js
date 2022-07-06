import '../index.css';
function Anime({data}) {
  return (
     <div className="flex flex-wrap justify-around"> 
       {data.map((anime)=>
       <div className=" xl:w-40 h-40 w-36 m-1 shadow-md rounded-lg overflow-hidden bg-yellow-300 hover:shadow-sm hover:shadow-yellow-100 cursor-pointer ">
       <img className=" w-full h-28 " src={anime.img} alt={anime.title}/>
       <div className="text-center uppercase font-semibold text-xs">{anime.title} <small className="uppercase">({anime.subordub})</small></div>
       {anime.ebisodes?<div className=" pb-0.5 text-center uppercase font-semibold"><small>ep {anime.ebisodes}</small></div> :<div></div> }
       </div>
       )}
      </div>   
  )
}

export default Anime;