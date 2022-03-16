import SongForm from "../class/SongForm"
const Song = (props) =>{
  const{songname, id,updateSong} = props

  return(
    <div>
  
        <p>Song Name: {songname}</p>
        <SongForm id={id} songname={songname} updateSong={updateSong}/>
      
    </div>
  )
}

export default Song