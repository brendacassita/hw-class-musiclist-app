import React from "react";
import { useState, useEffect } from "react";
import axios from 'axios'
import Song from "./Song";
import {useParams} from 'react-router-dom'
import SongForm from "./SongForm";


const Songs = (props)=>{
  const{songname } = props
  const[songs, setSongs] =  useState([])
  const [showForm, setShowForm] = useState(false)
  useEffect(()=>{
    getSongs()
}, [])

const addSong = async (song)=>{
  try{
    let res = await axios.post('/api/songs',song )
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
    return(
       <Song 
       key={song.id}
       songname={songname}
       deleteSong={deleteSong}
       addSong={addSong}{...song}/>
  )
})
}

const deleteSong = async (id)=>{
  try{
    let res = await axios.delete(`/api/songs/${id}`)
    setSongs(songs.filter((song)=> song.id !== res.data.id))
  }catch(err){
    alert('error occured')
  }
  }





  return(
    <div>
      <button onClick={()=>setShowForm(!showForm)}>{showForm ? 'hide' : 'show'} </button>
      {showForm && <SongForm songname={songname} addSong={addSong} />}
      <h1>Functional Song List:</h1>
        {renderSongs()}
      <p>{JSON.stringify(songs)}</p>
      </div>
  )
}
export default Songs