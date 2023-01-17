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

  let dialogData = [
    {id : 1,
    name : "Oleg"
    },
    {id : 2,
    name : "petr"
    },
    {id : 3,
    name : "almaz"
    },
    {id : 4,
    name : "sergey"
    },
    {id : 5,
    name : "kana"
     },
    {id : 6,
    name : "korzh"
    }
  ];
  
  let massagesData = [
    {id: 1, massage: "Hola!"},
    {id: 2, massage: "How are you?!"},
    {id: 3, massage: "Sugoi"},
    {id: 4, massage: "Sugoiii!!"}
  ];
  
  let postsData = [
  {id: 1, post: "holla!", like: 22},
  {id: 2, post: "How are you?!", like: 56},
  {id: 3, post: "Sugoi", like: 10},
  {id: 4, post: "HOla holaaaaa", like:12}
  ];

  return (
    <Router>
      <div className="app-wrapper">
        <Header/>
        <NavBar/>
        <div className='app-wrapper-content'>
          <Routes>
              <Route path="/profile" element={<Profile postsData={postsData}/>}/>
              <Route path="/messages" element={<Messages dialogData ={dialogData} massagesData = {massagesData}/>}/>
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
