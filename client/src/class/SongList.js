import React from "react";
import SongForm from "./SongForm";

class SongList extends React.Component{
  constructor(props){
    super(props)
    // initial state
    this.state = {songs: [
      {songname:'Come As You Are', artist:'Nirvana' },
      {songname:'Jammin', artist:'Bob Marley' },
      {songname:'Youre Somebody else', artist:'Flora Cash' },

    ],
     showForm: true,
    }
  }

  addSong=(song)=>{
    // DB call
    // update state
    let updateSongs = [song, ...this.state.songs]
    this.setState({
      songs:updateSongs
    })
  }
  
  deleteSong = (songName)=>{
    // delete from db - skip
    // remove from state
    let filteredSongs = this.state.songs.filter(song => song.songname !== songName)
    // set state updates state and triggers render to be called again
    this.setState({
      songs:filteredSongs
    }) 
  }

  // updateSong = (songName)=>{
  //   let updatedSongs = this.state.songs
  // }

  renderSongs=()=>{
    return this.state.songs.map((song)=>{
      return(
        <div className="border">
          <h2>♪ {song.songname} ♪</h2>
          <p> 🎤: {song.artist}</p>
          <button onClick={()=>this.deleteSong(song.songname)}>delete</button>
        
        </div>
      )
    })
  }

  toggleForm = () =>{
    this.setState({
      showForm: !this.state.showForm
    })
  }

  // have to define render
  render(){
    const {showForm} = this.state


    return(
      <div>
        <button onClick={this.toggleForm}>{this.state.showForm ? 'hide' : 'show'}</button>
        {this.state.showForm && <SongForm addSong={this.addSong}/>}
        <h1>Class Song List:</h1>
        {this.renderSongs()}
      </div>
    )
  }
}

export default SongList