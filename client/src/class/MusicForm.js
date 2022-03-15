import React from "react";

class MusicForm extends React.Component{
  constructor(props){
    super(props)
    this.state={
      songname:'',
      artist: ''
    }
  }


  handleChange=(e)=>{
    console.log('value:', e.target.value)
    console.log('name',e.target.name)
    this.setState({
      [e.target.name]:e.target.value
    })
  //  THIS WORKS:
  //   if(e.target.name === 'songname'){
  //     this.setState({
  //       songname:e.target.value
  //     })
  //   }
  //   if(e.target.name === 'artist'){
  //   this.setState({
  //     artist:e.target.value
  //   })
  // }
}
  handleSubmit=(e)=>{
    e.preventDefault()
    console.log(this.state)
    this.props.addSong(this.state)
  }



  render(){
    return(
      <div className="border">
        <h1>Music Form</h1>
        <form onSubmit={this.handleSubmit}>
          <p>song name:</p>
          <input name='songname' value = {this.state.songname}onChange={this.handleChange}/>
          <p>artist:</p>
          <input name='artist'value = {this.state.artist}onChange={this.handleChange}/>
          <button>add</button>
        </form>
      </div>
    )
  }
}

export default MusicForm