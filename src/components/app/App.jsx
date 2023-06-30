import React, { lazy, Suspense, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { initializeApp } from '../Redux/appReducer';
import HeaderContainer from '../header/HeaderContainer';
import NavBar from '../NavBar/NavBar';
import Login from '../Login/Login';
import News from '../News/News';
import Music from '../Music/Music';
import Settings from '../Settings/Settings';
import Loader from '../loader/loader';
import './App.css';

const ProfileContainer = lazy(() => import('../Profile/ProfileContainer'));
const UsersContainer = lazy(() => import('../Users/usersContainer'));
const MessagesContainer = lazy(() => import('../Messages/MessagesContainer'));

const App = () => {
  const initialized = useSelector((state) => state.app.initialized);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(initializeApp());
  }, [dispatch]);

  if (!initialized) {
    return <Loader />;
  }

  return (
    <Router>
      <div className="app-wrapper">
        <HeaderContainer />
        <NavBar />
        <div className="app-wrapper-content">
          <Suspense fallback={<Loader />}>
            <Routes>
              <Route
                path="/profile/:userId?"
                element={<ProfileContainer />}
              />
              <Route path="/messages" element={<MessagesContainer />} />
              <Route path="/news" element={<News />} />
              <Route path="/music" element={<Music />} />
              <Route path="/settings" element={<Settings />} />
              <Route path="/login" element={<Login />} />
              <Route path="/users" element={<UsersContainer />} />
            </Routes>
          </Suspense>
        </div>
      </div>
    </Router>
  );
};

export default App;
