import SongForm from "../functional/SongForm"
import Button from "../style/Button"

const Song = (props) =>{
  const{songname, id, artist, deleteSong} = props

  return(
    <div className="border">
  
        <h2>♪ {songname} ♪</h2>
        <p>🎤: {artist} </p>
        <Button onClick={()=>deleteSong(id)}>delete</Button>
        
      
    </div>
  )
}

export default Song