import React from 'react'
import '../index.css';
import Navbar from './Navbar';
import NewEpisode from './NewEpisode';
import Footer from './Footer';
import { useState,useEffect } from 'react';
import HashLoader from "react-spinners/HashLoader";

function App() {

   const [loading,setLoading] = useState(false);
       
       useEffect(()=>{
       setLoading(true);
         setTimeout(()=>{
             setLoading(false);
         },2000)
      },[])


  return (
    <div>
    {loading?  
    <div className=" flex justify-center items-center mt-52"><HashLoader color={"yellow"} loading={loading} size={60} /></div>
     :<>
     <Navbar />
     <NewEpisode />
     <Footer />
     </>}
    </div>
  )
}

export default App