import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import { useState } from 'react';
import About from './components/about';
import Profile from './components/profile';
import { Route,Link, useHistory } from 'react-router-dom';
import Router from './components/Router';
import Firebasecrud from './components/firebasecrud';

function App() {
  
  
  // const [state, setstate] = useState([])
  return (
    <div className="App">
      <Firebasecrud />
     {/* <button onClick={()=>setState('about')}> About</button>
     <button onClick={()=>setState('profile')}> Profile</button> */}
    
      
      
      
      {/* <h1>hi</h1>
      <button onClick={()=>{
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then((res)=>{ 
          setstate(res.data) 
        })
      }}>click me</button>
      
      {
        state.map((obj)=>{
          return(
            <div key={obj.id}>
              <h1> {obj.id}. {obj.title}</h1>
              <p>{obj.body}</p>
            </div>
          )
        })
      } */}




    </div>
  );
}

export default App;
