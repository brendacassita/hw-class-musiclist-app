import React from "react";
import { useState, useEffect } from "react";
import axios from 'axios'

const SongList = ()=>{
  const[songs, setSongs] =  useState([])
  useEffect(()=>{
    getSongs()
}, [])

const getSongs = async ()=>{
  let res = await axios.get('/api/songs')
  setSongs(res.data)
}

const renderSongs = ()=>{
  return songs.map(song=>{
    return <SongList key={song.id}{...song}/>
  })
}
  return(
    <div>
      <h1>Functional Song List:</h1>
      <div>
        {renderSongs()}
        </div>
      <p>{JSON.stringify(songs)}</p>
      </div>
  )
}
export default SongList