import React from "react";
import { useState, useEffect } from "react";
import axios from 'axios'
import Song from "./Song";
import {useParams} from 'react-router-dom'


const Songs = ()=>{
  const[songs, setSongs] =  useState([])
  useEffect(()=>{
    getSongs()
}, [])

const addSong = async ()=>{
  try{
    let res = await axios.post('/api/songs', )
    setSongs([res.data,...songs])
  }catch (err){
    alert('error occured in adding')
  }
}
const getSongs = async ()=>{
  try{
    let res = await axios.get('/api/songs')
    setSongs(res.data)
  }catch(err){
    alert('error occured in getSongs')
  }
}

const renderSongs = ()=>{
  return songs.map((song)=>{
    return <Song key={song.id}{...song}/>
  })
}
  return(
    <div>
      <h1>Functional Song List:</h1>
        {renderSongs()}
      <p>{JSON.stringify(songs)}</p>
      </div>
  )
}
export default Songs