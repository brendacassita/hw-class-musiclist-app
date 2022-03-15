import React from "react";
import { useState, useEffect } from "react";

const MusicList = (props)=>{
  const[songs, setSongs] =  useState(props.initialSongs || [])
  const {song,setSong} = useState('')

const renderSongs = ()=>{
  return songs.map((song)=>{
    return{
     

    }
  })
}




  return(
    <div>
      <h1>Functional Music List:</h1>
    </div>
  )
}
export default MusicList