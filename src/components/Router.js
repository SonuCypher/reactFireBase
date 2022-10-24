import React from 'react'
import About from './about'
import Profile from './profile'
import { useState } from 'react'
import { Route,Link, useHistory } from 'react-router-dom';

function Router() {
    const [state , setState] = useState('')
  const history = useHistory()
    
  
  return (
        <div>
            
    <button onClick={()=>history.push('/profile')}> Profile</button>
    <button onClick={()=>history.push('/about')}> About</button>
      
        <Link to= '/about'>About</Link>
        <Link to= '/profile'>Profile</Link>
        <Route component={About} path='/about'  />
        <Route component={Profile} path='/profile'  />

        </div>
    )
}

export default Router
