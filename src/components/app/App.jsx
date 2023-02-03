import './App.css';
import Header from '../header/Header';
import NavBar from '../NavBar/NavBar';
import Profile from '../Profile/Profile';
import Messages from '../Messages/Messages';
import News from '../News/News';
import Music from '../Music/Music';
import Settings from '../Settings/Settings';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

const App =(props) => {


  return (
    <Router>
      <div className="app-wrapper">
        <Header/>
        <NavBar/>
        <div className='app-wrapper-content'>
          <Routes>
              <Route path="/profile" element={<Profile 
                profilePage={props.state.profilePage} 
                dispatch={props.dispatch}/>}/>
              <Route path="/messages" element={<Messages 
                store ={props.store}
                dispatch={props.dispatch}/>}/>
              <Route path="/news" element={<News/>}/>
              <Route path="/music" element={<Music/>}/>
              <Route path="/settings" element={<Settings/>}/>
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
