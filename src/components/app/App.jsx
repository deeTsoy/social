import './App.css';
import Header from '../header/Header';
import NavBar from '../NavBar/NavBar';
import ProfileContainer from '../Profile/ProfileContainer';
import MessagesContainer from '../Messages/MessagesContainer'
import News from '../News/News';
import Music from '../Music/Music';
import Settings from '../Settings/Settings';
import UsersContainer from '../Users/usersContainer'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

const App =(props) => {
  return (
    <Router>
      <div className="app-wrapper">
        <Header/>
        <NavBar/>
        <div className='app-wrapper-content'>
          <Routes>
              <Route path="/profile" element={<ProfileContainer
                store = {props.store}
                />}/>
              <Route path="/messages" element={<MessagesContainer 
                store = {props.store}
                />}/>
              <Route path="/news" element={<News/>}/>
              <Route path="/music" element={<Music/>}/>
              <Route path="/settings" element={<Settings/>}/>
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
