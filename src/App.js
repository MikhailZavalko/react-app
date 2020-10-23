import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import { Route, BrowserRouter } from 'react-router-dom';
import Settings from './components/Settings/Settings';
import News from './components/News/News';
import Music from './components/Music/Music';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';

const App = (props) => {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Navbar />
        <div className="app-wrapper-content">

          <Route  path="/dialogs"
                  render={ () => <DialogsContainer /> } />

          <Route  path="/profile/:userId?"
                  render={ () => <ProfileContainer /> } />

          <Route  path="/users"
                  render={ () => <UsersContainer /> } />

          <Route path="/settings" component={ Settings } />
          <Route path="/news" component={ News } />
          <Route path="/music" component={ Music } />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
