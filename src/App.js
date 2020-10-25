import React from 'react';
import {Route } from 'react-router-dom';
import './App.css';
import Header from './components//Header/Header';

import DialogsContainer from './components/Dialogs/DialogsContainer';
import Music from './components/Music/Music';
import Nav from './components/Navbar/Navbar';
import News from './components/News/News';
import Profile from './components/Profile/Profile';
import Settings from './components/Settings/Settings';

const App = (props) => {
  return (
            <div className="app-wrapper">
          <Header />
          <Nav />
        
          <div className='app-wrapper-content'>
            <Route path='/dialogs'render={()=> <DialogsContainer />}/>
            <Route path='/profile' render={()=> <Profile />}/>
            <Route path='/news' component={News}/>
            <Route path='/music' component={Music}/>
            <Route path='/settings' component={Settings}/>
          </div>
        </div>    
  );
}

export default App;

