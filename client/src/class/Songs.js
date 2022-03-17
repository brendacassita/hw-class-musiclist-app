import React from "react";
import SongForm from "./SongForm";
import Button from "../style/Button";

class Songs extends React.Component{
  constructor(props){
    super(props)
    // initial state
    this.state = {songs: [
      {songname:'Come As You Are', artist:'Nirvana'},
      {songname:'Jammin', artist:'Bob Marley'},
      {songname:'Youre Sombody Else', artist:'Flora Cash'},
    


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
        <div className="App">
        <div key={song.songname}className="border">
          <h2>♪ {song.songname} ♪</h2>
          <p> 🎤: {song.artist}</p>
          <Button onClick={()=>this.deleteSong(song.songname)}>delete</Button>
          </div>
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
      <div className="App">
        <Button onClick={this.toggleForm}>{this.state.showForm ? 'hide' : 'show'}</Button>
        {this.state.showForm && <SongForm addSong={this.addSong}/>}
        <h1>Class Song List:</h1>
        {this.renderSongs()}
      </div>
    )
  }
}

export default Songs