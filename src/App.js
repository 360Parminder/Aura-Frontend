 /* eslint-disable */ 
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import './App.css';
import Email from './Components/Signup/Email';
import InviteFriend from './Components/Signup/InviteFriend';
import Password from './Components/Signup/Password';
import ProfilePic from './Components/Signup/ProfilePic';
import { BoxesCore } from './Components/ui/background-boxes';
import { BackgroundBeamsDemo } from './Pages/BackgroundBeamsDemo';
import Layout from './Pages/Layout/Layout';
import Login from './Pages/Login/Login';
import Signup from './Pages/Signup/Signup';
import Profile from './Pages/Profile/Profile';
import Error from './Pages/Error';
import Contact from './Pages/Contact/Contact';
import MoviesShowsDashboard from './Pages/MoviesShowsDashboard/MoviesShowsDashboard';
import Home from './Pages/Home/Home';
import VideoDetails from './Pages/VideoDetails/VideoDetails';
import Player from './Pages/Player/Player';
import DownloadVideo from './Pages/Download/DownloadVideo';
import { AuthProvider } from './Context/AuthContext';


function App() {
  return (
   
 <Routes>
      <Route path="/" element={<Layout/>} >
      <Route index element={<Home/>} />
      <Route path='moviesShowsDashboard' element={<MoviesShowsDashboard/>}/>
      <Route path='videoDetails' element={<VideoDetails/>}/>
      <Route path='profile' element={<Profile/>}/>
      <Route path='downloadVideo' element={<DownloadVideo/>}/>
      </Route>
      <Route path="/player" element={<Player/>} />
      <Route path="/signup" element={<Signup/>} >
      <Route index element={<Email/>} />
      <Route path='password' element={<Password/>}/>
      <Route path='inviteFriends' element={<InviteFriend/>}/>
      <Route path='Avatar' element={<ProfilePic/>}/>
      </Route>
      <Route path="/login" element={<Login/>} />
      <Route path='/contact' element={<Contact/>}/>
      <Route path='*' element={<Error/>}/>

    </Routes>
  
 
);
}

export default App;
