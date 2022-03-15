import logo from './logo.svg';
import './App.css';
import MusicListA from './functional/MusicList';
import MusicListB from './class/MusicList';



function App() {
  return (
    <div className='border'>
        <div className='border'>
          <h1> 🎧 Music List App 🎧</h1>
          <div className='border'>
          
          <MusicListB header='Class Music List'/>
        </div>
        
          <div className='border'>
            <MusicListA header='Functional Music List'/>
            <MusicListA name='song' initialSongs={[
              {songname:'Come As You Are', artist:'Nirvana' },
              {songname:'Jammin', artist:'Bob Marley' },
              {songname:'Youre Somebody else', artist:'Flora Cash' }
              ]}/>
        </div>
    </div>
    </div>
  );
}

export default App;
