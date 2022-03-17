import logo from './logo.svg';
import './App.css';
import SongsA from './functional/Songs';
import SongsB from './class/Songs';
import Container from './style/Container';
import {Link, Outlet} from 'react-router-dom'





function App() {
  return (
    <div className='App'>
   
    <div className='border'>
      
      <h1> 🎧 Song List App 🎧</h1>
     <nav>
    <Link to='/about'>About</Link>{'   |  '} 
    <Link to ='dropdown'>Dropdown</Link> {' | '}  
    <Link to ='cardpage'>Card</Link> {' | '}     
       

    </nav>
    
      <Container>
      <div className='border'>
        <SongsB header='Class Song List'/>
      </div>
        
      <div className='border'>
       <SongsA header='Functional Song List'/>
       
      </div>
      </Container>
    </div>
    
    </div>

  );
}

export default App;
