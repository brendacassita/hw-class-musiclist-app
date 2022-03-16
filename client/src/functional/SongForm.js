import React from "react";
import { useState } from "react";


const SongForm = (props) =>{
  const [songname, setSongName] = useState (props.songname ? props.songname : '')
  const [artist, setArtist] = useState ([])


  const handleSubmit = (e) =>{
    e.preventDefault()
    if(props.id){
      props.updateSong({id:props.id})
    }else{
      console.log(songname)
      props.addSong({songname, artist})
    }
  }



  return(
    <div className="border">
      <h1>Functional Song Form</h1>
      <form onSubmit={handleSubmit}>
        <p>functional song name:</p>
        <input value={songname} onChange={(e)=>setSongName(e.target.value)}/>
        <p>functional artist name: </p>
        <input value={artist} onChange={(e)=>setArtist(e.target.value)}/>
      <button>add</button>
      </form>
    </div>
  )


}

export default SongForm