import logo from './logo.svg';
import './App.css';
import SongsA from './functional/Songs';
import SongsB from './class/Songs';





function App() {
  return (
    <div className='App'>
    <div className='border'>
      <h1> 🎧 Song List App 🎧</h1>

      <div className='border'>
        <SongsB header='Class Song List'/>
      </div>
        
      <div className='border'>
       <SongsA header='Functional Song List'/>
      </div>
    </div>
    </div>

  );
}

export default App;
