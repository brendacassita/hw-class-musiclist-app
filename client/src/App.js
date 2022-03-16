import logo from './logo.svg';
import './App.css';
import SongListA from './functional/SongList';
import SongListB from './class/SongList';
import {Link, Outlet} from 'react-router-dom';



function App() {
  return (
    <div className='border'>
      <h1> 🎧 Song List App 🎧</h1>

      <div className='border'>
        <SongListB header='Class Song List'/>
      </div>
        
      <div className='border'>
       <SongListA header='Functional Song List'/>
      </div>
    </div>

  );
}

export default App;
