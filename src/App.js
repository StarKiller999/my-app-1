import React from 'react';
import './App.css';
import Header from './components/Header/Header.jsx';
import Navbar from './components/Navbar/Navbar.jsx';
import Profile from './components/Profile/Profile.jsx';
import Dialogs from './components/Dialogs/Dialogs.jsx';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import Friends from './components/Friends/Friends';


const App = (props) => {
 
  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <Header />
        <Navbar />
        <div className='app-wrapper-content'>
          <Routes>
            <Route path='/dialogs/*' element={<Dialogs state={props.state.dialogsPage}/>} />
            <Route path='/profile/*' element={<Profile state={props.state.profilePage}/>} />
            <Route path='/news/*' element={<News />} />
            <Route path='/music/*' element={<Music />} />
            <Route path='/settings/*' element={<Settings />} />
            <Route path='/friends/*' element={<Friends />} />

          </Routes>
        </div>

      </div>
    </BrowserRouter>
  );
}

export default App;
// state={props.state.dialogsPage}