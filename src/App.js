import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import { Route, BrowserRouter } from 'react-router-dom';
import Settings from './components/Settings/Settings';
import News from './components/News/News';
import Music from './components/Music/Music';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import LoginPage from './components/Login/Login';

const App = (props) => {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <HeaderContainer />
        <Navbar />
        <div className="app-wrapper-content">

          <Route  path="/dialogs"
                  render={ () => <DialogsContainer /> } />

          <Route  path="/profile/:userId?"
                  render={ () => <ProfileContainer /> } />

          <Route  path="/users"
                  render={ () => <UsersContainer /> } />

          <Route  path="/login"
                  render={ () => <LoginPage /> } />

          <Route path="/settings" component={ Settings } />
          <Route path="/news" component={ News } />
          <Route path="/music" component={ Music } />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
