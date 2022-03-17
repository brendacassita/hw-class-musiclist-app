import React from "react";
import { useState, useEffect } from "react";
import axios from 'axios'
import Song from "./Song";
import SongForm from "./SongForm";
import Button from "../style/Button";
import Container from "../style/Container";
import { PRIMARY_COLOR } from "../style/styles";


const Songs = (props)=>{
  const{songname } = props
  const[songs, setSongs] =  useState([])
  const [showForm, setShowForm] = useState(false)
  useEffect(()=>{
    getSongs()
}, [])

const addSong = async (songname)=>{
  try{
    let res = await axios.post('/api/songs',songname )
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
    // <div className="App">
      <div className="container" style ={{borderBlockColor: `${PRIMARY_COLOR}`}}>
      <Button onClick={()=>setShowForm(!showForm)}>{showForm ? 'hide' : 'show'} </Button>
      {showForm && <SongForm songname={songname} addSong={addSong} />}
      <h1>Functional Song List:</h1>
        {renderSongs()}
      <p>{JSON.stringify(songs)}</p>
      </div>
      // </div>
  )
}
export default Songs