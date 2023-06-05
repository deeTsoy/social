import { useEffect } from "react"
import HeaderContainer from '../header/HeaderContainer';
import ProfileContainer from '../Profile/ProfileContainer';
import UsersContainer from '../Users/usersContainer'
import MessagesContainer from '../Messages/MessagesContainer'
import NavBar from '../NavBar/NavBar';
import Login from '../Login/Login'
import News from '../News/News';
import Music from '../Music/Music';
import Settings from '../Settings/Settings';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { initializeApp } from "../Redux/appReducer";
import Loader from "../loader/loader"

import './App.css';

const App =(props) => {

  const initialized = useSelector(state => state.app.initialized);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(initializeApp());
  }, [dispatch]);

  if (!initialized) {
    return <Loader />
    }

  return (
    <Router>
      <div className="app-wrapper">
        <HeaderContainer/>
        <NavBar/>
        <div className='app-wrapper-content'>
          <Routes>
              <Route path="/profile/:userId?" element={<ProfileContainer
                store = {props.store}
                />}/>
              <Route path="/messages" element={<MessagesContainer 
                store = {props.store}
                />}/>
              <Route path="/news" element={<News/>}/>
              <Route path="/music" element={<Music/>}/>
              <Route path="/settings" element={<Settings/>}/>
              <Route path="/Login" element={<Login/>}/>
              <Route path="/users" element={<UsersContainer 
                store = {props.store}
                />}/>
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
