import React from 'react'
function AnimeHome() {
    
    

    return (
    <div>
     <center className="text-yellow-300">  
       <img className=" w-full lg:w-1/2 h-80" src="https://wallpaper.dog/large/20487367.jpg" alt="" />
       <div className=" w-full lg:w-1/2 mt-2 lg:ml-3 lg:mr-3 p-3 flex justify-between items-center">
        <button className="" >
          <svg className=" bg-yellow-300 w-9 h-9 cursor-pointer rounded-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M447.1 256C447.1 273.7 433.7 288 416 288H109.3l105.4 105.4c12.5 12.5 12.5 32.75 0 45.25C208.4 444.9 200.2 448 192 448s-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25l160-160c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25L109.3 224H416C433.7 224 447.1 238.3 447.1 256z"/></svg>
        </button>
        <p className=" text-xl">Anime Name</p>
       </div>

       <div className="w-full lg:w-1/2 mt-3">
        <ul className=" flex justify-center flex-wrap "> 
         <li className="ml-3">Action</li>
         <li className="ml-3">Action</li>
        </ul>
       </div>
      
      <div className="w-full lg:w-1/2 mt-3">
        <p>lorem ipsum dolor sit amet lorem, consectetur lorem, 
        sed diam nonum lorem urnalor lorem ipsum dolor sit amet 
        lorem ipsum dolor sit amet lorem, sed diam nonum lorem 
        ipsum dolor lorem ipsum lorem ipsum dolor</p>
      </div>

      <div className="w-full lg:w-1/2 mt-3">
        <div className="w-full p-4 font-bold uppercase text-black bg-yellow-300 rounded-lg "> Episods </div>
        
      </div>
       
     </center>
    
    </div>
  )
}

export default AnimeHome