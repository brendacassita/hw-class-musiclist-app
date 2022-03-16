import SongForm from "../functional/SongForm"

const Song = (props) =>{
  const{songname, id, artist, deleteSong, addSong} = props

  return(
    <div className="border">
  
        <h2>♪ {songname} ♪</h2>
        <p>🎤: {artist} </p>
        <button onClick={()=>deleteSong(id)}>delete</button>
        
      
    </div>
  )
}

export default Song